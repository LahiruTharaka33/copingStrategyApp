import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* Header - Mobile Optimized */}
      <header className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 py-3">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-lg sm:text-xl">🧠</span>
            </div>
            <div>
              <h1 className="text-base sm:text-lg font-bold text-gray-900 leading-tight">CSA Manager</h1>
              <p className="text-[10px] sm:text-xs text-gray-500">Research Application</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content - Mobile Optimized */}
      <main className="max-w-4xl mx-auto px-3 sm:px-6 py-6 sm:py-12">
        {/* Hero Section - Mobile Optimized */}
        <div className="text-center mb-6 sm:mb-12">
          <div className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-semibold mb-3 sm:mb-4 shadow-md">
            🎓 Academic Research Project
          </div>
          
          <h2 className="text-2xl sm:text-5xl font-black text-gray-900 mb-3 sm:mb-4 leading-tight px-2">
            Competitive State Anxiety
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Management Platform
            </span>
          </h2>
          
          <p className="text-sm sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed px-4">
            A personalized mobile application for managing competitive state anxiety in athletes
          </p>
        </div>

        {/* Main Card - Mobile Optimized */}
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl overflow-hidden mb-6 sm:mb-8">
          {/* Research Info Banner - Mobile Optimized */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-4 sm:p-8 text-white">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-xl sm:text-2xl">👤</span>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-sm sm:text-xl mb-0.5 sm:mb-1">Research by</h3>
                <p className="text-white/90 font-semibold text-sm sm:text-lg">
                  A.G.B.R.I. Thilakarathna
                </p>
                <p className="text-white/75 text-xs sm:text-sm mt-0.5 sm:mt-1">
                  Sabaragamuwa University of Sri Lanka
                </p>
                <p className="text-white/75 text-[10px] sm:text-xs mt-1 sm:mt-2">
                  📧 imaathilakarathna@gmail.com
                </p>
              </div>
            </div>
          </div>

          {/* Content - Mobile Optimized */}
          <div className="p-4 sm:p-8 space-y-5 sm:space-y-6">
            {/* About Section - Mobile Optimized */}
            <div>
              <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3 flex items-center gap-2">
                <span className="text-lg sm:text-xl">📊</span>
                About This Assessment
              </h4>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                This application is based on research exploring how national-level female combat sports athletes manage Competitive State Anxiety (CSA) through coping mechanisms linked to their individual personality traits.
              </p>
            </div>

            {/* Features - Mobile Optimized */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="bg-indigo-50 rounded-xl p-3 sm:p-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-indigo-600 rounded-lg flex items-center justify-center mb-2 sm:mb-3">
                  <span className="text-white text-lg sm:text-xl">🎯</span>
                </div>
                <h5 className="font-bold text-gray-900 mb-0.5 sm:mb-1 text-sm sm:text-base">Personalized</h5>
                <p className="text-xs sm:text-sm text-gray-600">
                  Strategies based on your Big Five personality traits
                </p>
              </div>

              <div className="bg-purple-50 rounded-xl p-3 sm:p-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-purple-600 rounded-lg flex items-center justify-center mb-2 sm:mb-3">
                  <span className="text-white text-lg sm:text-xl">🧪</span>
                </div>
                <h5 className="font-bold text-gray-900 mb-0.5 sm:mb-1 text-sm sm:text-base">Evidence-Based</h5>
                <p className="text-xs sm:text-sm text-gray-600">
                  Research-backed anxiety management techniques
                </p>
              </div>

              <div className="bg-pink-50 rounded-xl p-3 sm:p-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-pink-600 rounded-lg flex items-center justify-center mb-2 sm:mb-3">
                  <span className="text-white text-lg sm:text-xl">⏱️</span>
                </div>
                <h5 className="font-bold text-gray-900 mb-0.5 sm:mb-1 text-sm sm:text-base">Quick & Easy</h5>
                <p className="text-xs sm:text-sm text-gray-600">
                  Complete assessment in 5-10 minutes
                </p>
              </div>

              <div className="bg-blue-50 rounded-xl p-3 sm:p-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-blue-600 rounded-lg flex items-center justify-center mb-2 sm:mb-3">
                  <span className="text-white text-lg sm:text-xl">🎮</span>
                </div>
                <h5 className="font-bold text-gray-900 mb-0.5 sm:mb-1 text-sm sm:text-base">Interactive</h5>
                <p className="text-xs sm:text-sm text-gray-600">
                  Engaging game-like experience
                </p>
              </div>
            </div>

            {/* CTA Button - Mobile Optimized */}
            <Link
              href="/survey"
              className="block w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-4 sm:py-5 px-4 sm:px-6 rounded-xl transition-all duration-200 text-center shadow-lg hover:shadow-xl active:scale-95 sm:hover:scale-[1.02]"
            >
              <span className="text-base sm:text-lg">Start Assessment Now</span>
              <div className="text-[10px] sm:text-xs opacity-90 mt-0.5 sm:mt-1">Begin your personality evaluation</div>
            </Link>

            {/* Process Steps - Mobile Optimized */}
            <div className="border-t pt-4 sm:pt-6">
              <h4 className="text-xs sm:text-sm font-bold text-gray-700 mb-3 sm:mb-4 uppercase tracking-wide">
                How It Works
              </h4>
              <div className="space-y-2.5 sm:space-y-3">
                <div className="flex items-start gap-2.5 sm:gap-3">
                  <div className="w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0 text-white text-xs font-bold">
                    1
                  </div>
                  <div className="flex-1">
                    <p className="text-xs sm:text-sm font-semibold text-gray-900">Complete Personality Assessment</p>
                    <p className="text-[10px] sm:text-xs text-gray-500">Answer questions to identify your Big Five traits</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 sm:gap-3">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 text-white text-xs font-bold">
                    2
                  </div>
                  <div className="flex-1">
                    <p className="text-xs sm:text-sm font-semibold text-gray-900">Identify Anxiety Profile</p>
                    <p className="text-[10px] sm:text-xs text-gray-500">Understand your cognitive & somatic anxiety levels</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 sm:gap-3">
                  <div className="w-6 h-6 bg-pink-600 rounded-full flex items-center justify-center flex-shrink-0 text-white text-xs font-bold">
                    3
                  </div>
                  <div className="flex-1">
                    <p className="text-xs sm:text-sm font-semibold text-gray-900">Get Personalized Strategies</p>
                    <p className="text-[10px] sm:text-xs text-gray-500">Receive tailored coping mechanisms for your profile</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Research Context - Mobile Optimized */}
        <div className="bg-white/60 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-200">
          <div className="flex items-start gap-2.5 sm:gap-3">
            <span className="text-xl sm:text-2xl flex-shrink-0">ℹ️</span>
            <div>
              <h5 className="font-bold text-gray-900 mb-1.5 sm:mb-2 text-xs sm:text-sm">Research Context</h5>
              <p className="text-[10px] sm:text-xs text-gray-600 leading-relaxed mb-1.5 sm:mb-2">
                This application implements findings from research with 40 national-level combat sports athletes (karate, taekwondo, wrestling, judo), demonstrating that athletes adopt different coping strategies based on their personality profiles.
              </p>
              <p className="text-[10px] sm:text-xs text-gray-500 italic">
                Your participation helps validate and improve personalized mental health support for competitive athletes.
              </p>
            </div>
          </div>
        </div>

        {/* Footer - Mobile Optimized */}
        <footer className="text-center mt-8 sm:mt-12 pb-6 sm:pb-8">
          <p className="text-[10px] sm:text-xs text-gray-500 px-4">
            © 2025 A.G.B.R.I. Thilakarathna • Sabaragamuwa University of Sri Lanka
          </p>
          <p className="text-[10px] sm:text-xs text-gray-400 mt-1 px-4">
            Academic Research Application • All responses are confidential
          </p>
        </footer>
      </main>
    </div>
  );
}
