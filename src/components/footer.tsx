import Link from "next/link";

export function Footer() {
  return (
    <footer className=" py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-8">
          {/* Logo */}
          <div className="relative">
            <div className="w-64 h-64 rounded-full overflow-hidden">
             
              
              {/* Logo image */}
              <div 
                className="relative w-full h-full bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: "url('/logo.png')"
                }}
              >
   
              </div>
            </div>
          </div>

          {/* Copyright text */}
          <div className="text-center">
            <p className="text-gray-700 font-montserrat text-sm">
              Todos los derechos reservados. El Club RP ©
            </p>
          </div>

          {/* Social buttons */}
          <div className="flex space-x-4">
            <Link
              href="https://discord.gg/cgzSFSn9av" // Replace with your actual Discord link
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-6 py-3 rounded-full font-montserrat font-semibold text-sm uppercase tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Discord
            </Link>
            
            <Link
              href="https://tiktok.com/@your-tiktok-handle" // Replace with your actual TikTok link
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-6 py-3 rounded-full font-montserrat font-semibold text-sm uppercase tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              TikTok
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
