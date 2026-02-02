"use client";

import { useEffect } from "react";
import LayoutPrincipal from "../(componentes)/layoutprincipal";
import Botao from "../(componentes)/botao";

export default function Perfil() {
  
  useEffect(() => {
    const usuarioFixo = { nome: "Pedro", email: "teste@gmail.com" };
    localStorage.setItem("sessao_usuario", JSON.stringify(usuarioFixo));
  }, []);

  {/* funcoes de clique */}
  const handleTrocar = () => {
    alert("Botão Trocar clicado");
  };

  const handleSair = () => {
    alert("Botão Sair clicado");
    window.location.href = "/";
  };

  return (
    <LayoutPrincipal>
      <div className="max-w-3xl mx-auto px-6 py-12">
        
        {/* cabecalho perfil */}
        <div className="mb-8 border-b pb-4 border-[rgb(215,204,200)]">
            <h1 className="text-3xl font-light text-[rgb(93,64,55)]">
                Meu Perfil
            </h1>
        </div>

        {/* card perfil */}
        <div className="bg-white p-12 shadow-md border border-[rgb(215,204,200)] rounded-sm flex flex-col items-center text-center">
            
            {/* nome usuario */}
            <h2 className="text-4xl font-bold mb-2 uppercase text-[rgb(62,39,35)]">
              Pedro
            </h2>
            
            {/* email usuario */}
            <p className="text-xl mb-10 text-[rgb(141,110,99)]">
              teste@gmail.com
            </p>

            {/* botoes de acao */}
            <div className="flex flex-col sm:flex-row gap-6 w-full justify-center max-w-md">
               <div className="w-full sm:w-1/2" onClick={handleTrocar}>
                  <Botao label="Trocar" variant="secondary" />
               </div>
               <div className="w-full sm:w-1/2" onClick={handleSair}>
                  <Botao label="Sair" variant="primary" />
               </div>
            </div>

        </div>

      </div>
    </LayoutPrincipal>
  );
}