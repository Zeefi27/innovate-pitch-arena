
import { Medal, Award, Star } from "lucide-react";

export function Prizes() {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Prizes & Recognition</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Celebrating excellence and innovation at Ideathon 2.0
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* First Prize */}
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-8 shadow-lg border-2 border-amber-200 relative overflow-hidden group">
            <div className="absolute -right-10 -top-10 w-24 h-24 bg-amber-500/20 rounded-full transition-transform duration-500 group-hover:scale-150"></div>
            <div className="absolute -left-10 -bottom-10 w-24 h-24 bg-amber-500/10 rounded-full transition-transform duration-500 group-hover:scale-150"></div>
            
            <div className="relative">
              <div className="flex justify-center mb-6">
                <Medal className="h-16 w-16 text-amber-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 text-center">First Prize</h3>
              <div className="text-center mb-4">
                <span className="inline-block bg-amber-500/20 text-amber-700 px-4 py-1 rounded-full font-semibold">
                  Cash Prize + Certificate
                </span>
              </div>
              <p className="text-gray-700 text-center">
                Awarded to the team with the most innovative and well-executed idea.
              </p>
            </div>
          </div>
          
          {/* Second Prize */}
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-8 shadow-lg border-2 border-slate-200 relative overflow-hidden group">
            <div className="absolute -right-10 -top-10 w-24 h-24 bg-slate-400/20 rounded-full transition-transform duration-500 group-hover:scale-150"></div>
            <div className="absolute -left-10 -bottom-10 w-24 h-24 bg-slate-400/10 rounded-full transition-transform duration-500 group-hover:scale-150"></div>
            
            <div className="relative">
              <div className="flex justify-center mb-6">
                <Award className="h-16 w-16 text-slate-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 text-center">Second Prize</h3>
              <div className="text-center mb-4">
                <span className="inline-block bg-slate-500/20 text-slate-700 px-4 py-1 rounded-full font-semibold">
                  Cash Prize + Certificate
                </span>
              </div>
              <p className="text-gray-700 text-center">
                Recognizing exceptional creativity and presentation skills.
              </p>
            </div>
          </div>
          
          {/* Best Presentation */}
          <div className="bg-gradient-to-br from-rose-50 to-rose-100 rounded-xl p-8 shadow-lg border-2 border-rose-200 relative overflow-hidden group">
            <div className="absolute -right-10 -top-10 w-24 h-24 bg-rose-400/20 rounded-full transition-transform duration-500 group-hover:scale-150"></div>
            <div className="absolute -left-10 -bottom-10 w-24 h-24 bg-rose-400/10 rounded-full transition-transform duration-500 group-hover:scale-150"></div>
            
            <div className="relative">
              <div className="flex justify-center mb-6">
                <Star className="h-16 w-16 text-rose-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 text-center">Best Presentation</h3>
              <div className="text-center mb-4">
                <span className="inline-block bg-rose-500/20 text-rose-700 px-4 py-1 rounded-full font-semibold">
                  Certificate
                </span>
              </div>
              <p className="text-gray-700 text-center">
                For the team with the most compelling and professional presentation.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-16 bg-purple-50 rounded-xl p-8 shadow-md">
          <h3 className="text-xl font-bold mb-6 text-gray-900 text-center">Additional Recognition</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-5 shadow-sm text-center">
              <div className="font-semibold text-purple-800 mb-2">Best Communicator</div>
              <p className="text-sm text-gray-600">For excellent communication skills</p>
            </div>
            <div className="bg-white rounded-lg p-5 shadow-sm text-center">
              <div className="font-semibold text-purple-800 mb-2">Best Idea</div>
              <p className="text-sm text-gray-600">Special creative mention</p>
            </div>
            <div className="bg-white rounded-lg p-5 shadow-sm text-center">
              <div className="font-semibold text-purple-800 mb-2">Top 20 Finalists</div>
              <p className="text-sm text-gray-600">Recognition for all finalists</p>
            </div>
            <div className="bg-white rounded-lg p-5 shadow-sm text-center">
              <div className="font-semibold text-purple-800 mb-2">Participation</div>
              <p className="text-sm text-gray-600">Certificates for all participants</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
