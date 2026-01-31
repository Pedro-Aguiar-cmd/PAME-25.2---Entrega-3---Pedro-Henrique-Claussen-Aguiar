import Link from "next/link";

interface props {id: number; title: string; date: string; time: string; price: string; image: string;}

export default function EventCard({ id, title, date, time, price, image }: props) {

  return (

    <div className="group block rounded-sm overflow-hidden hover:shadow-lg transition-all duration-300" style={{  border: '1px solid rgba(139, 69, 19, 1)', width: '300px', margin: '10px', backgroundColor: 'rgba(255, 255, 255, 1)'}}>

      <Link href={`/eventos/${id}`}>

        {/* Fundo da imagem (Marrom Sela) */}
        <div className="w-full p-1 overflow-hidden relative" style={{ backgroundColor: 'rgba(139, 69, 19, 1)', height: '200px' }}>

          <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" style={{ filter: 'brightness(95%)' }}/>

        </div>

      </Link>

      {/* Detalhes (Fundo Marrom Madeira) */}
      <div className="p-4" style={{ backgroundColor: 'rgba(93, 64, 55, 1)' }}>

        <h3 className="text-lg font-normal mb-2 truncate" style={{ color: 'rgba(255, 255, 255, 1)' }}>{title}</h3>

        <div className="flex justify-between mb-2 text-xs" style={{ color: 'rgba(215, 204, 200, 1)' }}>

            <span> {date}</span>

            <span> {time}</span>

        </div>

        <div className="flex justify-between items-center pt-3" style={{ borderTop: '1px solid rgba(141, 110, 99, 1)' }}>

          <div>

            <p className="text-[10px] uppercase" style={{ color: 'rgba(215, 204, 200, 1)' }}>Valor Inicial</p>

            <p className="text-lg font-bold" style={{ color: 'rgba(255, 236, 179, 1)' }}>{price}</p>

          </div>

          <Link href={`/eventos/${id}`}>

            <button className="text-[10px] px-3 py-2 uppercase tracking-widest transition-colors rounded-sm hover:opacity-90" style={{ backgroundColor: 'rgba(141, 110, 99, 1)', color: 'rgba(255, 255, 255, 1)' }}>
              Comprar
            </button>
            
          </Link>

        </div>

      </div>

    </div>
  );
}