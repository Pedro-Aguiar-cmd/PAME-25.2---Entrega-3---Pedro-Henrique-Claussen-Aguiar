import Link from "next/link";
import Botao from "./botao";

interface EventCardProps {
    id: number;
    title: string;
    date: string;
    time: string;
    price: string;
    image: string;
}

export default function EventCard({ id, title, date, time, price, image }: EventCardProps) {
  return (
    <div className="flex flex-col md:flex-row bg-white shadow-md border border-[rgb(215,204,200)] rounded-sm overflow-hidden hover:shadow-lg">
        
        {/* imagem */}
        <div className="w-full md:w-64 h-48 md:h-auto relative overflow-hidden group">
             <img 
                src={image} 
                alt={title} 
                className="w-full h-full object-cover group-hover:scale-110"
             />
        </div>

        {/* infos */}
        <div className="flex-1 p-6 flex flex-col justify-between">
            <div>
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-light text-[rgb(93,64,55)] uppercase">{title}</h3>
                    <span className="text-lg font-bold text-[rgb(160,82,45)]">{price}</span>
                </div>
                
                <div className="flex gap-4 text-sm text-[rgb(141,110,99)] mb-4">
                    <span>
                        <strong className="text-[rgb(93,64,55)] text-xs uppercase">Data:</strong> {date}
                    </span>
                    <span>
                        <strong className="text-[rgb(93,64,55)] text-xs uppercase">Horário:</strong> {time}
                    </span>
                </div>
            </div>

            <div className="flex justify-end">
                <Link href={`/eventos/id?selecionado=${id}`}>
                    <div className="w-40 hover:scale-105">
                        <Botao label="Comprar" variant="primary" />
                    </div>
                </Link>
            </div>
        </div>
    </div>
  );
}