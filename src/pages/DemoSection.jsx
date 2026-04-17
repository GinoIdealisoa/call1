import React, { useState } from 'react';
import { Calendar, Clock, Users, Send, CheckCircle } from 'lucide-react';

function DemoSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
    needType: '',
    agentsCount: '',
    demoDate: '',
    demoTime: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulation d'envoi
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);

      // Reset après succès
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          firstName: '', lastName: '', company: '', email: '', phone: '',
          needType: '', agentsCount: '', demoDate: '', demoTime: '', message: ''
        });
      }, 4500);
    }, 1800);
  };

  return (
    <section id="section-4" className="py-18 pb-28 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-blue-50 border border-blue-100 rounded-full mb-6">
            <Calendar className="w-6 h-6 text-blue-600" />
            <span className="font-semibold text-blue-700">Réservez votre démo gratuite</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            Découvrez IPNAT en action
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Planifiez une démonstration personnalisée avec nos experts. 
            Nous adapterons la session à vos besoins exacts.
          </p>
        </div>

        <div className="bg-white border border-gray-100 shadow-2xl rounded-3xl p-8 lg:p-12">
          {submitted ? (
            <div className="text-center py-20">
              <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle className="w-16 h-16 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-3">Demande envoyée avec succès !</h3>
              <p className="text-gray-600 text-lg max-w-md mx-auto">
                Merci ! Nous vous contacterons très rapidement pour confirmer la date et l'heure de votre démonstration.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Nom & Prénom */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Prénom <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3.5 border border-gray-300 rounded-2xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                    placeholder="Jean"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nom <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3.5 border border-gray-300 rounded-2xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                    placeholder="Dupont"
                  />
                </div>
              </div>

              {/* Entreprise & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Entreprise <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3.5 border border-gray-300 rounded-2xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                    placeholder="Ma Société SARL"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email professionnel <span className="text-red-500">*</span></label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3.5 border border-gray-300 rounded-2xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                    placeholder="jean.dupont@entreprise.fr"
                  />
                </div>
              </div>

              {/* Téléphone & Nombre d'agents */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Téléphone <span className="text-red-500">*</span></label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3.5 border border-gray-300 rounded-2xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                    placeholder="+33 6 12 34 56 78"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre d'agents nécessaire <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    name="agentsCount"
                    value={formData.agentsCount}
                    onChange={handleChange}
                    required
                    min="1"
                    className="w-full px-5 py-3.5 border border-gray-300 rounded-2xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                    placeholder="15"
                  />
                </div>
              </div>

              {/* Type de besoin */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Type de besoin <span className="text-red-500">*</span>
                </label>
                <select
                  name="needType"
                  value={formData.needType}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-3.5 border border-gray-300 rounded-2xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none bg-white"
                >
                  <option value="">Sélectionnez votre besoin principal</option>
                  <option value="call-center-outbound">Centre d’appels sortant</option>
                  <option value="call-center-inbound">Centre d’appels entrant</option>
                  <option value="whatsapp">Messagerie / WhatsApp Business</option>
                  <option value="voip">Solutions VoIP / Téléphonie cloud</option>
                  <option value="crm">Intégration CRM + Téléphonie</option>
                  <option value="other">Autre besoin</option>
                </select>
              </div>

              {/* Date et heure souhaitée pour la démo */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                    <Calendar className="w-4 h-4" /> Date souhaitée pour la démo <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    name="demoDate"
                    value={formData.demoDate}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3.5 border border-gray-300 rounded-2xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                    <Clock className="w-4 h-4" /> Heure souhaitée <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="time"
                    name="demoTime"
                    value={formData.demoTime}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3.5 border border-gray-300 rounded-2xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                  />
                </div>
              </div>

              {/* Message / Besoins spécifiques */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message / Besoins spécifiques
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-5 py-4 border border-gray-300 rounded-3xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none resize-y"
                  placeholder="Décrivez vos besoins, vos objectifs, les outils que vous utilisez actuellement, etc."
                ></textarea>
              </div>

              {/* Bouton */}
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
                  Reserve le demo gratuit 
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

              <p className="text-center text-xs text-gray-500">
                Nous respectons votre temps. La démo dure environ 30 à 45 minutes.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default DemoSection;