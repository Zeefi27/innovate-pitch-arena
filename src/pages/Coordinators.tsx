import { Phone, User } from "lucide-react";
import { Card } from "@/components/ui/card";

const Coordinators = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900/90 via-purple-800/90 to-indigo-900/90 py-20 px-4">
      <div className="container mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-400 mb-12 text-center heading-font">
          Event Coordinators
        </h1>
        
        {/* Core Coordinators Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-purple-300 mb-8 text-center">Core Coordinators</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Male Core Coordinators */}
            <Card className="glass hover-scale backdrop-blur-xl bg-white/5 border border-purple-500/20">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-full bg-purple-500/10">
                    <User className="text-purple-300 h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Mohammed Zeeshan</h3>
                </div>
                <p className="text-purple-200 mb-2 text-sm">CSE(AI&ML) B-section, 3rd year</p>
                <p className="text-purple-200 mb-3 font-medium">Core Coordinator</p>
                <div className="flex items-center gap-2 text-purple-300 hover:text-purple-100 transition-colors">
                  <Phone size={16} />
                  <a href="tel:7013971764" className="text-sm">7013971764</a>
                </div>
              </div>
            </Card>

            <Card className="glass hover-scale backdrop-blur-xl bg-white/5 border border-purple-500/20">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-full bg-purple-500/10">
                    <User className="text-purple-300 h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Kurleay Rohan Sai</h3>
                </div>
                <p className="text-purple-200 mb-2 text-sm">CSE(AI&ML) B-section, 3rd year</p>
                <p className="text-purple-200 mb-3 font-medium">Core Coordinator</p>
                <div className="flex items-center gap-2 text-purple-300 hover:text-purple-100 transition-colors">
                  <Phone size={16} />
                  <a href="tel:9346823607" className="text-sm">9346823607</a>
                </div>
              </div>
            </Card>

            <Card className="glass hover-scale backdrop-blur-xl bg-white/5 border border-purple-500/20">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-full bg-purple-500/10">
                    <User className="text-purple-300 h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Ningdhalli Aaryan</h3>
                </div>
                <p className="text-purple-200 mb-2 text-sm">CSE(AI&ML) B-section, 3rd year</p>
                <p className="text-purple-200 mb-3 font-medium">Core Coordinator</p>
                <div className="flex items-center gap-2 text-purple-300 hover:text-purple-100 transition-colors">
                  <Phone size={16} />
                  <a href="tel:9121872722" className="text-sm">9121872722</a>
                </div>
              </div>
            </Card>

            <Card className="glass hover-scale backdrop-blur-xl bg-white/5 border border-purple-500/20">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-full bg-purple-500/10">
                    <User className="text-purple-300 h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Sri Nitya</h3>
                </div>
                <p className="text-purple-200 mb-2 text-sm">CSE(AI&ML) B-section, 3rd year</p>
                <p className="text-purple-200 mb-3 font-medium">Core Coordinator</p>
                <div className="flex items-center gap-2 text-purple-300 hover:text-purple-100 transition-colors">
                  <Phone size={16} />
                  <a href="tel:8074795286" className="text-sm">8074795286</a>
                </div>
              </div>
            </Card>
          </div>
        </div>
        
        {/* Regular Coordinators Section */}
        <div>
          <h2 className="text-2xl font-bold text-purple-300 mb-8 text-center">Coordinators</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="glass hover-scale backdrop-blur-xl bg-white/5 border border-purple-500/20">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-full bg-purple-500/10">
                    <User className="text-purple-300 h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Akhnoor Rajesh</h3>
                </div>
                <p className="text-purple-200 mb-2 text-sm">CSE(AI&ML) A-section, 3rd year</p>
                <p className="text-purple-200 font-medium">Coordinator</p>
              </div>
            </Card>

            <Card className="glass hover-scale backdrop-blur-xl bg-white/5 border border-purple-500/20">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-full bg-purple-500/10">
                    <User className="text-purple-300 h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Mohammed Omer</h3>
                </div>
                <p className="text-purple-200 mb-2 text-sm">CSE(AI&ML) B-section, 3rd year</p>
                <p className="text-purple-200 font-medium">Coordinator</p>
              </div>
            </Card>

            <Card className="glass hover-scale backdrop-blur-xl bg-white/5 border border-purple-500/20">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-full bg-purple-500/10">
                    <User className="text-purple-300 h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Sathyam</h3>
                </div>
                <p className="text-purple-200 mb-2 text-sm">CSE(AI&ML) A-section, 3rd year</p>
                <p className="text-purple-200 font-medium">Coordinator</p>
              </div>
            </Card>

            <Card className="glass hover-scale backdrop-blur-xl bg-white/5 border border-purple-500/20">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-full bg-purple-500/10">
                    <User className="text-purple-300 h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">G. Sravika</h3>
                </div>
                <p className="text-purple-200 mb-2 text-sm">CSE(AI&ML) A-section, 3rd year</p>
                <p className="text-purple-200 font-medium">Coordinator</p>
              </div>
            </Card>

            <Card className="glass hover-scale backdrop-blur-xl bg-white/5 border border-purple-500/20">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-full bg-purple-500/10">
                    <User className="text-purple-300 h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">B. Harshini</h3>
                </div>
                <p className="text-purple-200 mb-2 text-sm">CSE(AI&ML) A-section, 3rd year</p>
                <p className="text-purple-200 font-medium">Coordinator</p>
              </div>
            </Card>

            <Card className="glass hover-scale backdrop-blur-xl bg-white/5 border border-purple-500/20">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-full bg-purple-500/10">
                    <User className="text-purple-300 h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Nandipeta Lahari</h3>
                </div>
                <p className="text-purple-200 mb-2 text-sm">CSE(AI&ML) B-section, 3rd year</p>
                <p className="text-purple-200 font-medium">Coordinator</p>
              </div>
            </Card>

            <Card className="glass hover-scale backdrop-blur-xl bg-white/5 border border-purple-500/20">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-full bg-purple-500/10">
                    <User className="text-purple-300 h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Sravani</h3>
                </div>
                <p className="text-purple-200 mb-2 text-sm">CSE(AI&ML) A-section, 3rd year</p>
                <p className="text-purple-200 font-medium">Coordinator</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coordinators;
