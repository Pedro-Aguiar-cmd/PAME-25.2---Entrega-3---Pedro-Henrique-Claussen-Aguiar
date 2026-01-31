"use client";
import Link from 'next/link';
import { useState } from 'react';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <div>
      {/*botao mobile*/}
      <button onClick={() => setIsOpen(true)} className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-sm shadow-md transition-transform active:scale-95" style={{ backgroundColor: 'rgba(62, 39, 35, 1)', color: 'rgba(255, 255, 255, 1)' }}><span className="text-xl font-bold">☰</span></button>

      {/*overlay*/}
      <div className={`fixed inset-0 z-40 transition-opacity duration-300 lg:hidden ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`} style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} onClick={closeMenu} />

      {/*sidebar*/}
      <aside className={`w-64 h-screen fixed left-0 top-0 flex flex-col p-8 z-50 shadow-2xl transition-transform duration-300 ease-in-out lg:translate-x-0 ${isOpen ? "translate-x-0" : "-translate-x-full"}`} style={{ backgroundColor: 'rgba(255, 248, 225, 1)', borderRight: '1px solid rgba(215, 204, 200, 1)' }}>
        
        <div className="lg:hidden absolute top-4 right-4"><button onClick={closeMenu} className="font-bold text-xl" style={{ color: 'rgba(93, 64, 55, 1)' }}>✕</button></div>

        {/*logo*/}
        <div className="mb-12 text-center pb-4 border-b" style={{ borderColor: 'rgba(215, 204, 200, 1)' }}>

          <h1 className="text-2xl font-light tracking-widest uppercase" style={{ color: 'rgba(93, 64, 55, 1)' }}>EMPRESA</h1>

          <p className="text-[10px] uppercase tracking-widest mt-3" style={{ color: 'rgba(141, 110, 99, 1)' }}>Eventos & Shows</p>

        </div>

        {/*menu*/}
        <nav className="flex-1">

          <ul className="space-y-4">

            <li><Link href="/" onClick={closeMenu} className="flex items-center justify-center px-4 py-3 bg-white shadow-sm rounded-sm transition-all hover:shadow-md hover:scale-105 border" style={{ borderColor: 'rgba(215, 204, 200, 1)', color: 'rgba(93, 64, 55, 1)' }}><p className="text-xs font-medium tracking-widest uppercase">Início</p></Link></li>
            
            <li><Link href="/eventos" onClick={closeMenu} className="flex items-center justify-center px-4 py-3 rounded-sm transition-all hover:bg-white/50" style={{ color: 'rgba(141, 110, 99, 1)' }}><p className="text-xs font-medium tracking-widest uppercase">Lista de Eventos</p></Link></li>
            
            <li><Link href="/meus-ingressos" onClick={closeMenu} className="flex items-center justify-center px-4 py-3 rounded-sm transition-all hover:bg-white/50" style={{ color: 'rgba(141, 110, 99, 1)' }}><p className="text-xs font-medium tracking-widest uppercase">Meus Ingressos</p></Link></li>
            
            <li><Link href="/perfil" onClick={closeMenu} className="flex items-center justify-center px-4 py-3 rounded-sm transition-all hover:bg-white/50" style={{ color: 'rgba(141, 110, 99, 1)' }}><p className="text-xs font-medium tracking-widest uppercase">Perfil</p></Link></li>
          
          </ul>

        </nav>
        
        <div className="pt-6 text-center border-t" style={{ borderColor: 'rgba(215, 204, 200, 1)' }}><p className="text-[10px] uppercase tracking-widest" style={{ color: 'rgba(161, 136, 127, 1)' }}>Sistema v1.0</p></div>
      
      </aside>
    
    </div>
  );
}