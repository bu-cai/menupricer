export interface ParsedTier {
  name: string;
  price: number;
  margin: number;
  scene: string;
}

export function parseTiers(content: string): ParsedTier[] {
  const tiers: ParsedTier[] = [];
  for (const name of ["Budget", "Standard", "Premium"]) {
    const block = content.match(new RegExp(`\\*\\*${name}[^*]*\\*\\*([\\s\\S]*?)(?=\\*\\*|##|$)`));
    if (!block) continue;
    const text = block[1];
    const priceMatch = text.match(/(?:Price)[：:\s]*\$?([\d.]+)/);
    const marginMatch = text.match(/(?:Margin)[：:\s]*([\d.]+)%/);
    const sceneMatch = text.match(/(?:Best for)[：:\s]*(.+)/);
    if (!priceMatch) continue;
    tiers.push({
      name,
      price: parseFloat(priceMatch[1]),
      margin: marginMatch ? parseFloat(marginMatch[1]) : 0,
      scene: sceneMatch ? sceneMatch[1].trim() : "",
    });
  }
  return tiers;
}
