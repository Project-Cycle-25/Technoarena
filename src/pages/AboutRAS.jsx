export default function AboutRAS() {
  return (
    <>
      {/* Google Fonts Import for Frijole */}
      <link href="https://fonts.googleapis.com/css2?family=Frijole&display=swap" rel="stylesheet" />
      
      <div className="flex flex-col items-center justify-center min-h-screen bg-base-200 px-6 py-12">
        
        {/* Main heading with Frijole font */}
        <div className="text-center mb-14">
          <h1 
            className="text-4xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-white mb-6 tracking-wider"
            style={{ fontFamily: 'Frijole, cursive' }}
          >
            ABOUT US
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full shadow-lg"></div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-7xl">
          
          {/* Card 1 - Better visibility with darker background */}
          <div className="group relative bg-gradient-to-br from-gray-800/90 to-gray-900/95 border border-gray-600/50 rounded-3xl shadow-2xl shadow-gray-900/50 p-8 transition-all duration-500 hover:-translate-y-4 hover:shadow-blue-500/30 hover:border-blue-400/50 backdrop-blur-sm overflow-hidden">
            {/* Subtle glow effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Decorative element */}
            <div className="absolute top-4 right-4 w-12 h-12 border-2 border-blue-400/30 rounded-lg rotate-45 group-hover:rotate-90 transition-transform duration-700"></div>
            
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="w-3 h-3 bg-blue-400 rounded-full mr-3 shadow-lg shadow-blue-400/50 group-hover:shadow-blue-400/80 transition-shadow duration-300"></div>
                <h2 className="text-2xl font-bold text-white tracking-wide group-hover:text-blue-100 transition-colors duration-300">ABOUT IEEE-RAS</h2>
              </div>
              <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                IEEE - Robotics and Automation (RAS) is a student chapter situated at Vellore Institute of Technology (VIT), Vellore. Our members hail from diverse disciplines but share a fervent passion for cutting-edge computational practices and precision robotics. Together, we form a strong community of engineering students.
              </p>
            </div>
          </div>

          {/* Card 2 - Different accent color for variety */}
          <div className="group relative bg-gradient-to-br from-gray-800/90 to-gray-900/95 border border-gray-600/50 rounded-3xl shadow-2xl shadow-gray-900/50 p-8 transition-all duration-500 hover:-translate-y-4 hover:shadow-purple-500/30 hover:border-purple-400/50 backdrop-blur-sm overflow-hidden">
            {/* Subtle glow effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Decorative element */}
            <div className="absolute top-4 right-4 w-12 h-12 border-2 border-purple-400/30 rounded-full group-hover:scale-110 transition-transform duration-500">
              <div className="absolute inset-2 border border-purple-400/20 rounded-full"></div>
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="w-3 h-3 bg-purple-400 rounded-full mr-3 shadow-lg shadow-purple-400/50 group-hover:shadow-purple-400/80 transition-shadow duration-300"></div>
                <h2 className="text-2xl font-bold text-white tracking-wide group-hover:text-purple-100 transition-colors duration-300">OUR ACTIVITIES</h2>
              </div>
              <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                We've successfully completed numerous significant projects and organized a variety of technical events within the university. Driven by our commitment to innovation, we actively engage with fellow inventors and enthusiasts through our lively online community.
              </p>
            </div>
          </div>

          {/* Card 3 - Third accent color */}
          <div className="group relative bg-gradient-to-br from-gray-800/90 to-gray-900/95 border border-gray-600/50 rounded-3xl shadow-2xl shadow-gray-900/50 p-8 transition-all duration-500 hover:-translate-y-4 hover:shadow-emerald-500/30 hover:border-emerald-400/50 backdrop-blur-sm overflow-hidden">
            {/* Subtle glow effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Decorative element */}
            <div className="absolute top-4 right-4 w-12 h-12 border-2 border-emerald-400/30 transform rotate-45 group-hover:rotate-12 transition-transform duration-500">
              <div className="absolute inset-2 border border-emerald-400/20 transform -rotate-45"></div>
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="w-3 h-3 bg-emerald-400 rounded-full mr-3 shadow-lg shadow-emerald-400/50 group-hover:shadow-emerald-400/80 transition-shadow duration-300"></div>
                <h2 className="text-2xl font-bold text-white tracking-wide group-hover:text-emerald-100 transition-colors duration-300">OUR IMPACT</h2>
              </div>
              <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                Additionally, we prioritize the development of skills among our junior members through workshops and hands-on sessions covering various technical domains. As a result of our continuous efforts, IEEE-RAS has come up to be one of the nominees for best technical club and chapter and also the leading international student chapters here in VIT.
              </p>
            </div>
          </div>

        </div>

        {/* Decorative bottom elements */}
        <div className="mt-12 flex justify-center space-x-3">
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-300"></div>
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse delay-700"></div>
        </div>
      </div>
    </>
  );
}