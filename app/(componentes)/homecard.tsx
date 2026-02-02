import Link from "next/link";

interface HomeCardProps {
    id: number;
    title: string;
    description: string;
    image: string;
}

export default function HomeCard({ id, title, description, image }: HomeCardProps) {
  return (
    <Link href={`/eventos/id?selecionado=${id}`}>
        
        {/* container card */}
        <div className="w-80 bg-white shadow-md rounded-sm overflow-hidden cursor-pointer border border-[rgb(215,204,200)] group hover:-translate-y-2 hover:shadow-xl">
            
            {/* imagem */}
            <div className="h-48 overflow-hidden">
                <img 
                    src={image} 
                    alt={title} 
                    className="w-full h-full object-cover group-hover:scale-110" 
                />
            </div>

            {/* conteudo */}
            <div className="p-5 text-center">
                <h3 className="text-lg font-bold uppercase mb-2 text-[rgb(93,64,55)]">
                    {title}
                </h3>
                
                <p className="text-xs text-[rgb(117,117,117)] mb-4 h-10 overflow-hidden">
                    {description}
                </p>
                
                {/* botao visual*/}
                <div className="inline-block px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-white bg-[rgb(160,82,45)] rounded-sm hover:bg-[rgb(140,70,35)]">
                    Ver Detalhes
                </div>
            </div>
        </div>
    </Link>
  );
}