import LayoutPrincipal from "./(componentes)/layoutprincipal";
import HomeCard from "./(componentes)/homecard"; 
import Botao from "./(componentes)/botao";
import Link from "next/link";
import { ingressoEventos } from "./ingressoeventos";
import Carrossel from "./(componentes)/carrossel"; 

export default function Home() {
  
  const destaques = ingressoEventos.slice(0, 3);

  return (
    <LayoutPrincipal>
      
      {/* banner principal */}
      <section className="relative w-full h-96 mb-12 shadow-lg bg-[rgb(30,30,30)] group">
        
        <Carrossel />
        
        <div className="absolute bottom-0 left-0 p-8 w-full max-w-3xl z-20 pointer-events-none">
          <p className="uppercase tracking-[0.2em] mb-1 font-bold text-[10px] text-[rgb(255,236,179)]">
            DESTAQUES DA SEMANA
          </p>
          
          <h1 className="text-4xl md:text-5xl font-light mb-2 text-white drop-shadow-lg">
            Salão de Festas
          </h1>
          
          <p className="text-sm mb-6 font-light text-[rgb(245,245,245)] drop-shadow-md">
            Experiências únicas em um ambiente sofisticado
          </p>
          
          {/* botao ver lista */}
          <Link href="/eventos" className="pointer-events-auto inline-block">
            <div className="w-48">
                <Botao label="Ver Lista Completa" variant="primary" />
            </div>
          </Link>
        </div>
      </section>

      {/* secao proximos eventos */}
      <section className="max-w-7xl mx-auto px-4 pb-12">
        
        {/* titulo secao */}
        <div className="flex justify-between items-end mb-8 pb-4 border-b border-[rgb(215,204,200)]">
          <div>
            <h2 className="text-2xl font-light text-[rgb(93,64,55)]">Próximos Eventos</h2>
            <p className="text-xs mt-1 text-[rgb(141,110,99)]">Confira o que vem por aí</p>
          </div>
          
          {/* link ver todos */}
          <Link href="/eventos">
            <p className="text-xs font-bold uppercase tracking-widest cursor-pointer underline text-[rgb(160,82,45)] decoration-[rgb(160,82,45)]">
              Ver Todos
            </p>
          </Link>
        </div>

        {/* grade cards */}
        <div className="flex flex-wrap justify-center gap-6">
          {destaques.map((evento) => (
             <HomeCard 
                key={evento.id} 
                id={evento.id}
                title={evento.title}
                description={evento.description}
                image={evento.image}
             />
          ))}
        </div>

      </section>

      {/* rodape */}
      <footer className="py-12 mt-12 bg-[rgb(62,39,35)] text-[rgb(239,235,233)] border-t-4 border-[rgb(141,110,99)]">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          
          {/* localizacao */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-4 text-[rgb(255,236,179)]">Localização</h3>
            <p className="text-xs font-light opacity-80">Av. Atlantica, 101 <br/> Ipanema, RJ</p>
          </div>
          
          {/* contato */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-4 text-[rgb(255,236,179)]">Contato</h3>
            <p className="text-xs font-light opacity-80">teste@empresa.com</p>
          </div>
          
          {/* empresa trocar dps*/}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-4 text-[rgb(255,236,179)]">EMPRESA</h3>
            <p className="text-xs font-light opacity-80">©2026 EMPRESA LTDA</p>
          </div>
        </div>
      </footer>

    </LayoutPrincipal>
  );
}