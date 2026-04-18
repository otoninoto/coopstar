"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bike, Menu, X, Phone } from "lucide-react";

const navLinks = [
  { href: "#sobre", label: "Sobre Nós" },
  { href: "#servicos", label: "Serviços" },
  { href: "#processo", label: "Como Funciona" },
  { href: "#faq", label: "FAQ" },
  { href: "#contato", label: "Contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks.map((l) => l.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.4 }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleLink = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-slate-900/80 backdrop-blur-xl shadow-lg shadow-black/30 border-b border-white/5"
            : "bg-transparent"
        }`}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a
              href="#hero"
              aria-label="Coopstar Express - Voltar ao topo"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="flex items-center gap-2.5 group"
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

            {/* Desktop Nav */}
            <nav
              className="hidden md:flex items-center gap-1"
              aria-label="Navegação principal"
            >
              {navLinks.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLink(href);
                  }}
                  aria-current={
                    activeSection === href.replace("#", "")
                      ? "page"
                      : undefined
                  }
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 group ${
                    activeSection === href.replace("#", "")
                      ? "text-amber-400"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  <span className="relative z-10">{label}</span>
                  <span
                    className={`absolute inset-0 rounded-lg bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200`}
                  />
                  {activeSection === href.replace("#", "") && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute bottom-1 left-4 right-4 h-0.5 bg-amber-400 rounded-full"
                    />
                  )}
                </a>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="tel:1150523563"
                className="flex items-center gap-2 text-sm text-slate-300 hover:text-amber-400 transition-colors duration-200"
                aria-label="Ligar para Coopstar Express"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                <span className="font-medium">(11) 5052-3563</span>
              </a>
              <a
                href="#contato"
                onClick={(e) => {
                  e.preventDefault();
                  handleLink("#contato");
                }}
                className="btn-primary text-sm py-2.5 px-5"
              >
                Solicite um Motoboy
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              id="mobile-menu-btn"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg text-slate-300 hover:bg-white/10 transition-colors duration-200"
            >
              <AnimatePresence mode="wait">
                {menuOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-5 h-5" aria-hidden="true" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-5 h-5" aria-hidden="true" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu de navegação"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-16 z-40 bg-slate-900/95 backdrop-blur-xl border-b border-white/10 md:hidden"
          >
            <nav className="flex flex-col px-4 py-6 gap-1">
              {navLinks.map(({ href, label }, i) => (
                <motion.a
                  key={href}
                  href={href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLink(href);
                  }}
                  className="flex items-center px-4 py-3 text-slate-200 font-medium rounded-xl hover:bg-white/10 hover:text-amber-400 transition-all duration-200"
                >
                  {label}
                </motion.a>
              ))}
              <div className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-3">
                <a
                  href="tel:1150523563"
                  className="flex items-center gap-2 px-4 py-3 text-amber-400 font-semibold"
                >
                  <Phone className="w-4 h-4" />
                  (11) 5052-3563
                </a>
                <a
                  href="#contato"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLink("#contato");
                  }}
                  className="btn-primary w-full justify-center"
                >
                  Solicite um Motoboy
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
