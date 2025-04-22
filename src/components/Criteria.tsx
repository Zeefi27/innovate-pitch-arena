
import React from 'react';

export function Criteria() {
  return (
    <div className="py-20 bg-gradient-to-br from-indigo-800 via-purple-900 to-indigo-800 text-white relative fade-in">
      {/* Floating dots */}
      <div className="absolute inset-0 pointer-events-none opacity-10 -z-10">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-purple-500"
            style={{
              width: `${10 + Math.random() * 20}px`,
              height: `${10 + Math.random() * 20}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.25 + 0.3,
              animation: `pulse ${Math.random() * 3 + 2.5}s ease-in-out infinite`
            }}
          />
        ))}
      </div>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 heading-font text-purple-300 drop-shadow-lg">
            Judging Criteria
          </h2>
          <div className="w-24 h-2 bg-purple-400 mx-auto mb-8 rounded-full shadow-lg"></div>
          <p className="max-w-3xl mx-auto text-xl font-medium text-purple-200 drop-shadow-md">
            How your idea will be evaluated by our expert panel
          </p>
        </div>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Innovation & Creativity */}
            <div className="glass backdrop-blur-md rounded-2xl p-8 shadow-2xl transition-shadow bg-gradient-to-r from-purple-700/90 to-purple-900/80 border border-purple-600 flex flex-col">
              <div className="flex justify-center mb-6">
                <div className="bg-purple-600/70 rounded-lg p-4 shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-extrabold mb-3 heading-font text-purple-200 drop-shadow-md">
                  Innovation & Creativity
                </h3>
                <div className="w-full bg-purple-300/30 rounded-full h-2.5 mb-6 shadow-inner">
                  <div className="bg-gradient-to-r from-purple-400 to-purple-600 h-2.5 rounded-full" style={{ width: '30%' }}></div>
                </div>
                <p className="text-purple-100 text-lg leading-relaxed drop-shadow-md select-text">
                  Uniqueness of the idea, creativity in problem-solving, and innovative approach
                </p>
              </div>
            </div>
            {/* Feasibility & Implementation */}
            <div className="glass backdrop-blur-md rounded-2xl p-8 shadow-2xl transition-shadow bg-gradient-to-r from-blue-700/90 to-blue-900/80 border border-blue-600 flex flex-col">
              <div className="flex justify-center mb-6">
                <div className="bg-blue-600/70 rounded-lg p-4 shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-extrabold mb-3 heading-font text-blue-200 drop-shadow-md">
                  Feasibility & Implementation
                </h3>
                <div className="w-full bg-blue-300/30 rounded-full h-2.5 mb-6 shadow-inner">
                  <div className="bg-gradient-to-r from-blue-400 to-blue-600 h-2.5 rounded-full" style={{ width: '25%' }}></div>
                </div>
                <p className="text-blue-100 text-lg leading-relaxed drop-shadow-md select-text">
                  Practicality of the solution, viable implementation plan, and resource consideration
                </p>
              </div>
            </div>
            {/* Presentation Skills */}
            <div className="glass backdrop-blur-md rounded-2xl p-8 shadow-2xl transition-shadow bg-gradient-to-r from-cyan-700/90 to-cyan-900/80 border border-cyan-600 flex flex-col">
              <div className="flex justify-center mb-6">
                <div className="bg-cyan-600/70 rounded-lg p-4 shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-extrabold mb-3 heading-font text-cyan-200 drop-shadow-md">
                  Presentation Skills
                </h3>
                <div className="w-full bg-cyan-300/30 rounded-full h-2.5 mb-6 shadow-inner">
                  <div className="bg-gradient-to-r from-cyan-400 to-cyan-600 h-2.5 rounded-full" style={{ width: '25%' }}></div>
                </div>
                <p className="text-cyan-100 text-lg leading-relaxed drop-shadow-md select-text">
                  Clarity of communication, engaging presentation, confidence, and ability to answer questions
                </p>
              </div>
            </div>
            {/* Technical Depth */}
            <div className="glass backdrop-blur-md rounded-2xl p-8 shadow-2xl transition-shadow bg-gradient-to-r from-indigo-700/90 to-indigo-900/80 border border-indigo-600 flex flex-col">
              <div className="flex justify-center mb-6">
                <div className="bg-indigo-600/70 rounded-lg p-4 shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-extrabold mb-3 heading-font text-indigo-200 drop-shadow-md">
                  Technical Depth
                </h3>
                <div className="w-full bg-indigo-300/30 rounded-full h-2.5 mb-6 shadow-inner">
                  <div className="bg-gradient-to-r from-indigo-400 to-indigo-600 h-2.5 rounded-full" style={{ width: '20%' }}></div>
                </div>
                <p className="text-indigo-100 text-lg leading-relaxed drop-shadow-md select-text">
                  Understanding of technology stack, depth of research, and technical feasibility
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

