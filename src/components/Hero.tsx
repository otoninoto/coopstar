"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock, MapPin, Shield, Search, PackageCheck } from "lucide-react";
import { useState } from "react";

const badges = [
  { icon: Clock, text: "24h por dia, 7 dias" },
  { icon: MapPin, text: "SP Capital e Grande SP" },
  { icon: Shield, text: "+9 anos de experiência" },
];

export default function Hero() {
  const [trackingCode, setTrackingCode] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const simulateTracking = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingCode) return;
    setIsSearching(true);
    
    try {
      const response = await fetch(`/api/tracking/${trackingCode}`);
      const result = await response.json();
      
      if (result.success) {
        alert(`Status: ${result.data.status}\nLocal: ${result.data.location}\nMotorista: ${result.data.driver}`);
      } else {
        alert(result.message || "Erro ao buscar rastreio.");
      }
    } catch (error) {
      alert("Ocorreu um erro ao conectar com o servidor.");
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1558981403-c5f91cbba527?q=80&w=2070&auto=format&fit=crop" 
          alt="Moto em alta velocidade em São Paulo" 
          className="w-full h-full object-cover opacity-20 grayscale brightness-50"
        />
        <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px]"></div>
      </div>

      <div className="absolute inset-0 grid-pattern opacity-40 z-0" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40 grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-left">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-sm font-semibold mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
            </span>
            Operação 24h Disponível em São Paulo
          </motion.div>

          {/* Heading */}
          <motion.h1
            id="hero-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white leading-tight tracking-tight"
          >
            Logística Inteligente{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
              sobre duas rodas
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-slate-300 max-w-xl leading-relaxed"
          >
            A Coopstar Express é sua parceira estratégica para entregas ultra-rápidas, 
            e-commerce e serviços bancários. Agilidade real com a experiência de quem conhece SP.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contato"
              onClick={(e) => { e.preventDefault(); handleScroll("#contato"); }}
              className="btn-primary text-base"
            >
              Solicitar Motoboy
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </a>
            <a
              href="#servicos"
              onClick={(e) => { e.preventDefault(); handleScroll("#servicos"); }}
              className="btn-outline text-base"
            >
              Serviços Corporativos
            </a>
          </motion.div>
        </div>

        {/* Tracking Utility Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="glass-card p-8 border-white/20 shadow-2xl relative overflow-hidden group"
        >
           <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:rotate-12 transition-transform">
              <PackageCheck size={80} className="text-amber-400" />
           </div>
           
           <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
             <Search size={24} className="text-amber-400" />
             Rastreio Rápido
           </h3>
           <p className="text-slate-400 mb-6 text-sm">
             Acompanhe sua entrega em tempo real inserindo o código do seu pedido abaixo.
           </p>

           <form onSubmit={simulateTracking} className="space-y-4">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Ex: CP-123456"
                  value={trackingCode}
                  onChange={(e) => setTrackingCode(e.target.value.toUpperCase())}
                  className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:border-amber-500/50 outline-none transition-all"
                />
              </div>
              <button 
                type="submit"
                disabled={isSearching}
                className="w-full bg-white/10 hover:bg-white/15 border border-white/10 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 group"
              >
                {isSearching ? (
                  <motion.div 
                    animate={{ rotate: 360 }} 
                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                  >
                    <Search size={20} />
                  </motion.div>
                ) : (
                  <>Consultar Status <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" /></>
                )}
              </button>
           </form>

           <div className="mt-8 pt-8 border-t border-white/5 flex items-center justify-between">
              <div>
                <p className="text-slate-500 text-xs uppercase font-bold tracking-tighter">Status Geral SP</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                  <span className="text-white text-sm font-semibold">Fluxo Normal</span>
                </div>
              </div>
              <div>
                <p className="text-slate-500 text-xs uppercase font-bold tracking-tighter text-right">Média Transito</p>
                <p className="text-white text-sm font-semibold text-right">Pequeno (+8min)</p>
              </div>
           </div>
        </motion.div>
      </div>

      {/* Trust badges */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="absolute bottom-12 left-0 right-0 flex flex-wrap justify-center gap-4 px-4"
      >
        {badges.map(({ icon: Icon, text }) => (
          <div
            key={text}
            className="flex items-center gap-2.5 px-6 py-3 glass-card text-slate-300 text-sm font-medium border-white/5"
          >
            <Icon className="w-4 h-4 text-amber-500 shrink-0" aria-hidden="true" />
            {text}
          </div>
        ))}
      </motion.div>
    </section>
  );
}
