"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, FileText, Truck, CheckCircle } from "lucide-react";

const steps = [
  {
    id: 1,
    icon: Phone,
    title: "Entre em Contato",
    description:
      "Ligue, envie uma mensagem ou preencha o formulário. Nossa equipe responde rapidamente para entender sua necessidade.",
    color: "from-amber-400 to-orange-500",
  },
  {
    id: 2,
    icon: FileText,
    title: "Faça seu Cadastro",
    description:
      "Processo rápido e sem burocracia. Cadastre sua empresa e defina a frequência e tipo de serviço que melhor atende ao seu negócio.",
    color: "from-blue-400 to-cyan-500",
  },
  {
    id: 3,
    icon: Truck,
    title: "Motoboy a Caminho",
    description:
      "Nosso motoboy é despachado imediatamente ou no horário agendado, com pontualidade e responsabilidade garantidas.",
    color: "from-purple-400 to-blue-500",
  },
  {
    id: 4,
    icon: CheckCircle,
    title: "Entrega Confirmada",
    description:
      "Receba a confirmação da entrega e mantenha seu negócio fluindo sem preocupações logísticas.",
    color: "from-emerald-400 to-teal-500",
  },
];

export default function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="processo"
      aria-labelledby="process-heading"
      className="py-24 md:py-32 bg-slate-950 relative overflow-hidden"
    >
      <div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-1/3 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-amber-400 font-semibold text-sm uppercase tracking-widest mb-4">
            Como Funciona
          </p>
          <h2 id="process-heading" className="section-title">
            Em{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              4 passos simples
            </span>{" "}
            sua entrega está garantida
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Processo transparente e descomplicado — do primeiro contato até a
            confirmação de entrega.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {steps.map((step) => (
            <motion.div
              key={step.id}
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.95 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.5, ease: "easeOut" },
                },
              }}
              className="relative glass-card p-7 group hover:border-white/20 transition-all duration-300"
            >
              {/* Step number */}
              <div className="absolute -top-3 -left-3">
                <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-black text-sm shadow-lg`}>
                  {step.id}
                </div>
              </div>

              {/* Connector line (desktop) */}
              {step.id < steps.length && (
                <div
                  className="hidden lg:block absolute top-10 -right-3 w-6 h-px bg-gradient-to-r from-white/20 to-transparent z-10"
                  aria-hidden="true"
                />
              )}

              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} bg-opacity-10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                style={{ background: "rgba(255,255,255,0.05)" }}
              >
                <step.icon
                  className={`w-7 h-7 bg-clip-text`}
                  style={{
                    filter: "drop-shadow(0 0 8px rgba(96,165,250,0.5))",
                    color: "#60A5FA",
                  }}
                  aria-hidden="true"
                />
              </div>

              <h3 className="text-base font-bold text-white mb-2 leading-snug">
                {step.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
