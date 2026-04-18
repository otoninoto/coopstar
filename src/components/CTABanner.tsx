"use client";

import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";

export default function CTABanner() {
  return (
    <section
      aria-label="Chamada para ação — solicitar motoboy"
      className="relative py-20 overflow-hidden"
    >
      {/* Gradient background */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-blue-700 via-blue-800 to-slate-900"
        aria-hidden="true"
      />

      {/* Pattern overlay */}
      <div
        className="absolute inset-0 grid-pattern opacity-20"
        aria-hidden="true"
      />

      {/* Glow orbs */}
      <div
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 right-1/4 -translate-y-1/2 w-72 h-72 bg-blue-400/15 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-blue-300 font-semibold text-sm uppercase tracking-widest mb-4">
            Disponível 24h, todos os dias
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Seu motoboy está a um{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-400">
              contato de distância
            </span>
          </h2>

          <p className="mt-5 text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Não perca mais tempo com atrasos de entrega. Fale agora com nossa
            equipe e comece hoje mesmo a otimizar a logística da sua empresa.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              id="cta-banner-phone"
              href="tel:1150523563"
              className="inline-flex items-center justify-center gap-2.5 bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-amber-400/30 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:ring-offset-2 focus:ring-offset-blue-800"
              aria-label="Ligar agora para (11) 5052-3563"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              Ligar Agora
            </a>
            <a
              id="cta-banner-form"
              href="#contato"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#contato")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center justify-center gap-2.5 border-2 border-white/30 text-white hover:bg-white/10 font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-blue-800"
            >
              Enviar Mensagem
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
