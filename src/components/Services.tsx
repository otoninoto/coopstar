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
      "Documentos e pequenos volumes entregues com prioridade máxima. Ideal para cartórios e urgências.",
    highlight: "Mais pedido",
    img: "https://images.unsplash.com/photo-1619441163451-309193158f33?q=80&w=2072&auto=format&fit=crop",
  },
  {
    id: "delivery",
    icon: ShoppingBag,
    title: "Delivery E-commerce",
    description:
      "Sua loja online com entrega no mesmo dia. Logística preparada para grandes volumes diários.",
    img: "https://images.unsplash.com/photo-1595246140625-573b715d11dc?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "servicos-banc",
    icon: Building2,
    title: "Serviços Bancários",
    description:
      "Confiança total para pagamentos, depósitos e protocolos em toda a rede bancária de SP.",
    img: "https://images.unsplash.com/photo-1556742049-3ad74acb99de?q=80&w=1974&auto=format&fit=crop",
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="servicos"
      className="py-24 bg-slate-950 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <p className="text-amber-500 font-bold text-sm uppercase tracking-widest mb-4">Especialidades</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">Soluções fáceis para <br /> <span className="text-blue-400">logística complexa</span></h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group relative h-[450px] rounded-3xl overflow-hidden border border-white/10"
            >
              <img 
                src={s.img} 
                className="absolute inset-0 w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" 
                alt={s.title} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                {s.highlight && (
                  <span className="w-fit bg-amber-500 text-slate-900 text-[10px] font-black uppercase px-3 py-1 rounded-full mb-4">
                    {s.highlight}
                  </span>
                )}
                <div className="w-12 h-12 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center mb-4 group-hover:bg-amber-500 group-hover:text-slate-900 transition-colors">
                  <s.icon size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{s.title}</h3>
                <p className="text-slate-400 text-sm mb-6 group-hover:text-slate-200 transition-colors">
                  {s.description}
                </p>
                <div className="flex items-center gap-2 text-white font-bold cursor-pointer group/link">
                  Saiba Mais <ArrowRight size={18} className="group-hover/link:translate-x-2 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Logo Wall / Types of business served */}
        <div className="mt-24 pt-16 border-t border-white/5">
          <p className="text-center text-slate-500 text-xs uppercase font-bold tracking-widest mb-10">Atendemos diversos setores em São Paulo</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
             <div className="flex items-center gap-2 text-white font-bold"><Zap size={20} /> TECNOLOGIA</div>
             <div className="flex items-center gap-2 text-white font-bold"><ShoppingBag size={20} /> VAREJO</div>
             <div className="flex items-center gap-2 text-white font-bold"><Building2 size={20} /> ADVOCACIA</div>
             <div className="flex items-center gap-2 text-white font-bold"><Plane size={20} /> AVIAÇÃO</div>
             <div className="flex items-center gap-2 text-white font-bold text-lg">E MAIS +</div>
          </div>
        </div>
      </div>
    </section>
  );
}
