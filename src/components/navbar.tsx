import { Search } from "lucide-react";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-orange-500 to-purple-600 shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-white font-bold text-xl font-montserrat">
              El Club RP
            </Link>
          </div>


          <div className="flex">
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  href="/club-coins"
                  className="text-white hover:text-gray-200 px-3 py-2 text-sm font-medium font-montserrat uppercase tracking-wide transition-colors"
                >
                  Club Coins
                </Link>
                <Link
                  href="/normativa-general"
                  className="text-white hover:text-gray-200 px-3 py-2 text-sm font-medium font-montserrat uppercase tracking-wide transition-colors"
                >
                  Normativa General
                </Link>
                <Link
                  href="/normativa-delictual"
                  className="text-white hover:text-gray-200 px-3 py-2 text-sm font-medium font-montserrat uppercase tracking-wide transition-colors"
                >
                  Normativa Delictual
                </Link>
                <Link
                  href="/normativa-lspd"
                  className="text-white hover:text-gray-200 px-3 py-2 text-sm font-medium font-montserrat uppercase tracking-wide transition-colors"
                >
                  Normativa LSPD
                </Link>
                <Link
                  href="/normativa-ems"
                  className="text-white hover:text-gray-200 px-3 py-2 text-sm font-medium font-montserrat uppercase tracking-wide transition-colors"
                >
                  Normativa EMS
                </Link>
              </div>
            </div>


            <div className="flex items-center">
              <button className="bg-purple-700 hover:bg-purple-800 text-white p-2 rounded-full transition-colors">
                <Search className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
