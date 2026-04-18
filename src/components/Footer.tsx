"use client";

import { motion } from "framer-motion";
import { Bike, Phone, Mail, MapPin, ArrowRight } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  const handleScroll = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const navLinks = [
    { href: "#sobre", label: "Sobre Nós" },
    { href: "#servicos", label: "Serviços" },
    { href: "#processo", label: "Como Funciona" },
    { href: "#faq", label: "FAQ" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <footer
      role="contentinfo"
      className="bg-slate-950 border-t border-white/5 pt-16 pb-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="flex items-center gap-2.5 mb-5 group w-fit"
              aria-label="Coopstar Express - Voltar ao topo"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Bike className="w-5 h-5 text-slate-900" aria-hidden="true" />
              </div>
              <div className="leading-tight">
                <span className="font-extrabold text-white text-lg tracking-tight">
                  Coopstar
                </span>
                <span className="block text-xs font-medium text-amber-400 tracking-widest uppercase">
                  Express
                </span>
              </div>
            </a>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Especialistas em motoboy, moto frete e delivery em São Paulo há
              mais de 9 anos. Agilidade e confiança para o seu negócio, 24h por
              dia.
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Links do rodapé">
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Navegação
            </h3>
            <ul className="space-y-3">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleScroll(href);
                    }}
                    className="text-slate-400 text-sm hover:text-amber-400 transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <ArrowRight
                      className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 -ml-1 transition-all duration-200"
                      aria-hidden="true"
                    />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Contato Direto
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:1150523563"
                  className="flex items-start gap-3 text-slate-400 text-sm hover:text-amber-400 transition-colors duration-200 group"
                  aria-label="Ligar para (11) 5052-3563"
                >
                  <Phone
                    className="w-4 h-4 mt-0.5 shrink-0 text-amber-400"
                    aria-hidden="true"
                  />
                  (11) 5052-3563 / 5051-4442
                </a>
              </li>
              <li>
                <a
                  href="mailto:coopstar_express@hotmail.com"
                  className="flex items-start gap-3 text-slate-400 text-sm hover:text-amber-400 transition-colors duration-200 group"
                  aria-label="Enviar e-mail para coopstar_express@hotmail.com"
                >
                  <Mail
                    className="w-4 h-4 mt-0.5 shrink-0 text-amber-400"
                    aria-hidden="true"
                  />
                  coopstar_express@hotmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=Av.+Juruçê,+898+Moema+São+Paulo+SP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-slate-400 text-sm hover:text-amber-400 transition-colors duration-200 group"
                  aria-label="Ver endereço no Google Maps"
                >
                  <MapPin
                    className="w-4 h-4 mt-0.5 shrink-0 text-amber-400"
                    aria-hidden="true"
                  />
                  Av. Juruçê, 898 — Moema, São Paulo - SP
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600"
        >
          <p>
            &copy; {year} Coopstar Express — Todos os direitos reservados.
          </p>
          <p className="text-slate-700">
            Moema, São Paulo — SP
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
