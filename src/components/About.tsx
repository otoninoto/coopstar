"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2, TrendingUp, Users, Clock, Award } from "lucide-react";

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
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as any } },
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-20 items-center"
        >
          {/* Visual Elements with Image */}
          <motion.div variants={itemVariants} className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-amber-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
            
            <div className="relative glass-card rounded-3xl overflow-hidden border-white/10 aspect-square md:aspect-video lg:aspect-square">
               <img 
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop" 
                alt="Equipe Coopstar Express em escritório moderno" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
               
               {/* Floating Badge */}
               <div className="absolute bottom-6 left-6 right-6 p-6 glass-card border-white/20 flex items-center gap-4">
                  <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-slate-900 shadow-lg shadow-amber-500/20">
                    <Award size={24} />
                  </div>
                  <div>
                    <p className="text-white font-bold">Referência em SP</p>
                    <p className="text-slate-400 text-xs uppercase tracking-widest font-bold">Qualidade Certificada</p>
                  </div>
               </div>
            </div>

            {/* Experience Stats Card Overlay */}
            <motion.div 
               animate={{ y: [0, -10, 0] }}
               transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" as any }}
               className="absolute -top-10 -right-6 hidden xl:flex glass-card p-6 border-blue-500/30 shadow-2xl items-center gap-5"
            >
               <div className="text-right">
                  <p className="text-3xl font-black text-white">99.8%</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase">Entregas no Prazo</p>
               </div>
               <div className="w-px h-10 bg-white/10"></div>
               <TrendingUp className="text-emerald-400" size={32} />
            </motion.div>
          </motion.div>

          {/* Text content */}
          <div>
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-4">
              <span className="w-12 h-[2px] bg-amber-500"></span>
              <p className="text-amber-500 font-bold text-sm uppercase tracking-widest">
                Compromisso & Qualidade
              </p>
            </motion.div>

            <motion.h2
              id="about-heading"
              variants={itemVariants}
              className="section-title leading-tight mb-8"
            >
              Mais de 9 anos conectando <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-amber-400">
                Pessoas e Empresas.
              </span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-slate-400 leading-relaxed text-base md:text-lg mb-6"
            >
              A **Coopstar Express** nasceu da necessidade de um serviço logístico que entendesse o ritmo frenético de São Paulo. Não somos apenas motoboys; somos a extensão do seu negócio nas ruas.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-slate-400 leading-relaxed text-base md:text-lg mb-10"
            >
              Nossa operação roda **24 horas**, com uma frota monitorada e profissionais treinados para lidar desde documentos confidenciais até logística reversa complexa.
            </motion.p>

            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-8 mb-12">
               {stats.slice(0, 4).map(({ value, label, icon: Icon }) => (
                  <div key={label} className="flex gap-4">
                    <Icon className="text-amber-500 shrink-0" size={24} />
                    <div>
                      <h4 className="text-white font-bold text-lg">{value}</h4>
                      <p className="text-slate-500 text-xs font-medium">{label}</p>
                    </div>
                  </div>
               ))}
            </motion.div>

            <motion.div variants={itemVariants}>
              <a
                href="#contato"
                className="btn-primary"
              >
                Conheça Nossa Estrutura
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
