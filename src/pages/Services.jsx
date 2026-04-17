import { Headphones, PhoneCall, MonitorSmartphone, BarChart3, Shield, Plug } from 'lucide-react';

function Services() {
  const services = [
    {
      icon: Headphones,
      color: 'blue',
      title: "Centres d'appels",
      description: "Solutions complètes de centre d'appels inbound et outbound avec distribution intelligente des appels, files d'attente et supervision en temps réel.",
      features: ['Distribution ACD', 'Files d\'attente', 'Supervision live']
    },
    {
      icon: PhoneCall,
      color: 'green',
      title: "Solutions VoIP",
      description: "Infrastructure VoIP robuste et sécurisée. Réduisez vos coûts téléphoniques jusqu'à 60%.",
      features: ['SIP Trunking', 'Numéros virtuels', 'Codec HD']
    },
    {
      icon: MonitorSmartphone,
      color: 'purple',
      title: "CRM Intégré",
      description: "Gestion complète de la relation client avec intégration native à votre téléphonie.",
      features: ['Fiches clients', 'Historique d\'appels', 'Tickets support']
    },
    {
      icon: BarChart3,
      color: 'amber',
      title: "Tableaux de bord",
      description: "Analytics avancés et rapports personnalisés pour piloter votre activité.",
      features: ['Rapports temps réel', 'KPI personnalisés', 'Export automatique']
    },
    {
      icon: Shield,
      color: 'red',
      title: "Sécurité & Conformité",
      description: "Chiffrement de bout en bout, conformité RGPD et normes télécoms.",
      features: ['Chiffrement E2E', 'Conformité RGPD', 'Audit logs']
    },
    {
      icon: Plug,
      color: 'teal',
      title: "Intégrations API",
      description: "API REST complète pour connecter vos outils existants (Salesforce, Zendesk, HubSpot...).",
      features: ['API REST', 'Webhooks', 'Connecteurs natifs']
    },
  ];

  const colorMap = {
    blue: { bg: 'bg-blue-500/10', border: 'border-blue-500/20', text: 'text-blue-400' },
    green: { bg: 'bg-green-500/10', border: 'border-green-500/20', text: 'text-green-400' },
    purple: { bg: 'bg-purple-500/10', border: 'border-purple-500/20', text: 'text-purple-400' },
    amber: { bg: 'bg-amber-500/10', border: 'border-amber-500/20', text: 'text-amber-400' },
    red: { bg: 'bg-red-500/10', border: 'border-red-500/20', text: 'text-red-400' },
    teal: { bg: 'bg-teal-500/10', border: 'border-teal-500/20', text: 'text-teal-400' },
  };

  return (
    <section id="section-1" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6">
            <span className="text-sm font-semibold text-blue-700">Nos Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">
            Des solutions complètes pour{' '}
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              votre communication
            </span>
          </h2>
          <p className="text-lg text-gray-500">
            De la téléphonie IP au centre d'appels intégré, IPNAT vous offre un écosystème complet.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, i) => {
            const c = colorMap[service.color];
            const Icon = service.icon;
            return (
              <div
                key={i}
                className="group p-8 rounded-3xl bg-white border border-gray-100 hover:border-gray-200 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
              >
                <div className={`w-14 h-14 rounded-2xl ${c.bg} ${c.border} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-7 h-7 ${c.text}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, j) => (
                    <span
                      key={j}
                      className="text-xs font-medium px-3 py-1.5 rounded-lg bg-gray-50 text-gray-600 border border-gray-100"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;