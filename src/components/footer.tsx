import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-16 flex items-center justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-8">
          {/* Logo */}
          <div className="relative flex items-center justify-center">
 
            
            {/* Logo container */}
            <div className="relative w-64 h-64 rounded-full overflow-hidden  ">
              {/* Logo image */}
              <div 
                className="w-full h-full bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: "url('/logo.png')"
                }}
              >
              </div>
            </div>
          </div>

          {/* Copyright text */}
          <div className="text-center">
            <p className="text-black font-montserrat text-sm">
              Todos los derechos reservados. El Club RP ©
            </p>
          </div>

          {/* Social buttons */}
          <div className="flex space-x-6">
            <Link
              href="https://discord.gg/cgzSFSn9av"
              target="_blank"
              rel="noopener noreferrer"
              className="relative bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-400 hover:to-purple-500 text-white px-8 py-3 rounded-full font-montserrat font-semibold text-sm uppercase tracking-wide transition-all duration-300 shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-400/60 transform hover:scale-105 border border-purple-400/30"
            >
              <span className="relative z-10">Discord</span>
              <div className="absolute inset-0 rounded-full bg-purple-400/20 blur-sm"></div>
            </Link>
            
            <Link
              href="https://tiktok.com/@your-tiktok-handle"
              target="_blank"
              rel="noopener noreferrer"
              className="relative bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-400 hover:to-purple-500 text-white px-8 py-3 rounded-full font-montserrat font-semibold text-sm uppercase tracking-wide transition-all duration-300 shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-400/60 transform hover:scale-105 border border-purple-400/30"
            >
              <span className="relative z-10">TikTok</span>
              <div className="absolute inset-0 rounded-full bg-purple-400/20 blur-sm"></div>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
