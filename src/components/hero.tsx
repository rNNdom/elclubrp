import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export function Hero() {
  return (
    <div className="relative h-[45vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full rounded-3xl mx-auto  my-8 relative overflow-hidden">
          <div 
            className="w-full h-full rounded-3xl relative bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/hero.jpg')",
            }}
          >
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black/40 rounded-3xl"></div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 font-montserrat">
          ¡BIENVENID@S A EL CLUB!
        </h1>
        
        <p className="text-lg md:text-xl mb-8 leading-relaxed max-w-3xl mx-auto font-montserrat">
          Este servidor está pensado para quienes disfrutan del rol y quieren vivir experiencias inmersivas dentro de un ambiente organizado y entretenido. El server cuenta con un estilo de rol serio, lo que significa que buscamos un equilibrio entre la diversión y la coherencia en la interpretación de los personajes.
        </p>
        <Link href="https://discord.gg/cgzSFSn9av" target="_blank">       
        <Button 
          size="lg" 
          className="bg-white hover:bg-gray-100 text-black px-8 py-3 text-lg rounded-full transition-colors font-montserrat font-semibold"
        >
          Quiero ser parte
        </Button> 
      </Link>
      </div>
    </div>
  );
}
