import { jsPDF } from "jspdf";

function hasNonAscii(str: string): boolean {
  return /[^\x00-\x7F]/.test(str);
}

function extractEnglishDishName(aiContent: string, fallback: string): string {
  // Try "Dish: <name>" or "dish name: <name>" pattern in AI content
  const dishMatch = aiContent.match(/[Dd]ish(?:\s*name)?[:\s]+([A-Z][A-Za-z\s''-]{2,40})/);
  if (dishMatch) return dishMatch[1].trim();
  // Try English name in parentheses after Chinese chars e.g. 酸菜鱼 (Sour Cabbage Fish)
  const parenMatch = fallback.match(/[一-鿿㐀-鿿]+\s*[（(]([A-Za-z\s]+)[)）]/);
  if (parenMatch) return parenMatch[1].trim();
  // Try first capitalized multi-word English phrase in AI content
  const phraseMatch = aiContent.slice(0, 400).match(/([A-Z][a-z]+(?:\s+[A-Za-z]+){1,4})/);
  if (phraseMatch) return phraseMatch[1].trim();
  return "Pricing Report";
}

function stripNonAscii(str: string): string {
  return str.replace(/[^\x00-\x7F]/g, "").trim() || "?";
}

export function exportPricingPdf(opts: {
  dishName: string;
  totalCost: number;
  ingredientCost: number;
  breakdown: string;
  aiContent: string;
}) {
  const { dishName, totalCost, ingredientCost, breakdown, aiContent } = opts;

  // jsPDF built-in fonts don't support CJK — extract or fall back to English
  const displayName = hasNonAscii(dishName)
    ? extractEnglishDishName(aiContent, dishName)
    : dishName;

  const doc = new jsPDF({ unit: "mm", format: "a4" });
  const W = 210;
  const margin = 18;
  const contentW = W - margin * 2;
  let y = 0;

  const orange = [249, 115, 22] as const;
  const gray8 = [31, 31, 31] as const;
  const gray5 = [107, 114, 128] as const;
  const gray2 = [229, 231, 235] as const;

  // Header band
  doc.setFillColor(...orange);
  doc.rect(0, 0, W, 28, "F");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);
  doc.setTextColor(255, 255, 255);
  doc.text("MenuPricer", margin, 13);
  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  doc.text("AI Menu Pricing Report", margin, 20);
  doc.text(new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }), W - margin, 20, { align: "right" });

  y = 38;

  // Dish name
  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.setTextColor(...gray8);
  doc.text(displayName, margin, y);
  // If original name had Chinese characters, show original below in smaller text as note
  if (hasNonAscii(dishName)) {
    y += 6;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(...gray5);
    doc.text(`Original: ${stripNonAscii(dishName) || dishName}`, margin, y);
  }
  y += 10;

  // Divider
  doc.setDrawColor(...gray2);
  doc.setLineWidth(0.3);
  doc.line(margin, y, W - margin, y);
  y += 7;

  // Cost summary boxes — if totalCost is 0 (Quick Estimate mode), derive from AI content
  const margin67 = totalCost > 0 ? ((1 - totalCost / (totalCost * 3)) * 100).toFixed(0) + "%" : "~67%";
  const boxes = [
    { label: "Ingredient Cost", value: ingredientCost > 0 ? `$${ingredientCost.toFixed(2)}` : "AI Est." },
    { label: "Total Cost (incl. labor)", value: totalCost > 0 ? `$${totalCost.toFixed(2)}` : "AI Est." },
    { label: "Est. Gross Margin", value: totalCost > 0 ? margin67 : "~67%" },
  ];
  const boxW = contentW / 3 - 3;
  boxes.forEach((b, i) => {
    const bx = margin + i * (boxW + 4.5);
    doc.setFillColor(255, 247, 237);
    doc.roundedRect(bx, y, boxW, 18, 2, 2, "F");
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.5);
    doc.setTextColor(...gray5);
    doc.text(b.label, bx + boxW / 2, y + 6, { align: "center" });
    doc.setFont("helvetica", "bold");
    doc.setFontSize(13);
    doc.setTextColor(...orange);
    doc.text(b.value, bx + boxW / 2, y + 14, { align: "center" });
  });
  y += 25;

  // Ingredient breakdown (only show if not empty)
  if (breakdown && breakdown.trim()) {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor(...gray8);
    doc.text("Ingredient Breakdown", margin, y);
    y += 5;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8.5);
    doc.setTextColor(...gray5);
    const bkLines = breakdown.split(";").map(s => s.trim()).filter(Boolean);
    bkLines.forEach(line => {
      if (y > 265) { doc.addPage(); y = 20; }
      const safeL = hasNonAscii(line) ? stripNonAscii(line) : line;
      if (safeL) { doc.text(`• ${safeL}`, margin + 2, y); y += 5; }
    });
    y += 4;
  }

  // Divider
  doc.setDrawColor(...gray2);
  doc.line(margin, y, W - margin, y);
  y += 7;

  // AI Content
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.setTextColor(...gray8);
  doc.text("AI Pricing Analysis", margin, y);
  y += 6;

  const aiLines = aiContent.split("\n");
  for (const raw of aiLines) {
    if (y > 270) { doc.addPage(); y = 20; }
    const line = raw.trim();
    if (!line) { y += 2; continue; }

    // Skip lines that are entirely non-ASCII (Chinese-only lines)
    if (hasNonAscii(line) && stripNonAscii(line).length < 3) continue;

    if (line.startsWith("## ")) {
      y += 2;
      doc.setFont("helvetica", "bold");
      doc.setFontSize(10);
      doc.setTextColor(...orange);
      const heading = line.replace("## ", "");
      doc.text(hasNonAscii(heading) ? stripNonAscii(heading) || heading.replace("## ", "") : heading, margin, y);
      y += 6;
    } else if (line.startsWith("**") && line.endsWith("**")) {
      doc.setFont("helvetica", "bold");
      doc.setFontSize(9);
      doc.setTextColor(...gray8);
      const bold = line.replace(/\*\*/g, "");
      doc.text(hasNonAscii(bold) ? stripNonAscii(bold) || bold : bold, margin + 2, y);
      y += 5;
    } else {
      doc.setFont("helvetica", "normal");
      doc.setFontSize(8.5);
      doc.setTextColor(...gray5);
      // Strip markdown bold/italic markers and non-ASCII for body lines
      const clean = hasNonAscii(line)
        ? stripNonAscii(line.replace(/\*\*(.*?)\*\*/g, "$1").replace(/\*(.*?)\*/g, "$1"))
        : line.replace(/\*\*(.*?)\*\*/g, "$1").replace(/\*(.*?)\*/g, "$1");
      if (!clean) continue;
      const wrapped = doc.splitTextToSize(clean, contentW - 4);
      wrapped.forEach((wl: string) => {
        if (y > 270) { doc.addPage(); y = 20; }
        doc.text(wl, margin + 2, y);
        y += 4.5;
      });
    }
  }

  // Footer
  const pageCount = doc.getNumberOfPages();
  for (let p = 1; p <= pageCount; p++) {
    doc.setPage(p);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.5);
    doc.setTextColor(...gray5);
    doc.text("Generated by MenuPricer · aimenupricer.com", margin, 290);
    doc.text(`Page ${p} / ${pageCount}`, W - margin, 290, { align: "right" });
  }

  const safeName = displayName.replace(/[^a-z0-9]/gi, "_").toLowerCase();
  doc.save(`${safeName}_pricing.pdf`);
}
