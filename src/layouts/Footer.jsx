import { Headphones } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-brand-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                <Headphones className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-extrabold text-white">
                IP<span className="text-blue-400">NAT</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-5">
              Votre partenaire de confiance en solutions téléphoniques IP et centres d'appels.
            </p>
            <div className="flex gap-3">
              {['linkedin', 'twitter', 'facebook'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                >
                  <span className="capitalize text-sm">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {[
            { title: 'Services', links: ["Centres d'appels", "Solutions VoIP", "CRM Intégré", "API & Intégrations"] },
            { title: 'Entreprise', links: ['À propos', 'Carrières', 'Blog', 'Partenaires'] },
            { title: 'Support', links: ['Documentation', 'Status', 'Contact', 'FAQ'] },
          ].map((col, i) => (
            <div key={i}>
              <h4 className="text-sm font-semibold text-white mb-5 uppercase tracking-wider">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((link, j) => (
                  <li key={j}>
                    <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">© 2026 IPNAT. Tous droits réservés.</p>
          <div className="flex gap-6 text-xs">
            <a href="#" className="text-gray-600 hover:text-gray-400">Mentions légales</a>
            <a href="#" className="text-gray-600 hover:text-gray-400">Politique de confidentialité</a>
            <a href="#" className="text-gray-600 hover:text-gray-400">CGU</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;