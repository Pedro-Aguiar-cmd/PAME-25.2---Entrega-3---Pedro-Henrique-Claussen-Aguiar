"use client"; 

import Link from "next/link";
import { ReactNode, useState } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function LayoutPrincipal({ children }: LayoutProps) {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-50 flex-col lg:flex-row">
      
      {/* cabecalho mobile */}
      <div className="lg:hidden flex items-center justify-between p-4 bg-white border-b border-[rgb(139,69,19)] sticky top-0 z-50">
        <h1 className="text-xl font-light uppercase tracking-widest text-[rgb(101,67,33)]">Menu</h1>
        <button onClick={() => setMenuAberto(!menuAberto)} className="text-2xl text-[rgb(101,67,33)]">
          ☰
        </button>
      </div>

      {/* barra lateral */}
      <aside 
        className={`
            lg:w-64 bg-white border-r border-[rgb(139,69,19)] flex-col z-40
            lg:sticky lg:top-0 lg:h-screen lg:flex
            ${menuAberto ? 'fixed inset-0 flex' : 'hidden'}
        `}
      >
        
        {/* botao fechar mobile */}
        <div className="lg:hidden p-4 self-end">
             <button onClick={() => setMenuAberto(false)} className="text-2xl text-[rgb(101,67,33)]">☰</button>
        </div>

        {/* logo */}
        <div className="p-8 text-center border-b border-[rgb(139,69,19)] hidden lg:block">
           <h1 className="text-2xl font-light tracking-widest uppercase text-[rgb(101,67,33)]">
              MENU
           </h1>
        </div>

        {/* menu navegacao */}
        <nav className="flex-1 p-6 overflow-y-auto">
          <ul className="space-y-4">
            <li>
              <Link href="/" className="block p-3 rounded-sm hover:bg-[rgb(255,248,220)] transition-colors text-[rgb(101,67,33)] border-l-4 border-transparent hover:border-[rgb(139,69,19)]">
                Home
              </Link>
            </li>
            <li>
              <Link href="/eventos" className="block p-3 rounded-sm hover:bg-[rgb(255,248,220)] transition-colors text-[rgb(101,67,33)] border-l-4 border-transparent hover:border-[rgb(139,69,19)]">
                Lista de Eventos
              </Link>
            </li>
            <li>
              <Link href="/ingressos" className="block p-3 rounded-sm hover:bg-[rgb(255,248,220)] transition-colors text-[rgb(101,67,33)] border-l-4 border-transparent hover:border-[rgb(139,69,19)]">
                Meus Ingressos
              </Link>
            </li>
            <li>
              <Link href="/perfil" className="block p-3 rounded-sm hover:bg-[rgb(255,248,220)] transition-colors font-bold text-[rgb(139,69,19)] border-l-4 border-transparent hover:border-[rgb(139,69,19)]">
                Perfil
              </Link>
            </li>
          </ul>
        </nav>

        {/* rodape lateral trocar para a empresa dps*/}
        <div className="p-6 text-xs text-center opacity-60 hidden lg:block text-[rgb(101,67,33)]">
          <p>©2026 EMPRESA LTDA</p>
        </div>

      </aside>

      {/* conteudo principal */}
      <main className="flex-1 w-full">
        {children}
      </main>

    </div>
  );
}