"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { useState } from "react";

export default function AuthButton() {
  const { data: session, status } = useSession();
  const [menuOpen, setMenuOpen] = useState(false);

  if (status === "loading") return null;

  if (session?.user) {
    return (
      <div className="relative">
        <button
          onClick={() => setMenuOpen(v => !v)}
          className="flex items-center gap-1.5 text-xs font-semibold px-2 py-1.5 rounded-lg border border-gray-200 text-gray-600 hover:border-orange-300 hover:text-orange-600 transition-colors"
        >
          {session.user.image ? (
            <img src={session.user.image} alt="" className="w-5 h-5 rounded-full" />
          ) : (
            <span className="w-5 h-5 rounded-full bg-orange-500 text-white text-[10px] flex items-center justify-center font-bold">
              {session.user.name?.[0] ?? "U"}
            </span>
          )}
          <span className="hidden sm:inline max-w-[80px] truncate">{session.user.name ?? session.user.email}</span>
        </button>
        {menuOpen && (
          <div className="absolute right-0 top-full mt-1 w-40 bg-white border border-gray-100 rounded-xl shadow-lg py-1 z-50">
            <p className="px-3 py-2 text-xs text-gray-400 truncate">{session.user.email}</p>
            <hr className="border-gray-100" />
            <button
              onClick={() => { signOut(); setMenuOpen(false); }}
              className="w-full text-left px-3 py-2 text-xs text-gray-600 hover:bg-gray-50 hover:text-orange-500 transition-colors"
            >
              退出登录
            </button>
          </div>
        )}
      </div>
    );
  }

  return (
    <button
      onClick={() => signIn("google")}
      className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg border border-gray-200 text-gray-600 hover:border-orange-300 hover:text-orange-600 transition-colors"
    >
      <svg width="14" height="14" viewBox="0 0 18 18" fill="none">
        <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z" fill="#4285F4"/>
        <path d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.258c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z" fill="#34A853"/>
        <path d="M3.964 10.707A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.707V4.961H.957A8.996 8.996 0 000 9c0 1.452.348 2.827.957 4.039l3.007-2.332z" fill="#FBBC05"/>
        <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.961L3.964 7.293C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335"/>
      </svg>
      Google 登录
    </button>
  );
}
