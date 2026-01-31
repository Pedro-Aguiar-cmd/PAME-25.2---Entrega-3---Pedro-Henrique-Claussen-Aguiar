import LayoutPrincipal from "./(componentes)/layoutprincipal";
import HomeCard from "./(componentes)/homecard"; 
import Link from "next/link";

export default function Home() {
  return (
    <LayoutPrincipal>
      
      {/*cabecalho*/}
      <div className="lg:hidden mb-6 text-center" style={{ backgroundColor: 'rgba(62, 39, 35, 1)', padding: '20px 0', boxShadow: '0 2px 4px rgba(0,0,0,0.2)'}}>

        <h1 className="text-xl font-light tracking-widest uppercase" style={{ color: 'rgba(255, 255, 255, 1)' }}>
          EMPRESA
        </h1>

      </div>

      {/*banner*/}
      <section className="relative w-full mb-12 lg:mb-16 rounded-sm overflow-hidden shadow-md" style={{ height: '500px', backgroundColor: 'rgba(62, 39, 35, 1)' }}>

        <img src="/img/banner.jpg" alt="Banner Principal" className="absolute inset-0 w-full h-full object-cover" style={{ filter: 'brightness(50%)' }}/>
        
        <div className="absolute bottom-0 left-0 p-8 lg:p-12 w-full max-w-3xl z-20">

          <p className="uppercase tracking-[0.2em] mb-2 font-bold" style={{ color: 'rgba(255, 236, 179, 1)', fontSize: '10px' }}>
            DESTAQUE DA SEMANA
          </p>

          <h1 className="text-4xl lg:text-6xl font-light mb-4 drop-shadow-lg" style={{ color: 'rgba(255, 255, 255, 1)' }}>
            Salão de Festas
          </h1>

          <p className="text-sm lg:text-base mb-8 font-light drop-shadow-md" style={{ color: 'rgba(245, 245, 245, 1)' }}>
            Experiências únicas em um ambiente sofisticado.
          </p>
          
          <Link href="/eventos">

            <button className="px-8 py-3 text-xs uppercase tracking-[0.2em] font-bold transition-all rounded-sm hover:opacity-90 cursor-pointer" style={{ backgroundColor: 'rgba(255, 236, 179, 1)', color: 'rgba(62, 39, 35, 1)' }}>
              Ver Lista Completa
            </button>

          </Link>

        </div>

      </section>

      {/*proximos eventos*/}
      <section className="max-w-7xl mx-auto px-2 lg:px-4 pb-12">
        
        <div className="flex justify-between items-end mb-8 pb-4" style={{ borderBottom: '1px solid rgba(215, 204, 200, 1)' }}>

          <div>

            <h2 className="text-2xl font-light" style={{ color: 'rgba(93, 64, 55, 1)' }}>Próximos Eventos</h2>

            <p className="text-xs mt-1" style={{ color: 'rgba(141, 110, 99, 1)' }}>Confira o que vem por aí</p>

          </div>
          
          <Link href="/eventos">

            <p className="text-xs font-bold uppercase tracking-widest cursor-pointer hover:underline" style={{ color: 'rgba(160, 82, 45, 1)' }}>
              Ver Todos
            </p>

          </Link>

        </div>

        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px'}}>

          <HomeCard id={1} title="Festa do Pedrinho" description="Aniversário cheio de alegria e espaço para as crianças brincarem" image="/img/evento1.jpg"/>

          <HomeCard id={2} title="Sunset" description="Música e bebidas para um por do sol em clima de festa" image="/img/evento2.jpg" />

          <HomeCard id={3} title="DJ Alok" description="Um dos melhores djs de eletrônica da atualidade" image="/img/evento3.jpg"/>

        </div>

      </section>

      {/* rodape */}
      <footer className="py-12 mt-12" style={{ backgroundColor: 'rgba(62, 39, 35, 1)', color: 'rgba(239, 235, 233, 1)', borderTop: '4px solid rgba(141, 110, 99, 1)' }}>

        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

          <div>

            <h3 className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: 'rgba(255, 236, 179, 1)' }}>Localização</h3>

            <p className="text-xs font-light opacity-80">Av. Atlantica, 101 </p>

            <p className="text-xs font-light opacity-80"> Ipanema, RJ</p>

          </div>

          <div>

            <h3 className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: 'rgba(255, 236, 179, 1)' }}>Contato</h3>

            <p className="text-xs font-light opacity-80">teste@gmail.com</p>

          </div>

          <div>

            <h3 className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: 'rgba(255, 236, 179, 1)' }}>Cristina Gomes</h3>

            <p className="text-xs font-light opacity-80">©2026 EMPRESA LTDA</p>

          </div>

        </div>

      </footer>

    </LayoutPrincipal>

  );
}