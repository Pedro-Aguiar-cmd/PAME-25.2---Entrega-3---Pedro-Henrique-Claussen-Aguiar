import Sidebar from "./Sidebar"; 

interface LayoutProps {children: React.ReactNode;}

export default function LayoutPrincipal({ children }: LayoutProps) {
  return (
    
    <div className="flex min-h-screen font-serif" style={{ backgroundColor: '#FFFCF5', color: '#3E2723' }}>

        <Sidebar/>

        <div className="flex-1 ml-0 lg:ml-64 p-4 lg:p-10 w-full transition-all duration-300">
            {children}
        </div>

    </div>

  );
}