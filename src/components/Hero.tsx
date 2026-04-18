"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock, MapPin, Shield } from "lucide-react";

const badges = [
  { icon: Clock, text: "24h por dia, 7 dias" },
  { icon: MapPin, text: "SP Capital e Grande SP" },
  { icon: Shield, text: "+9 anos de experiência" },
];

export default function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient"
    >
      {/* Grid pattern background */}
      <div className="absolute inset-0 grid-pattern opacity-40" aria-hidden="true" />

      {/* Floating orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-amber-500/8 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-sm font-semibold mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
            </span>
            Disponível agora · São Paulo
          </motion.div>

          {/* Heading */}
          <motion.h1
            id="hero-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white leading-[1.05] tracking-tight"
          >
            Entregas que{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
              não param
            </span>{" "}
            <br className="hidden sm:block" />
            enquanto o seu{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              negócio cresce
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed"
          >
            A Coopstar Express é especialista em motoboy, moto frete e delivery
            em São Paulo há mais de 9 anos. Agilidade e confiança para a sua
            empresa — 24 horas, todos os dias.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              id="hero-cta-primary"
              href="#contato"
              onClick={(e) => {
                e.preventDefault();
                handleScroll("#contato");
              }}
              className="btn-primary text-base relative"
            >
              Solicitar Motoboy Agora
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </a>
            <a
              id="hero-cta-secondary"
              href="#servicos"
              onClick={(e) => {
                e.preventDefault();
                handleScroll("#servicos");
              }}
              className="btn-outline text-base"
            >
              Ver Nossos Serviços
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-14 flex flex-wrap justify-center gap-4"
          >
            {badges.map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-2.5 px-5 py-2.5 glass-card text-slate-300 text-sm font-medium"
              >
                <Icon className="w-4 h-4 text-amber-400 shrink-0" aria-hidden="true" />
                {text}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 text-xs"
          aria-hidden="true"
        >
          <span>Role para baixo</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-5 h-8 border-2 border-slate-600 rounded-full flex justify-center pt-1.5"
          >
            <div className="w-1 h-2 bg-amber-400 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
