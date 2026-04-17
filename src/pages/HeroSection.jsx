import { ArrowRight, PlayCircle, Phone, Globe, Wifi, TrendingUp, ShieldCheck, PhoneIncoming, PhoneOutgoing, Clock } from 'lucide-react';

function HeroSection() {
  return (
    <section id="section-0" className="hero-gradient relative min-h-screen flex items-center overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 grid-pattern"></div>
      
      {/* Floating blurred circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl float-particle"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/8 rounded-full blur-3xl float-particle" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl"></div>

      {/* Floating icons */}
      <div className="absolute top-32 right-20 hidden lg:block float-particle" style={{ animationDelay: '1s' }}>
        <div className="w-14 h-14 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center">
          <Phone className="w-6 h-6 text-blue-400" />
        </div>
      </div>
      <div className="absolute bottom-40 left-20 hidden lg:block float-particle" style={{ animationDelay: '3s' }}>
        <div className="w-14 h-14 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center">
          <Globe className="w-6 h-6 text-amber-400" />
        </div>
      </div>
      <div className="absolute top-48 left-1/3 hidden lg:block float-particle" style={{ animationDelay: '4s' }}>
        <div className="w-12 h-12 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center">
          <Wifi className="w-5 h-5 text-green-400" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8 animate-slide-up">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-sm font-medium text-blue-300">Solutions VoIP & Call Center</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.1] mb-6 animate-slide-up delay-100">
              Connectez vos équipes,
              <span className="block mt-2 bg-gradient-to-r from-blue-400 via-blue-300 to-amber-400 bg-clip-text text-transparent">
                simplifiez vos échanges
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-400 leading-relaxed mb-10 max-w-xl animate-slide-up delay-200">
              IPNAT est votre partenaire de confiance en solutions téléphoniques IP, VoIP et centres d'appels. 
              Nous transformons votre communication professionnelle avec des technologies de pointe.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up delay-300">
              <a 
                href="#section-3" 
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-2xl hover:from-blue-500 hover:to-blue-600 transition-all duration-300 shadow-xl shadow-blue-600/25 hover:shadow-blue-500/40 hover:-translate-y-1"
              >
                Nous contacter
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a 
                href="#section-1" 
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 text-white font-semibold rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm"
              >
                <PlayCircle className="w-5 h-5 text-blue-400" />
                Découvrir nos services
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-12 animate-slide-up delay-400">
              {[
                { value: '500+', label: 'Clients actifs' },
                { value: '99.9%', label: 'Disponibilité' },
                { value: '24/7', label: 'Support' },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl sm:text-3xl font-extrabold text-white">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-gray-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative hidden lg:flex justify-center items-center animate-slide-up delay-300">
            <div className="relative">
              {/* Main Dashboard Mockup */}
              <div className="w-[420px] h-[480px] rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 p-8 shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>

                <div className="space-y-4">
                  {/* Appels entrants */}
                  <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center">
                        <PhoneIncoming className="w-5 h-5 text-green-400" />
                      </div>
                      <div>
                        <div className="text-white text-sm font-semibold">Appels entrants</div>
                        <div className="text-gray-500 text-xs">En temps réel</div>
                      </div>
                    </div>
                    <span className="text-2xl font-bold text-green-400">847</span>
                  </div>

                  {/* Appels sortants */}
                  <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
                        <PhoneOutgoing className="w-5 h-5 text-blue-400" />
                      </div>
                      <div>
                        <div className="text-white text-sm font-semibold">Appels sortants</div>
                        <div className="text-gray-500 text-xs">En temps réel</div>
                      </div>
                    </div>
                    <span className="text-2xl font-bold text-blue-400">623</span>
                  </div>

                  {/* Temps d'attente */}
                  <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center">
                        <Clock className="w-5 h-5 text-amber-400" />
                      </div>
                      <div>
                        <div className="text-white text-sm font-semibold">Temps d'attente</div>
                        <div className="text-gray-500 text-xs">Moyenne</div>
                      </div>
                    </div>
                    <span className="text-2xl font-bold text-amber-400">12s</span>
                  </div>

                  {/* Agents en ligne */}
                  <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-600/20 to-blue-500/10 border border-blue-500/20">
                    <div className="text-xs text-blue-300 font-medium mb-2">Agents en ligne</div>
                    <div className="flex items-center gap-2">
                      <div className="flex -space-x-2">
                        {[1, 2, 3, 4, 5].map(i => (
                          <div
                            key={i}
                            className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-brand-900 flex items-center justify-center text-[10px] text-white font-bold"
                          >
                            {String.fromCharCode(64 + i)}
                          </div>
                        ))}
                      </div>
                      <span className="text-sm text-white font-semibold ml-2">+42 agents</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-6 -right-6 w-20 h-20 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-xl shadow-green-500/30 float-particle" style={{ animationDelay: '1.5s' }}>
                <div className="text-center">
                  <TrendingUp className="w-6 h-6 text-white mx-auto" />
                  <div className="text-[10px] text-white/80 font-medium mt-1">+32%</div>
                </div>
              </div>

              {/* Floating security card */}
              <div className="absolute -bottom-4 -left-8 px-5 py-3 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 shadow-xl float-particle" style={{ animationDelay: '3s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
                    <ShieldCheck className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-xs text-white font-semibold">Sécurisé</div>
                    <div className="text-[10px] text-gray-400">Chiffrement AES-256</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M0 120L48 110C96 100 192 80 288 70C384 60 480 60 576 65C672 70 768 80 864 85C960 90 1056 90 1152 85C1248 80 1344 70 1392 65L1440 60V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z" 
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
}

export default HeroSection;