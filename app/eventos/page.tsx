import LayoutPrincipal from "../(componentes)/layoutprincipal";
import EventCard from "../(componentes)/EventCard";

export default function ListaEventos() {
  return (
    <LayoutPrincipal>
      
      {/*Cabeçalho*/}
      <div className="mb-8 text-center py-8 shadow-sm" style={{ backgroundColor: 'rgba(62, 39, 35, 1)', borderBottom: '4px solid rgba(141, 110, 99, 1)' }}>

        <h1 className="text-3xl font-light uppercase tracking-widest" style={{ color: 'rgba(255, 255, 255, 1)' }}>
          Lista de Eventos
        </h1>

        <p className="text-sm mt-2" style={{ color: 'rgba(255, 236, 179, 1)' }}>
          Confira nossa programação completa
        </p>

      </div>
    {/*Imagens + descricao*/}
      <div className="max-w-7xl mx-auto px-4 pb-12" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap:'20px'}}>

        <EventCard id={1} title="Aniversário do Pedrinho" date="12/04/2026" time="14:00" price="R$ 40,00" image="/img/evento1.jpg"/>

        <EventCard id={2} title="Sunset" date="15/04/2026" time="18:00" price="R$ 40,00" image="/img/evento2.jpg"/>

        <EventCard id={3} title="Dj Alok" date="20/04/2026" time="23:00" price="R$ 40,00"  image="/img/evento3.jpg" />

        <EventCard id={4} title="Baile de Gala" date="25/10/2026" time="21:00" price="R$ 40,00" image="/img/banner.jpg" />

      </div>

    </LayoutPrincipal>
  )
}