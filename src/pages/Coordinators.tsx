
import { Phone, User } from "lucide-react";

const Coordinators = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-indigo-900 py-20">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">Event Coordinators</h1>
        
        {/* Boys Coordinators Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-purple-300 mb-6">Core Coordinators</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Core Coordinators */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-purple-500/30">
              <div className="flex items-center gap-3 mb-2">
                <User className="text-purple-400" />
                <h3 className="text-xl font-semibold text-white">Mohammed Zeeshan</h3>
              </div>
              <p className="text-purple-200 mb-2">CSE(AI&ML) B-section, 3rd year</p>
              <p className="text-purple-200 mb-2">Core Coordinator</p>
              <div className="flex items-center gap-2 text-purple-300">
                <Phone size={16} />
                <a href="tel:7013971764" className="hover:text-purple-400 transition-colors">7013971764</a>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-purple-500/30">
              <div className="flex items-center gap-3 mb-2">
                <User className="text-purple-400" />
                <h3 className="text-xl font-semibold text-white">Kurleay Rohan Sai</h3>
              </div>
              <p className="text-purple-200 mb-2">CSE(AI&ML) B-section, 3rd year</p>
              <p className="text-purple-200 mb-2">Core Coordinator</p>
              <div className="flex items-center gap-2 text-purple-300">
                <Phone size={16} />
                <a href="tel:9346823607" className="hover:text-purple-400 transition-colors">9346823607</a>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-purple-500/30">
              <div className="flex items-center gap-3 mb-2">
                <User className="text-purple-400" />
                <h3 className="text-xl font-semibold text-white">Ningdhalli Aaryan</h3>
              </div>
              <p className="text-purple-200 mb-2">CSE(AI&ML) B-section, 3rd year</p>
              <p className="text-purple-200 mb-2">Core Coordinator</p>
              <div className="flex items-center gap-2 text-purple-300">
                <Phone size={16} />
                <a href="tel:9121872722" className="hover:text-purple-400 transition-colors">9121872722</a>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-purple-500/30">
              <div className="flex items-center gap-3 mb-2">
                <User className="text-purple-400" />
                <h3 className="text-xl font-semibold text-white">Sri Nitya</h3>
              </div>
              <p className="text-purple-200 mb-2">CSE(AI&ML) B-section, 3rd year</p>
              <p className="text-purple-200 mb-2">Core Coordinator</p>
              <div className="flex items-center gap-2 text-purple-300">
                <Phone size={16} />
                <a href="tel:9121872722" className="hover:text-purple-400 transition-colors">8074795286</a>
              </div>
            </div>

            {/* Regular Coordinators */}
        <div>
          <h2 className="text-2xl font-bold text-purple-300 mb-6">Coordinators</h2>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-purple-500/30">
              <div className="flex items-center gap-3 mb-2">
                <User className="text-purple-400" />
                <h3 className="text-xl font-semibold text-white">Akhnoor Rajesh</h3>
              </div>
              <p className="text-purple-200 mb-2">CSE(AI&ML) B-section, 3rd year</p>
              <p className="text-purple-200">Coordinator</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-purple-500/30">
              <div className="flex items-center gap-3 mb-2">
                <User className="text-purple-400" />
                <h3 className="text-xl font-semibold text-white">Mohammed Omer</h3>
              </div>
              <p className="text-purple-200 mb-2">CSE(AI&ML) B-section, 3rd year</p>
              <p className="text-purple-200">Coordinator</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-purple-500/30">
              <div className="flex items-center gap-3 mb-2">
                <User className="text-purple-400" />
                <h3 className="text-xl font-semibold text-white">Sathyam</h3>
              </div>
              <p className="text-purple-200 mb-2">CSE(AI&ML) B-section, 3rd year</p>
              <p className="text-purple-200">Coordinator</p>
            </div>
          </div>
        </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-purple-500/30">
              <div className="flex items-center gap-3 mb-2">
                <User className="text-purple-400" />
                <h3 className="text-xl font-semibold text-white">G. Sravika</h3>
              </div>
              <p className="text-purple-200 mb-2">CSE(AI&ML) B-section, 3rd year</p>
              <p className="text-purple-200">Coordinator</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-purple-500/30">
              <div className="flex items-center gap-3 mb-2">
                <User className="text-purple-400" />
                <h3 className="text-xl font-semibold text-white">B. Harshini</h3>
              </div>
              <p className="text-purple-200 mb-2">CSE(AI&ML) B-section, 3rd year</p>
              <p className="text-purple-200">Coordinator</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-purple-500/30">
              <div className="flex items-center gap-3 mb-2">
                <User className="text-purple-400" />
                <h3 className="text-xl font-semibold text-white">Nandipeta Lahari</h3>
              </div>
              <p className="text-purple-200 mb-2">CSE(AI&ML) B-section, 3rd year</p>
              <p className="text-purple-200">Coordinator</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-purple-500/30">
              <div className="flex items-center gap-3 mb-2">
                <User className="text-purple-400" />
                <h3 className="text-xl font-semibold text-white">Sravani</h3>
              </div>
              <p className="text-purple-200 mb-2">CSE(AI&ML) B-section, 3rd year</p>
              <p className="text-purple-200">Coordinator</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coordinators;
