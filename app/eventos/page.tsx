"use client";

import LayoutPrincipal from "../(componentes)/layoutprincipal";
import { ingressoEventos } from "../ingressoeventos";
import Link from "next/link";
import Botao from "../(componentes)/botao";

export default function ListaEventos() {
  return (
    <LayoutPrincipal>
        <div className="max-w-5xl mx-auto px-6 py-12">
            
            {/* titulo pagina */}
            <div className="mb-8 border-b pb-4 border-[rgb(215,204,200)]">
                <h1 className="text-3xl font-light text-[rgb(93,64,55)]">Agenda de Eventos</h1>
                <p className="text-sm mt-2 text-[rgb(141,110,99)]">Confira nossa programação completa</p>
            </div>

            {/* lista eventos */}
            <div className="flex flex-col gap-8">
                {ingressoEventos.map((evento) => (
                    
                    <div key={evento.id} className="flex flex-col md:flex-row bg-white shadow-md border border-[rgb(215,204,200)] rounded-sm overflow-hidden hover:shadow-xl hover:-translate-y-1">
                        
                        {/* imagem */}
                        <div className="w-full md:w-72 h-48 md:h-auto relative overflow-hidden group">
                            <img 
                                src={evento.image} 
                                alt={evento.title} 
                                className="w-full h-full object-cover group-hover:scale-110"
                            />
                        </div>

                        {/* conteudo */}
                        <div className="flex-1 p-6 flex flex-col justify-between">
                            <div>
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-2xl font-light text-[rgb(93,64,55)] uppercase">{evento.title}</h3>
                                    <span className="text-xl font-bold text-[rgb(160,82,45)]">{evento.price}</span>
                                </div>
                                
                                <p className="text-xs text-[rgb(117,117,117)] mb-4 line-clamp-2">
                                    {evento.description}
                                </p>

                                {/* data e hora */}
                                <div className="flex flex-wrap gap-4 text-sm text-[rgb(141,110,99)]">
                                    <span className="flex items-center gap-1">
                                        <strong className="text-[rgb(93,64,55)] text-xs uppercase">Data:</strong> {evento.date}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <strong className="text-[rgb(93,64,55)] text-xs uppercase">Horário:</strong> {evento.time}
                                    </span>
                                </div>
                            </div>

                            {/* botao comprar */}
                            <div className="mt-6 flex justify-end">
                                <Link href={`/eventos/id?selecionado=${evento.id}`}>
                                    <div className="w-40 hover:scale-105">
                                        <Botao label="Comprar Ingresso" variant="primary" />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>

                ))}
            </div>

        </div>
    </LayoutPrincipal>
  );
}