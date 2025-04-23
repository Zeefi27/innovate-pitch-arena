
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white/95 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Ideathon 2.0</span>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#" className="text-gray-900 hover:text-purple-600 px-1 py-2 text-sm font-medium border-b-2 border-transparent hover:border-purple-600 transition-colors">
                Home
              </a>
              <a href="#about" className="text-gray-900 hover:text-purple-600 px-1 py-2 text-sm font-medium border-b-2 border-transparent hover:border-purple-600 transition-colors">
                About
              </a>
              <a href="#timeline" className="text-gray-900 hover:text-purple-600 px-1 py-2 text-sm font-medium border-b-2 border-transparent hover:border-purple-600 transition-colors">
                Timeline
              </a>
              <a href="#criteria" className="text-gray-900 hover:text-purple-600 px-1 py-2 text-sm font-medium border-b-2 border-transparent hover:border-purple-600 transition-colors">
                Criteria
              </a>
              <a href="#prizes" className="text-gray-900 hover:text-purple-600 px-1 py-2 text-sm font-medium border-b-2 border-transparent hover:border-purple-600 transition-colors">
                Prizes
              </a>
            </div>
          </div>
          
          <div className="hidden md:block">
          <a href="https://forms.gle/FwikB41kHjp1RQZLA"> <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white border-none">
            Register Now
            </Button></a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-purple-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg rounded-b-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-purple-600 hover:bg-gray-50">
              Home
            </a>
            <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-purple-600 hover:bg-gray-50">
              About
            </a>
            <a href="#timeline" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-purple-600 hover:bg-gray-50">
              Timeline
            </a>
            <a href="#criteria" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-purple-600 hover:bg-gray-50">
              Criteria
            </a>
            <a href="#prizes" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-purple-600 hover:bg-gray-50">
              Prizes
            </a>
            <div className="pt-2">
              <Button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white border-none">
                Register Now
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
