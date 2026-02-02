"use client";

import { useState, useEffect } from "react";
import LayoutPrincipal from "../(componentes)/layoutprincipal";
import Link from "next/link";
import Botao from "../(componentes)/botao";
import { ingressoEventos } from "../ingressoeventos"; 
import { dadosContas } from "../dadoscontas"; 

export default function MeusIngressos() {
  
  const [ingressosDoUsuario, setIngressosDoUsuario] = useState<any[]>([]);
  const [estaLogado, setEstaLogado] = useState(false);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const sessao = localStorage.getItem("sessao_usuario");
    
    if (sessao) {
      const usuario = JSON.parse(sessao);
      setEstaLogado(true);

      const comprasFixas = dadosContas.filter(venda => venda.email_cliente === usuario.email);

      const comprasNovasString = localStorage.getItem("banco_compras_dinamico");
      let comprasNovas = [];
      if (comprasNovasString) {
        const todasVendas = JSON.parse(comprasNovasString);
        comprasNovas = todasVendas.filter((venda: any) => venda.email_cliente === usuario.email);
      }

      const todasAsCompras = [...comprasFixas, ...comprasNovas];

      const listaCompleta = todasAsCompras.map(venda => {
        const detalhesEvento = ingressoEventos.find(e => e.id === venda.id_evento);
        return {
          ...venda, 
          ...detalhesEvento 
        };
      });

      setIngressosDoUsuario(listaCompleta);
    } else {
      setEstaLogado(false);
    }
    
    setCarregando(false);
  }, []);

  return (
    <LayoutPrincipal>
        <div className="max-w-4xl mx-auto px-4 py-12">
            
            {/* titulo pagina */}
            <div className="mb-8 border-b pb-4 border-[rgb(215,204,200)]">
                <h1 className="text-3xl font-light text-[rgb(93,64,55)]">Meus Ingressos</h1>
                <p className="text-sm mt-2 text-[rgb(141,110,99)]">
                   Gerencie suas compras e acesse seus tickets
                </p>
            </div>

            {carregando && <p className="text-center">Carregando</p>}

            {!carregando && !estaLogado && (
                <div className="text-center p-8 bg-white border border-[rgb(215,204,200)] shadow-sm rounded-sm">
                    <p className="mb-4 text-lg text-[rgb(93,64,55)]">Você precisa se identificar para ver seus ingressos</p>
                    <Link href="/perfil">
                        <div className="w-48 mx-auto">
                             <Botao label="Fazer Login" variant="primary" />
                        </div>
                    </Link>
                </div>
            )}

            {!carregando && estaLogado && ingressosDoUsuario.length === 0 && (
                <div className="text-center p-8 bg-white border border-[rgb(215,204,200)] shadow-sm rounded-sm">
                    <p className="mb-4 text-lg text-[rgb(93,64,55)]">Você ainda não possui ingressos</p>
                    <Link href="/eventos">
                        <div className="w-48 mx-auto">
                             <Botao label="Ver Eventos" variant="primary" />
                        </div>
                    </Link>
                </div>
            )}

            {/* lista ingressos */}
            <div className="flex flex-col gap-6">
                {ingressosDoUsuario.map((ticket, index) => (
                    
                    /* card ingresso */
                    <div key={index} className="flex flex-wrap md:flex-nowrap bg-white shadow-md border border-[rgb(215,204,200)] rounded-sm overflow-hidden">
                        
                        {/* detalhes */}
                        <div className="flex-1 p-6 border-r border-[rgb(141,110,99)] relative">
                            <h3 className="text-xl font-bold mb-2 uppercase text-[rgb(62,39,35)]">{ticket.title}</h3>
                            <div className="flex gap-4 text-sm text-[rgb(93,64,55)]">
                                <span>DATA: <strong>{ticket.date}</strong></span>
                                <span>SETOR: <strong>{ticket.setor}</strong></span>
                            </div>
                            <div className="mt-4 inline-block px-3 py-1 text-xs font-bold uppercase text-white rounded-sm bg-[rgb(46,125,50)]">
                                {ticket.status}
                            </div>
                        </div>

                        {/* qr code */}
                        <div className="w-full md:w-40 p-6 flex flex-col items-center justify-center bg-[rgb(255,248,225)]">
                            <div className="w-20 h-20 mb-2 flex items-center justify-center text-xs text-center bg-[rgb(62,39,35)] text-[rgb(255,236,179)]">
                                [QR CODE]
                            </div>
                            <p className="text-xs font-mono text-[rgb(93,64,55)]">
                                #{ticket.id_ticket.toString().slice(-4)}
                            </p>
                        </div>

                    </div>
                ))}
            </div>

        </div>
    </LayoutPrincipal>
  );
}