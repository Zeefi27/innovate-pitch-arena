import { CalendarCheck, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-800 to-indigo-900 text-white">
      {/* Animated background dots */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {Array.from({ length: 20 }).map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-white" 
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.3,
              animation: `pulse ${Math.random() * 4 + 2}s infinite`
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-6 py-20 md:py-32 relative z-10">
        <div className="flex flex-col lg:flex-row gap-10 items-center justify-between">
          <div className="lg:w-1/2">
            <div className="inline-block mb-4 rounded-full bg-purple-700/30 px-3 py-1 text-sm font-semibold">
              Department of CSE (AI & ML)
            </div>
            <h1 className="mb-6 text-4xl md:text-6xl font-bold text-white leading-tight">
              <span className="block">IDEATHON 2.0</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                Where Ideas Take Flight
              </span>
            </h1>
            <p className="mb-8 text-lg md:text-xl text-purple-100/90">
              Join the ultimate platform for innovation and creativity. Pitch your revolutionary ideas, 
              collaborate with brilliant minds, and win exciting prizes!
            </p>
            
            <div className="mb-8 space-y-4">
              <div className="flex items-center gap-3">
                <CalendarCheck className="h-5 w-5 text-purple-300" />
                <span className="text-md font-medium">Event Date: Coming soon</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-purple-300" />
                <span className="text-md font-medium">Venue: Seminar Hall / Auditorium</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="h-5 w-5 text-purple-300" />
                <span className="text-md font-medium">Team Size: 2-4 Students</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white border-none" 
              asChild
            >
              <a href="https://forms.gle/PJP9k9cePRTjSJoBA" target="_blank" rel="noopener noreferrer">
                Register Now
              </a>
            </Button>

            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 text-white hover:bg-white/20 border-white/20" 
              asChild
            >
              <Link to="/coordinators">More Information</Link>
            </Button>
          </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-3xl rounded-full transform -rotate-6"></div>
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80" 
                alt="Ideathon 2.0" 
                className="relative z-10 w-full rounded-xl shadow-2xl transform hover:scale-[1.01] transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
