import Link from "next/link";

interface props { id: number; title: string; description: string; image: string; }

export default function HomeCard({ id, title, description, image }: props) {
  return (
    
    <div className="group block rounded-sm overflow-hidden hover:shadow-xl transition-all duration-300" style={{ border: '1px solid rgba(215, 204, 200, 1)', width: '350px', margin: '15px' }}>
      
      <Link href={`/eventos/${id}`}>

        <div className="w-full overflow-hidden relative" style={{ height: '250px' }}>

          <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" style={{ filter: 'brightness(90%)' }} />
          {/* COR DO TITULO */}
          <div className="absolute bottom-0 left-0 w-full p-4" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0))' }}>
            
            <h3 className="text-xl font-light text-white">{title}</h3>

          </div>

        </div>

      </Link>
      
      {/* DESCRIÇÃO COR */}
      <div className="p-6" style={{ backgroundColor: 'rgba(255, 248, 225, 1)' }}>

        <p className="text-sm leading-relaxed" style={{ color: 'rgba(93, 64, 55, 1)' }}>{description}</p>

        <Link href={`/eventos/${id}`}>
        <p className="text-xs font-bold uppercase tracking-widest mt-4 hover:underline cursor-pointer" style={{ color: 'rgba(160, 82, 45, 1)' }}>
            Saiba Mais
        </p>

        </Link>

      </div>

    </div>


  );
}