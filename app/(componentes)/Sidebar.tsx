"use client";
import Link from 'next/link';
import { useState } from 'react';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <div>
      {/* botao */}
      <button 
        onClick={() => setIsOpen(true)} 
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-sm shadow-md transition-transform active:scale-95 bg-[rgba(62,39,35,1)] text-white"
      >
        <span className="text-xl font-bold">☰</span>
      </button>

      {/* overlay */}
      <div 
        className={`fixed inset-0 z-40 transition-opacity duration-300 lg:hidden bg-black/50 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`} 
        onClick={closeMenu} 
      />

      {/* sidebar */}
      <aside 
        className={`w-64 h-screen fixed left-0 top-0 flex flex-col p-8 z-50 shadow-2xl transition-transform duration-300 ease-in-out lg:translate-x-0 ${isOpen ? "translate-x-0" : "-translate-x-full"} bg-[rgba(255,248,225,1)] border-r border-[rgba(215,204,200,1)]`}
      >
        <div className="lg:hidden absolute top-4 right-4">
            <button onClick={closeMenu} className="font-bold text-xl text-[rgba(93,64,55,1)]">☰</button>
        </div>

        {/* logo */}
        <div className="mb-12 text-center pb-4 border-b border-[rgba(215,204,200,1)]">
          <h1 className="text-2xl font-light tracking-widest uppercase text-[rgba(93,64,55,1)]">EMPRESA</h1>
          <p className="text-[10px] uppercase tracking-widest mt-3 text-[rgba(141,110,99,1)]">Eventos & Shows</p>
        </div>

        {/* menu */}
        <nav className="flex-1">
          <ul className="space-y-4">
            <li>
                <Link href="/" onClick={closeMenu} className="flex items-center justify-center px-4 py-3 bg-white shadow-sm rounded-sm transition-all hover:shadow-md hover:scale-105 border border-[rgba(215,204,200,1)] text-[rgba(93,64,55,1)]">
                    <p className="text-xs font-medium tracking-widest uppercase">Início</p>
                </Link>
            </li>
            
            <li>
                <Link href="/eventos" onClick={closeMenu} className="flex items-center justify-center px-4 py-3 rounded-sm transition-all hover:bg-white/50 text-[rgba(141,110,99,1)]">
                    <p className="text-xs font-medium tracking-widest uppercase">Lista de Eventos</p>
                </Link>
            </li>
            
            <li>
                <Link href="/meus-ingressos" onClick={closeMenu} className="flex items-center justify-center px-4 py-3 rounded-sm transition-all hover:bg-white/50 text-[rgba(141,110,99,1)]">
                    <p className="text-xs font-medium tracking-widest uppercase">Meus Ingressos</p>
                </Link>
            </li>
            
            <li>
                <Link href="/perfil" onClick={closeMenu} className="flex items-center justify-center px-4 py-3 rounded-sm transition-all hover:bg-white/50 text-[rgba(141,110,99,1)]">
                    <p className="text-xs font-medium tracking-widest uppercase">Perfil</p>
                </Link>
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  );
}