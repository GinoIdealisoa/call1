import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulation d'envoi (remplace par ton API réelle plus tard)
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      
      // Reset du formulaire après 4 secondes
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: '', email: '', phone: '', company: '', subject: '', message: ''
        });
      }, 4000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-950 to-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
            <Mail className="w-5 h-5 text-blue-400" />
            <span className="text-blue-300 font-medium">Contactez IPNAT</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Parlons de votre projet
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Vous souhaitez une démo, un devis ou simplement poser une question ? 
            Notre équipe vous répond dans les plus brefs délais.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10">
          {/* Informations de contact */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-8">Nos coordonnées</h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Téléphone</p>
                    <a href="tel:+33123456789" className="text-blue-400 hover:text-blue-300 transition-colors">
                      +33 1 23 45 67 89
                    </a>
                    <p className="text-sm text-gray-500 mt-1">Lundi - Vendredi : 8h - 20h</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <a href="mailto:contact@ipnat.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                      contact@ipnat.com
                    </a>
                    <p className="text-sm text-gray-500 mt-1">Réponse sous 2 heures</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Adresse</p>
                    <p className="text-gray-300">Tour Montparnasse, 33ème étage<br />75015 Paris, France</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Horaires d'ouverture</p>
                    <p className="text-gray-300">Lundi au Vendredi : 8h00 - 20h00<br />Samedi : 9h00 - 17h00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Carte ou infos supplémentaires */}
            <div className="bg-gradient-to-br from-blue-600/10 to-transparent border border-blue-500/20 rounded-3xl p-8">
              <h4 className="text-blue-300 font-semibold mb-3">Pourquoi nous choisir ?</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  Réponse sous 2 heures en semaine
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  Démo gratuite et sans engagement
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  Accompagnement personnalisé
                </li>
              </ul>
            </div>
          </div>

          {/* Formulaire de contact */}
          <div className="lg:col-span-7">
            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 lg:p-10 shadow-2xl">
              {submitted ? (
                <div className="text-center py-16">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-500/20 flex items-center justify-center">
                    <CheckCircle className="w-12 h-12 text-green-400" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-3">Merci pour votre message !</h3>
                  <p className="text-gray-400 max-w-md mx-auto">
                    Nous avons bien reçu votre demande. Un expert IPNAT vous contactera très rapidement.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Nom complet *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-3.5 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                        placeholder="Jean Dupont"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Email professionnel *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-3.5 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                        placeholder="jean@entreprise.fr"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Téléphone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-5 py-3.5 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                        placeholder="+33 6 12 34 56 78"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Entreprise</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-5 py-3.5 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                        placeholder="Nom de votre société"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Sujet de votre demande</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-5 py-3.5 bg-white/5 border border-white/10 rounded-2xl text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                    >
                      <option value="" className="bg-brand-950">Choisissez un sujet</option>
                      <option value="demo">Demander une démonstration</option>
                      <option value="devis">Obtenir un devis</option>
                      <option value="partenariat">Partenariat</option>
                      <option value="support">Support technique</option>
                      <option value="autre">Autre demande</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Votre message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-3xl text-white placeholder-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none resize-y transition-all"
                      placeholder="Décrivez votre besoin, le nombre d'agents, vos objectifs..."
                    ></textarea>
                  </div>
                  <button
                type="submit"
                disabled={loading}
                className={`w-full border border-blue-600 py-3 rounded-xl flex items-center justify-center gap-2 transition
                ${
                  loading
                    ? "bg-blue-600 text-white cursor-not-allowed"
                    : "text-blue-600 hover:bg-blue-600 hover:text-white"
                }`}
              >
                {loading ? (
                  <>
                    <svg
                      className="w-5 h-5 animate-spin"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      />
                    </svg>
                    Envoi...
                  </>
                ) : (
                  <>
                  Envoyer le messages
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
                  <p className="text-center text-xs text-gray-500">
                    Vos données sont protégées et ne seront jamais partagées.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;