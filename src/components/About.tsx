"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2, TrendingUp, Users, Clock } from "lucide-react";

const stats = [
  { value: "9+", label: "Anos no mercado", icon: TrendingUp },
  { value: "24h", label: "Atendimento contínuo", icon: Clock },
  { value: "100%", label: "Focados no resultado", icon: CheckCircle2 },
  { value: "SP", label: "Capital e Grande SP", icon: Users },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="sobre"
      aria-labelledby="about-heading"
      className="py-24 md:py-32 bg-slate-950 relative overflow-hidden"
    >
      {/* Decorative element */}
      <div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute -top-40 right-0 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Text content */}
          <div>
            <motion.p
              variants={itemVariants}
              className="text-amber-400 font-semibold text-sm uppercase tracking-widest mb-4"
            >
              Quem Somos
            </motion.p>

            <motion.h2
              id="about-heading"
              variants={itemVariants}
              className="section-title leading-tight"
            >
              Mais de 9 anos levando agilidade{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                para o seu negócio
              </span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="mt-6 text-slate-400 leading-relaxed text-base md:text-lg"
            >
              A Coopstar Express é especializada no serviço de entregas e coletas
              em São Paulo. Com uma equipe treinada e comprometida, nos tornamos
              uma empresa referência no segmento — agilizando os mais diversos
              processos logísticos dos nossos clientes.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="mt-4 text-slate-400 leading-relaxed text-base md:text-lg"
            >
              Atendemos São Paulo Capital e Grande SP com dedicação absoluta.
              Funcionamos{" "}
              <strong className="text-white">24 horas, de segunda a
              segunda</strong>, com agendamento com hora marcada. Faça seu
              cadastro e garanta um parceiro logístico de confiança.
            </motion.p>

            <motion.div variants={itemVariants} className="mt-8">
              <ul className="space-y-3">
                {[
                  "Equipe especializada e treinada",
                  "Atendimento personalizado para cada cliente",
                  "Serviços bancários, cartoriais e de aeroporto",
                  "Cadastro rápido e sem burocracia",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-300">
                    <CheckCircle2
                      className="w-5 h-5 text-amber-400 mt-0.5 shrink-0"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-10">
              <a
                id="about-cta"
                href="#contato"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#contato")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-primary"
              >
                Faça seu Cadastro
              </a>
            </motion.div>
          </div>

          {/* Stats grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map(({ value, label, icon: Icon }) => (
              <motion.div
                key={label}
                variants={itemVariants}
                className="glass-card p-6 md:p-8 group hover:border-blue-500/30 transition-all duration-300 service-card"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors duration-300">
                  <Icon
                    className="w-6 h-6 text-blue-400"
                    aria-hidden="true"
                  />
                </div>
                <p className="text-4xl font-extrabold text-white tabular-nums">
                  {value}
                </p>
                <p className="mt-1 text-sm text-slate-400 font-medium">
                  {label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
