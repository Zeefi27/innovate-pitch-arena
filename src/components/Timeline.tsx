
import { Button } from "@/components/ui/button";

export function Timeline() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Event Timeline</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Follow the journey from registration to the grand finale
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Phase 1 */}
          <div className="flex flex-col md:flex-row gap-4 mb-12">
            <div className="md:w-1/3">
              <div className="bg-gradient-to-br from-purple-600 to-indigo-600 text-white rounded-lg p-6 shadow-md h-full">
                <div className="text-5xl font-bold mb-2">01</div>
                <h3 className="text-xl font-bold mb-2">Registration Phase</h3>
                <p className="text-purple-100">
                  Open to all branches. Form your team of 2-4 members and register for free.
                </p>
              </div>
            </div>
            <div className="md:w-2/3 flex items-center">
              <div className="bg-white rounded-lg p-6 shadow-md h-full w-full">
                <h4 className="font-bold text-lg mb-3 text-gray-900">Registration Details:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    Complete Google Form with team details
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    Include Team Name, Member Names, Roll Numbers, Year & Department
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    Provide Contact Details (Phone + Email)
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    Initial registration is free for all teams
                  </li>
                </ul>
                <div className="mt-4">
                <Button 
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white border-none" 
                  asChild
                >
                  <a href="https://forms.gle/PJP9k9cePRTjSJoBA" target="_blank" rel="noopener noreferrer">
                    Register Now
                  </a>
                </Button>
              </div>
              </div>
            </div>
          </div>
          
          {/* Phase 2 */}
          <div className="flex flex-col md:flex-row gap-4 mb-12">
            <div className="md:w-1/3">
              <div className="bg-gradient-to-br from-indigo-600 to-blue-600 text-white rounded-lg p-6 shadow-md h-full">
                <div className="text-5xl font-bold mb-2">02</div>
                <h3 className="text-xl font-bold mb-2">Filtration Round</h3>
                <p className="text-indigo-100">
                  Preliminary pitch to select the top 20 teams from all registrations.
                </p>
              </div>
            </div>
            <div className="md:w-2/3 flex items-center">
              <div className="bg-white rounded-lg p-6 shadow-md h-full w-full">
                <h4 className="font-bold text-lg mb-3 text-gray-900">Filtration Details:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-2">•</span>
                    Mode: Offline (evaluated by student evaluators)
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-2">•</span>
                    Time per Team: 3-4 minutes maximum
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-2">•</span>
                    Selection criteria: Technical stack, communication, presentation skills, and PPT quality
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-2">•</span>
                    Top 20 teams qualify for the final round (Rs. 250 per team)
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Phase 3 */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="md:w-1/3">
              <div className="bg-gradient-to-br from-blue-600 to-cyan-600 text-white rounded-lg p-6 shadow-md h-full">
                <div className="text-5xl font-bold mb-2">03</div>
                <h3 className="text-xl font-bold mb-2">Final Round</h3>
                <p className="text-blue-100">
                  The main event where top 20 teams present to the grand jury.
                </p>
              </div>
            </div>
            <div className="md:w-2/3 flex items-center">
              <div className="bg-white rounded-lg p-6 shadow-md h-full w-full">
                <h4 className="font-bold text-lg mb-3 text-gray-900">Final Round Details:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Venue: Seminar Hall / Auditorium
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Time Limit: 5-7 minutes for pitch
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Q&A by judges: 2-3 minutes
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Expert judging panel evaluating innovation, feasibility, presentation, and more
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
