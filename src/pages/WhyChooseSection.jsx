import { Zap, Cpu, HeartHandshake, TrendingUp, Lock, Settings } from 'lucide-react';

function WhyChooseSection() {
  const advantages = [
    {
      icon: Zap,
      title: 'Réactivité maximale',
      description: 'Temps de réponse inférieur à 12 secondes.',
      stat: '<12s',
      statLabel: 'Temps de réponse'
    },
    {
      icon: Cpu,
      title: 'Technologie IP avancée',
      description: 'Infrastructure de dernière génération avec redondance multi-sites.',
      stat: '5G',
      statLabel: 'Bande passante'
    },
    {
      icon: HeartHandshake,
      title: 'Support dédié 24/7',
      description: 'Une équipe d\'experts disponible à tout moment.',
      stat: '24/7',
      statLabel: 'Disponibilité'
    },
    {
      icon: TrendingUp,
      title: 'ROI garanti',
      description: 'Réduisez vos coûts téléphoniques jusqu\'à 60%.',
      stat: '60%',
      statLabel: 'Économies'
    },
    {
      icon: Lock,
      title: 'Sécurité renforcée',
      description: 'Chiffrement AES-256 et conformité RGPD.',
      stat: '256',
      statLabel: 'Bits chiffrement'
    },
    {
      icon: Settings,
      title: 'Personnalisation totale',
      description: 'Solutions sur-mesure adaptées à votre activité.',
      stat: '100%',
      statLabel: 'Sur-mesure'
    },
  ];

  return (
    <section id="section-2" className="py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-100 mb-6">
            <span className="text-sm font-semibold text-amber-700">Nos Avantages</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">
            Pourquoi choisir{' '}
            <span className="bg-gradient-to-r from-amber-500 to-amber-700 bg-clip-text text-transparent">
              IPNAT ?
            </span>
          </h2>
          <p className="text-lg text-gray-500">
            Nous combinons expertise technique et accompagnement humain pour une expérience sans compromis.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {advantages.map((adv, i) => {
            const Icon = adv.icon;
            return (
              <div
                key={i}
                className="group relative p-8 rounded-3xl bg-white border border-gray-100 hover:border-blue-200 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="relative">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center shadow-lg shadow-blue-600/20 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-extrabold text-blue-600">{adv.stat}</div>
                      <div className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">{adv.statLabel}</div>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                    {adv.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{adv.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseSection;