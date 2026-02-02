"use client";

import { useState } from "react";

export default function Carrossel() {
  
  const imagens = [
    "/img/banner.jpg",
    "/img/evento1.jpg",
    "/img/evento2.jpg",
    "/img/evento3.jpg"
  ];

  const [indiceAtual, setIndiceAtual] = useState(0);

  const proximaImagem = () => {
    setIndiceAtual((prev) => (prev === imagens.length - 1 ? 0 : prev + 1));
  };

  const imagemAnterior = () => {
    setIndiceAtual((prev) => (prev === 0 ? imagens.length - 1 : prev - 1));
  };

  return (
    <div className="absolute inset-0 w-full h-full group select-none bg-black">
        
        {/* imagens slide */}
        {imagens.map((imagem, index) => (
            <img 
                key={index}
                src={imagem} 
                alt={`Slide ${index}`} 
                className="absolute inset-0 w-full h-full object-cover"
                style={{ 
                    opacity: index === indiceAtual ? 1 : 0,
                    filter: 'brightness(50%)',
                    display: index === indiceAtual ? 'block' : 'none'
                }}
            />
        ))}

        {/* botao voltar */}
        <button 
            onClick={imagemAnterior}
            className="
                absolute left-2 top-[40%] -translate-y-1/2 z-30 
                cursor-pointer 
                text-6xl font-thin
                text-[rgb(255,236,179)] 
                opacity-30 hover:opacity-100 
                hover:scale-125 active:scale-95
                drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]
            "
        >
            ᐸ
        </button>

        {/* botao avancar */}
        <button 
            onClick={proximaImagem}
            className="
                absolute right-2 top-[40%] -translate-y-1/2 z-30 
                cursor-pointer 
                text-6xl font-thin
                text-[rgb(255,236,179)] 
                opacity-30 hover:opacity-100 
                hover:scale-125 active:scale-95
                drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]
            "
        >
            ᐳ
        </button>

    </div>
  );
}