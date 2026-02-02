"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect, Suspense } from "react";
import LayoutPrincipal from "../../(componentes)/layoutprincipal";
import Botao from "../../(componentes)/botao";
import { ingressoEventos } from "../../ingressoeventos";
import Link from "next/link";

function ConteudoDetalhes() {
  const searchParams = useSearchParams();
  const [evento, setEvento] = useState<any>(null);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const idParam = searchParams.get("selecionado");
    
    if (idParam) {
      const idEvento = Number(idParam);
      const eventoEncontrado = ingressoEventos.find((e) => e.id === idEvento);
      setEvento(eventoEncontrado);
    }
    setCarregando(false);
  }, [searchParams]);

  {/* funcao comprar */}
  const handleComprar = () => {
    const sessao = localStorage.getItem("sessao_usuario");
    if (!sessao) return alert("Você precisa fazer login para comprar!");

    const usuario = JSON.parse(sessao);
    const comprasSalvas = localStorage.getItem("banco_compras_dinamico");
    let listaVendas = comprasSalvas ? JSON.parse(comprasSalvas) : [];
    
    const novaVenda = {
        id_ticket: Date.now(),
        email_cliente: usuario.email,
        id_evento: evento.id,
        status: "Confirmado",
        setor: "Pista"
    };

    listaVendas.push(novaVenda);
    localStorage.setItem("banco_compras_dinamico", JSON.stringify(listaVendas));

    alert(`Ingresso para ${evento.title} comprado com sucesso!`);
    window.location.href = "/ingressos";
  };

  if (carregando) return <div className="p-10 text-center">Carregando</div>;
  
  if (!evento) {
    return (
        <div className="p-10 text-center mt-10">
            <h2 className="text-xl mb-4 text-[rgb(93,64,55)]">Selecione um evento na lista</h2>
            <Link href="/eventos">
                <span className="text-[rgb(160,82,45)] underline font-bold cursor-pointer">Voltar para a lista</span>
            </Link>
        </div>
    );
  }

  return (
      <>
      {/* capa evento */}
      <div className="w-full h-80 relative bg-black">
         <img src={evento.image} alt={evento.title} className="w-full h-full object-cover opacity-60"/>
         <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white uppercase drop-shadow-lg text-center px-4">{evento.title}</h1>
         </div>
      </div>

      {/* conteudo principal */}
      <div className="max-w-5xl mx-auto px-6 py-12">
         <div className="flex flex-col md:flex-row gap-12">
            
            {/* informacoes */}
            <div className="flex-1">
                <div className="mb-8 border-b pb-4 border-[rgb(215,204,200)]">
                    <h2 className="text-2xl font-light text-[rgb(93,64,55)] mb-2">Detalhes do Evento</h2>
                    <p className="text-[rgb(141,110,99)] leading-relaxed">{evento.description}</p>
                </div>
                
                {/* grade detalhes */}
                <div className="grid grid-cols-2 gap-6 mb-8">
                    <div className="p-4 bg-[rgb(250,250,250)] border border-[rgb(230,230,230)] rounded-sm">
                        <p className="text-xs font-bold uppercase text-[rgb(160,82,45)] mb-1">Data</p>
                        <p className="text-lg text-[rgb(62,39,35)]">{evento.date}</p>
                    </div>
                    <div className="p-4 bg-[rgb(250,250,250)] border border-[rgb(230,230,230)] rounded-sm">
                        <p className="text-xs font-bold uppercase text-[rgb(160,82,45)] mb-1">Horário</p>
                        <p className="text-lg text-[rgb(62,39,35)]">{evento.time}</p>
                    </div>
                </div>
            </div>

            {/* card compra */}
            <div className="w-full md:w-80">
                <div className="bg-white p-6 shadow-xl border border-[rgb(215,204,200)] rounded-sm sticky top-24">
                    <p className="text-sm text-center text-[rgb(141,110,99)] mb-2">Valor do Ingresso</p>
                    <div className="text-4xl font-bold text-center text-[rgb(62,39,35)] mb-6">{evento.price}</div>
                    
                    {/* botao acao */}
                    <div onClick={handleComprar}>
                        <Botao label="Confirmar Compra" variant="primary" />
                    </div>
                </div>
            </div>
         </div>
      </div>
      </>
  );
}

export default function DetalhesEvento() {
  return (
    <LayoutPrincipal>
      <Suspense fallback={<div className="text-center p-10">Carregando detalhes</div>}>
        <ConteudoDetalhes />
      </Suspense>
    </LayoutPrincipal>
  );
}