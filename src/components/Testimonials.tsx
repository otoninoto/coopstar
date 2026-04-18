"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ricardo Santos",
    role: "Proprietário de Restaurante",
    content: "A Coopstar mudou a forma como entregamos. O delivery agora é pontual e os clientes estão muito mais satisfeitos.",
    stars: 5,
  },
  {
    name: "Clara Mendes",
    role: "Gerente Administrativa",
    content: "Excelente para serviços bancários e cartórios. Sempre que precisamos de urgência, eles nos atendem prontamente.",
    stars: 5,
  },
  {
    name: "Bruno Oliveira",
    role: "Logística E-commerce",
    content: "O sistema de rastreio e o atendimento 24h são diferenciais absurdos. Recomendo para qualquer empresa em SP.",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-slate-900 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-amber-500 font-bold text-sm uppercase tracking-widest mb-4">Depoimentos</p>
          <h2 className="text-4xl font-bold text-white">O que dizem nossos <span className="text-blue-400">clientes</span></h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 border-white/5 relative group hover:border-amber-500/20 transition-all"
            >
              <Quote className="absolute top-6 right-6 text-white/5 group-hover:text-amber-500/10 transition-colors" size={48} />
              
              <div className="flex gap-1 mb-4">
                {[...Array(t.stars)].map((_, idx) => (
                  <Star key={idx} size={16} className="fill-amber-500 text-amber-500" />
                ))}
              </div>

              <p className="text-slate-300 italic mb-6 leading-relaxed">"{t.content}"</p>
              
              <div>
                <p className="text-white font-bold">{t.name}</p>
                <p className="text-slate-500 text-xs uppercase font-bold tracking-wider">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
