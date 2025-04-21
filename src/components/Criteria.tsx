
export function Criteria() {
  return (
    <div className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900 text-white relative fade-in">
      {/* Floating dots */}
      <div className="absolute inset-0 pointer-events-none opacity-20 -z-10">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-purple-400"
            style={{
              width: `${8 + Math.random() * 14}px`,
              height: `${8 + Math.random() * 14}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.4 + 0.2,
              animation: `pulse ${Math.random() * 3 + 3}s infinite`
            }}
          />
        ))}
      </div>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-font">Judging Criteria</h2>
          <div className="w-20 h-1 bg-purple-400 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-purple-200">
            How your idea will be evaluated by our expert panel
          </p>
        </div>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Innovation & Creativity */}
            <div className="glass backdrop-blur-sm rounded-xl p-6 shadow-xl hover:shadow-2xl transition-shadow bg-purple-900/50 border border-purple-700">
              <div className="flex items-start mb-4">
                <div className="bg-purple-500/30 rounded-lg p-3 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 heading-font text-purple-200">Innovation & Creativity</h3>
                  <div className="w-full bg-purple-200/10 rounded-full h-1.5 mb-4">
                    <div className="bg-gradient-to-r from-purple-400 to-purple-600 h-1.5 rounded-full" style={{ width: '30%' }}></div>
                  </div>
                  <p className="text-purple-300">
                    Uniqueness of the idea, creativity in problem-solving, and innovative approach
                  </p>
                </div>
              </div>
            </div>
            {/* Feasibility & Implementation */}
            <div className="glass backdrop-blur-sm rounded-xl p-6 shadow-xl hover:shadow-2xl transition-shadow bg-blue-900/50 border border-blue-700">
              <div className="flex items-start mb-4">
                <div className="bg-blue-500/30 rounded-lg p-3 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 heading-font text-blue-300">Feasibility & Implementation</h3>
                  <div className="w-full bg-blue-200/10 rounded-full h-1.5 mb-4">
                    <div className="bg-gradient-to-r from-blue-400 to-blue-600 h-1.5 rounded-full" style={{ width: '25%' }}></div>
                  </div>
                  <p className="text-blue-300">
                    Practicality of the solution, viable implementation plan, and resource consideration
                  </p>
                </div>
              </div>
            </div>
            {/* Presentation Skills */}
            <div className="glass backdrop-blur-sm rounded-xl p-6 shadow-xl hover:shadow-2xl transition-shadow bg-cyan-900/50 border border-cyan-700">
              <div className="flex items-start mb-4">
                <div className="bg-cyan-500/30 rounded-lg p-3 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 heading-font text-cyan-300">Presentation Skills</h3>
                  <div className="w-full bg-cyan-200/10 rounded-full h-1.5 mb-4">
                    <div className="bg-gradient-to-r from-cyan-400 to-cyan-600 h-1.5 rounded-full" style={{ width: '25%' }}></div>
                  </div>
                  <p className="text-cyan-300">
                    Clarity of communication, engaging presentation, confidence, and ability to answer questions
                  </p>
                </div>
              </div>
            </div>
            {/* Technical Depth */}
            <div className="glass backdrop-blur-sm rounded-xl p-6 shadow-xl hover:shadow-2xl transition-shadow bg-indigo-900/50 border border-indigo-700">
              <div className="flex items-start mb-4">
                <div className="bg-indigo-500/30 rounded-lg p-3 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 heading-font text-indigo-300">Technical Depth</h3>
                  <div className="w-full bg-indigo-200/10 rounded-full h-1.5 mb-4">
                    <div className="bg-gradient-to-r from-indigo-400 to-indigo-600 h-1.5 rounded-full" style={{ width: '20%' }}></div>
                  </div>
                  <p className="text-indigo-300">
                    Understanding of technology stack, depth of research, and technical feasibility
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
