import { Phone, User, Star, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useState, useEffect } from "react";

const Coordinators = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900/90 via-purple-800/90 to-indigo-900/90 py-20 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-purple-500/20 blur-3xl animate-pulse"
            style={{
              width: `${Math.random() * 30 + 10}rem`,
              height: `${Math.random() * 30 + 10}rem`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 10 + 10}s`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: 0.2
            }}
          />
        ))}
      </div>
      
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-black/30 backdrop-blur-sm">
        <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]" style={{ backgroundSize: '30px 30px' }}></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="flex items-center justify-center mb-16">
          <div className="relative">
            <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-indigo-300 text-center heading-font tracking-tight relative z-10">
              Event Coordinators
            </h1>
            <div className="absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-purple-500/0 via-purple-500 to-purple-500/0"></div>
            <div className="absolute -top-6 -left-6 text-purple-300">
              <Sparkles className="h-5 w-5 animate-pulse" />
            </div>
            <div className="absolute -bottom-6 -right-6 text-purple-300">
              <Sparkles className="h-5 w-5 animate-pulse" />
            </div>
          </div>
        </div>
        
        {/* Core Coordinators Section */}
        <div className="mb-24">
          <div className="relative mb-12">
            <h2 className="text-3xl font-bold text-center relative z-10">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-300 to-purple-300">Core Coordinators</span>
            </h2>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-0.5 w-32 bg-gradient-to-r from-purple-500/0 via-purple-500/50 to-purple-500/0"></div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Core Coordinator Cards */}
            <Card className="hover-scale backdrop-blur-xl bg-gradient-to-br from-purple-900/50 to-indigo-900/50 border-0 overflow-hidden group relative shadow-lg shadow-purple-900/20 transition-all duration-300 hover:shadow-purple-500/20 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/30 to-indigo-500/30 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:duration-200"></div>
              <div className="relative p-6">
                <div className="absolute top-0 right-0">
                  <div className="text-purple-300/30 p-2">
                    <Star className="h-6 w-6 fill-purple-300/10" />
                  </div>
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-full bg-purple-500/20 group-hover:bg-purple-500/30 transition-colors duration-300">
                    <User className="text-purple-300 h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Mohammed Zeeshan</h3>
                </div>
                <p className="text-purple-200/80 mb-2 text-sm">CSE(AI&ML) B-section, 3rd year</p>
                <p className="text-purple-100 mb-3 font-medium">Core Coordinator</p>
                <div className="flex items-center gap-2 text-purple-300 hover:text-purple-100 transition-colors mt-2 group-hover:text-purple-100">
                  <Phone size={16} />
                  <a href="tel:7013971764" className="text-sm">7013971764</a>
                </div>
              </div>
            </Card>

            <Card className="hover-scale backdrop-blur-xl bg-gradient-to-br from-purple-900/50 to-indigo-900/50 border-0 overflow-hidden group relative shadow-lg shadow-purple-900/20 transition-all duration-300 hover:shadow-purple-500/20 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/30 to-indigo-500/30 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:duration-200"></div>
              <div className="relative p-6">
                <div className="absolute top-0 right-0">
                  <div className="text-purple-300/30 p-2">
                    <Star className="h-6 w-6 fill-purple-300/10" />
                  </div>
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-full bg-purple-500/20 group-hover:bg-purple-500/30 transition-colors duration-300">
                    <User className="text-purple-300 h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Kurleay Rohan Sai</h3>
                </div>
                <p className="text-purple-200/80 mb-2 text-sm">CSE(AI&ML) B-section, 3rd year</p>
                <p className="text-purple-100 mb-3 font-medium">Core Coordinator</p>
                <div className="flex items-center gap-2 text-purple-300 hover:text-purple-100 transition-colors mt-2 group-hover:text-purple-100">
                  <Phone size={16} />
                  <a href="tel:9346823607" className="text-sm">9346823607</a>
                </div>
              </div>
            </Card>

            <Card className="hover-scale backdrop-blur-xl bg-gradient-to-br from-purple-900/50 to-indigo-900/50 border-0 overflow-hidden group relative shadow-lg shadow-purple-900/20 transition-all duration-300 hover:shadow-purple-500/20 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/30 to-indigo-500/30 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:duration-200"></div>
              <div className="relative p-6">
                <div className="absolute top-0 right-0">
                  <div className="text-purple-300/30 p-2">
                    <Star className="h-6 w-6 fill-purple-300/10" />
                  </div>
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-full bg-purple-500/20 group-hover:bg-purple-500/30 transition-colors duration-300">
                    <User className="text-purple-300 h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Ningdhalli Aaryan</h3>
                </div>
                <p className="text-purple-200/80 mb-2 text-sm">CSE(AI&ML) B-section, 3rd year</p>
                <p className="text-purple-100 mb-3 font-medium">Core Coordinator</p>
                <div className="flex items-center gap-2 text-purple-300 hover:text-purple-100 transition-colors mt-2 group-hover:text-purple-100">
                  <Phone size={16} />
                  <a href="tel:9121872722" className="text-sm">9121872722</a>
                </div>
              </div>
            </Card>

            <Card className="hover-scale backdrop-blur-xl bg-gradient-to-br from-purple-900/50 to-indigo-900/50 border-0 overflow-hidden group relative shadow-lg shadow-purple-900/20 transition-all duration-300 hover:shadow-purple-500/20 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/30 to-indigo-500/30 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:duration-200"></div>
              <div className="relative p-6">
                <div className="absolute top-0 right-0">
                  <div className="text-purple-300/30 p-2">
                    <Star className="h-6 w-6 fill-purple-300/10" />
                  </div>
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-full bg-purple-500/20 group-hover:bg-purple-500/30 transition-colors duration-300">
                    <User className="text-purple-300 h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Sri Nitya</h3>
                </div>
                <p className="text-purple-200/80 mb-2 text-sm">CSE(AI&ML) B-section, 3rd year</p>
                <p className="text-purple-100 mb-3 font-medium">Core Coordinator</p>
                <div className="flex items-center gap-2 text-purple-300 hover:text-purple-100 transition-colors mt-2 group-hover:text-purple-100">
                  <Phone size={16} />
                  <a href="tel:8074795286" className="text-sm">8074795286</a>
                </div>
              </div>
            </Card>
          </div>
        </div>
        
        {/* Regular Coordinators Section */}
        <div>
          <div className="relative mb-12">
            <h2 className="text-3xl font-bold text-center relative z-10">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-indigo-300">Coordinators</span>
            </h2>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-0.5 w-32 bg-gradient-to-r from-purple-500/0 via-purple-500/50 to-purple-500/0"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="backdrop-blur-xl bg-gradient-to-br from-indigo-900/40 to-purple-900/40 border-0 overflow-hidden group relative shadow-lg shadow-purple-900/10 transition-all duration-300 hover:shadow-purple-500/20 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:duration-200"></div>
              <div className="relative p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-full bg-indigo-500/20 group-hover:bg-indigo-500/30 transition-colors duration-300">
                    <User className="text-indigo-300 h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Akhnoor Rajesh</h3>
                </div>
                <p className="text-indigo-200/80 mb-2 text-sm">CSE(AI&ML) A-section, 3rd year</p>
                <p className="text-indigo-100 font-medium">Coordinator</p>
              </div>
            </Card>

            <Card className="backdrop-blur-xl bg-gradient-to-br from-indigo-900/40 to-purple-900/40 border-0 overflow-hidden group relative shadow-lg shadow-purple-900/10 transition-all duration-300 hover:shadow-purple-500/20 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:duration-200"></div>
              <div className="relative p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-full bg-indigo-500/20 group-hover:bg-indigo-500/30 transition-colors duration-300">
                    <User className="text-indigo-300 h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Mohammed Omer</h3>
                </div>
                <p className="text-indigo-200/80 mb-2 text-sm">CSE(AI&ML) B-section, 3rd year</p>
                <p className="text-indigo-100 font-medium">Coordinator</p>
              </div>
            </Card>

            <Card className="backdrop-blur-xl bg-gradient-to-br from-indigo-900/40 to-purple-900/40 border-0 overflow-hidden group relative shadow-lg shadow-purple-900/10 transition-all duration-300 hover:shadow-purple-500/20 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:duration-200"></div>
              <div className="relative p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-full bg-indigo-500/20 group-hover:bg-indigo-500/30 transition-colors duration-300">
                    <User className="text-indigo-300 h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Sathyam</h3>
                </div>
                <p className="text-indigo-200/80 mb-2 text-sm">CSE(AI&ML) A-section, 3rd year</p>
                <p className="text-indigo-100 font-medium">Coordinator</p>
              </div>
            </Card>

            <Card className="backdrop-blur-xl bg-gradient-to-br from-indigo-900/40 to-purple-900/40 border-0 overflow-hidden group relative shadow-lg shadow-purple-900/10 transition-all duration-300 hover:shadow-purple-500/20 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:duration-200"></div>
              <div className="relative p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-full bg-indigo-500/20 group-hover:bg-indigo-500/30 transition-colors duration-300">
                    <User className="text-indigo-300 h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">G. Sravika</h3>
                </div>
                <p className="text-indigo-200/80 mb-2 text-sm">CSE(AI&ML) A-section, 3rd year</p>
                <p className="text-indigo-100 font-medium">Coordinator</p>
              </div>
            </Card>

            <Card className="backdrop-blur-xl bg-gradient-to-br from-indigo-900/40 to-purple-900/40 border-0 overflow-hidden group relative shadow-lg shadow-purple-900/10 transition-all duration-300 hover:shadow-purple-500/20 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:duration-200"></div>
              <div className="relative p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-full bg-indigo-500/20 group-hover:bg-indigo-500/30 transition-colors duration-300">
                    <User className="text-indigo-300 h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">B. Harshini</h3>
                </div>
                <p className="text-indigo-200/80 mb-2 text-sm">CSE(AI&ML) A-section, 3rd year</p>
                <p className="text-indigo-100 font-medium">Coordinator</p>
              </div>
            </Card>

            <Card className="backdrop-blur-xl bg-gradient-to-br from-indigo-900/40 to-purple-900/40 border-0 overflow-hidden group relative shadow-lg shadow-purple-900/10 transition-all duration-300 hover:shadow-purple-500/20 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:duration-200"></div>
              <div className="relative p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-full bg-indigo-500/20 group-hover:bg-indigo-500/30 transition-colors duration-300">
                    <User className="text-indigo-300 h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Nandipeta Lahari</h3>
                </div>
                <p className="text-indigo-200/80 mb-2 text-sm">CSE(AI&ML) B-section, 3rd year</p>
                <p className="text-indigo-100 font-medium">Coordinator</p>
              </div>
            </Card>

            <Card className="backdrop-blur-xl bg-gradient-to-br from-indigo-900/40 to-purple-900/40 border-0 overflow-hidden group relative shadow-lg shadow-purple-900/10 transition-all duration-300 hover:shadow-purple-500/20 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:duration-200"></div>
              <div className="relative p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-full bg-indigo-500/20 group-hover:bg-indigo-500/30 transition-colors duration-300">
                    <User className="text-indigo-300 h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Sravani</h3>
                </div>
                <p className="text-indigo-200/80 mb-2 text-sm">CSE(AI&ML) A-section, 3rd year</p>
                <p className="text-indigo-100 font-medium">Coordinator</p>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div 
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-purple-300 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.3,
              animation: `float ${Math.random() * 20 + 10}s linear infinite`
            }}
          />
        ))}
      </div>
      
      {/* Global styles */}
      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 0.8;
          }
          90% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(-100vh) translateX(${Math.random() * 200 - 100}px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Coordinators;