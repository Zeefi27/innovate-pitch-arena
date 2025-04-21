
export function About() {
  return (
    <div className="py-20 bg-white relative fade-in">
      {/* Floating Dots as background */}
      <div className="absolute inset-0 pointer-events-none opacity-20 -z-10">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-purple-200"
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 heading-font">About Ideathon 2.0</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            The platform to foster innovation, creativity, and presentation skills among students
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white glass p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900 heading-font">Innovation</h3>
            <p className="text-gray-600">
              Develop and present ground-breaking ideas in technology, business, and social impact.
            </p>
          </div>
          <div className="bg-white glass p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900 heading-font">Collaboration</h3>
            <p className="text-gray-600">
              Work in teams of 2-4 students to refine ideas and create impressive presentations.
            </p>
          </div>
          <div className="bg-white glass p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900 heading-font">Presentation</h3>
            <p className="text-gray-600">
              Enhance communication skills and gain confidence through pitching to expert judges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
