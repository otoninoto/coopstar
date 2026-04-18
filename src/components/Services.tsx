"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Zap,
  ShoppingBag,
  MapPin,
  Building2,
  Package,
  Plane,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    id: "motofrete",
    icon: Zap,
    title: "Moto Frete Expresso",
    description:
      "Entregas rápidas de documentos e pequenos volumes por toda a cidade. Rapidez e segurança garantidas em cada corrida.",
    highlight: "Mais popular",
    color: "amber",
  },
  {
    id: "delivery",
    icon: ShoppingBag,
    title: "Delivery para Empresas",
    description:
      "Seu negócio tem grande volume de pedidos? Implantamos um sistema de delivery completo com o melhor custo-benefício para Farmácias, Pizzarias, Restaurantes e Auto Peças.",
    highlight: null,
    color: "blue",
  },
  {
    id: "servicos-banc",
    icon: Building2,
    title: "Serviços Bancários e Cartoriais",
    description:
      "Motoboy dedicado para depósitos, retiradas, reconhecimento de firma, protocolos e outros serviços bancários ou cartoriais com agilidade.",
    highlight: null,
    color: "blue",
  },
  {
    id: "aeroporto",
    icon: Plane,
    title: "Retiradas em Aeroporto",
    description:
      "Coleta e entrega de encomendas e documentos diretamente nos aeroportos de São Paulo, com pontualidade e rastreamento.",
    highlight: null,
    color: "blue",
  },
  {
    id: "fora-capital",
    icon: MapPin,
    title: "Fora da Capital",
    description:
      "Serviços especializados para cidades da Grande São Paulo. Consulte nossa tabela de preços para regiões além da capital.",
    highlight: null,
    color: "blue",
  },
  {
    id: "coleta",
    icon: Package,
    title: "Coletas Programadas",
    description:
      "Agende coletas recorrentes para sua empresa e otimize o processo logístico com horários definidos e compromisso garantido.",
    highlight: null,
    color: "blue",
  },
];

const colorMap = {
  amber: {
    icon: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
    hoverBorder: "hover:border-amber-500/40",
    badge: "bg-amber-500/20 text-amber-300 border border-amber-500/30",
    arrow: "text-amber-400",
  },
  blue: {
    icon: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    hoverBorder: "hover:border-blue-500/40",
    badge: "",
    arrow: "text-blue-400",
  },
};

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="servicos"
      aria-labelledby="services-heading"
      className="py-24 md:py-32 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0D1B2A 0%, #0a1520 100%)" }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-amber-400 font-semibold text-sm uppercase tracking-widest mb-4">
            O Que Oferecemos
          </p>
          <h2 id="services-heading" className="section-title">
            Soluções de entrega para{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
              cada necessidade
            </span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Do documento urgente à rota diária de delivery — cuidamos de toda a
            sua logística enquanto você foca no que importa.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map(({ id, icon: Icon, title, description, highlight, color }) => {
            const c = colorMap[color as keyof typeof colorMap];
            return (
              <motion.article
                key={id}
                id={`service-${id}`}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: "easeOut" },
                  },
                }}
                className={`relative glass-card p-7 ${c.hoverBorder} transition-all duration-300 service-card group flex flex-col`}
              >
                {highlight && (
                  <span className={`absolute top-5 right-5 text-xs font-bold px-2.5 py-1 rounded-full ${c.badge}`}>
                    {highlight}
                  </span>
                )}

                <div
                  className={`w-12 h-12 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className={`w-6 h-6 ${c.icon}`} aria-hidden="true" />
                </div>

                <h3 className="text-lg font-bold text-white mb-3 leading-snug">
                  {title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed flex-1">
                  {description}
                </p>

                <div className={`mt-5 flex items-center gap-1 text-xs font-semibold ${c.arrow} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                  Saiba mais
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-14 text-center"
        >
          <p className="text-slate-400 mb-6">
            Precisa de um serviço personalizado?{" "}
            <strong className="text-white">Fale com a nossa equipe.</strong>
          </p>
          <a href="#contato" id="services-cta" className="btn-primary">
            Solicitar Orçamento Gratuito
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
