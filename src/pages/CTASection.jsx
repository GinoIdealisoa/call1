import { useState } from 'react';
import { Send, Phone, Mail, MapPin, CheckCircle } from 'lucide-react';

function CTASection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', company: '', message: '' });
    }, 4000);
  };

  return (
    <section id="section-3" className="py-24 lg:py-32 hero-gradient relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8">
              <Send className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-300">Contactez-nous</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
              Prêt à transformer votre{' '}
              <span className="block mt-2 bg-gradient-to-r from-blue-400 to-amber-400 bg-clip-text text-transparent">
                communication ?
              </span>
            </h2>
            <p className="text-lg text-gray-400 mb-10">
              Démarrez votre essai gratuit ou demandez une démo personnalisée.
            </p>

            <div className="space-y-5">
              {[
                { icon: Phone, label: '+33 1 23 45 67 89', sub: 'Lun-Ven, 8h-20h' },
                { icon: Mail, label: 'contact@ipnat.com', sub: 'Réponse sous 2h' },
                { icon: MapPin, label: 'Paris, France', sub: 'Tour Montparnasse, 33ème' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">{item.label}</div>
                    <div className="text-gray-500 text-sm">{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-10 shadow-2xl">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Message envoyé !</h3>
                <p className="text-gray-400">Nous vous recontacterons dans les plus brefs délais.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Nom complet</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-blue-500"
                      placeholder="Jean Dupont"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-blue-500"
                      placeholder="jean@entreprise.fr"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Téléphone</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-blue-500"
                      placeholder="+33 6 12 34 56 78"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Entreprise</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-blue-500"
                      placeholder="Nom de l'entreprise"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Votre message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-blue-500 resize-none"
                    placeholder="Décrivez votre projet ou vos besoins..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:from-blue-500 hover:to-blue-600 transition-all shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2"
                >
                  Envoyer le message
                  <Send className="w-5 h-5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTASection;