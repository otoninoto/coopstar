"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Loader2,
} from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "Telefone",
    value: "(11) 5052-3563 / 5051-4442",
    href: "tel:1150523563",
    ariaLabel: "Ligar para Coopstar Express",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "coopstar_express@hotmail.com",
    href: "mailto:coopstar_express@hotmail.com",
    ariaLabel: "Enviar e-mail para Coopstar Express",
  },
  {
    icon: MapPin,
    label: "Endereço",
    value: "Av. Juruçê, 898 — Moema, São Paulo - SP",
    href: "https://maps.google.com/?q=Av.+Juruçê,+898+Moema+São+Paulo+SP",
    ariaLabel: "Ver Coopstar Express no mapa",
  },
  {
    icon: Clock,
    label: "Horário",
    value: "24h por dia, 7 dias por semana",
    href: null,
    ariaLabel: undefined,
  },
];

import { submitContactForm } from "@/app/actions";

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [formStatus, setFormStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("submitting");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const result = await submitContactForm(formData);

    if (result.success) {
      setFormStatus("success");
    } else {
      setFormStatus("error");
      setErrorMessage(result.message || "Erro ao enviar.");
    }
  };

  return (
    <section
      id="contato"
      aria-labelledby="contact-heading"
      className="py-24 md:py-32 bg-slate-950 relative overflow-hidden"
    >
      <div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-20 left-1/4 w-96 h-96 bg-blue-600/8 rounded-full blur-3xl pointer-events-none"
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
            Fale Conosco
          </p>
          <h2 id="contact-heading" className="section-title">
            Pronto para acelerar{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              suas entregas?
            </span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Entre em contato agora. Nossa equipe responde rapidamente para
            montar a solução ideal para o seu negócio.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="grid lg:grid-cols-5 gap-10"
        >
          {/* Contact info */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {contactInfo.map(({ icon: Icon, label, value, href, ariaLabel }) => (
              <div
                key={label}
                className="glass-card p-5 flex items-start gap-4 hover:border-blue-500/30 transition-colors duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0 group-hover:bg-blue-500/20 transition-colors duration-300">
                  <Icon className="w-5 h-5 text-blue-400" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-0.5">
                    {label}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                      aria-label={ariaLabel}
                      className="text-slate-200 text-sm hover:text-amber-400 transition-colors duration-200 font-medium"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-slate-200 text-sm font-medium">{value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Map embed placeholder */}
            <div className="glass-card overflow-hidden rounded-2xl aspect-video">
              <iframe
                title="Localização Coopstar Express no Google Maps"
                src="https://maps.google.com/maps?q=Av.+Juruçê,+898,+Moema,+São+Paulo&output=embed"
                className="w-full h-full border-0 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                loading="lazy"
                sandbox="allow-scripts allow-same-origin"
              />
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-3">
            <div className="glass-card p-8 md:p-10">
              {formStatus === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center mb-5">
                    <CheckCircle2 className="w-8 h-8 text-emerald-400" aria-hidden="true" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Mensagem enviada!
                  </h3>
                  <p className="text-slate-400">
                    Obrigado pelo contato. Nossa equipe retornará em breve.
                  </p>
                  <button
                    onClick={() => {
                      setFormStatus("idle");
                    }}
                    className="mt-8 btn-outline text-sm"
                  >
                    Enviar outra mensagem
                  </button>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  aria-label="Formulário de contato Coopstar Express"
                >
                  <h3 className="text-xl font-bold text-white mb-6">
                    Envie uma mensagem
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label
                        htmlFor="contact-nome"
                        className="block text-sm font-medium text-slate-400 mb-2"
                      >
                        Nome <span className="text-red-400" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="contact-nome"
                        name="nome"
                        type="text"
                        required
                        autoComplete="name"
                        placeholder="Seu nome completo"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-blue-500/60 focus:bg-white/8 transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-sm font-medium text-slate-400 mb-2"
                      >
                        E-mail <span className="text-red-400" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        placeholder="seu@email.com"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-blue-500/60 focus:bg-white/8 transition-all duration-200"
                      />
                    </div>
                  </div>

                  <div className="mb-5">
                    <label
                      htmlFor="contact-assunto"
                      className="block text-sm font-medium text-slate-400 mb-2"
                    >
                      Assunto <span className="text-red-400" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="contact-assunto"
                      name="assunto"
                      type="text"
                      required
                      placeholder="Ex: Solicitar motoboy, orçamento delivery..."
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-blue-500/60 focus:bg-white/8 transition-all duration-200"
                    />
                  </div>

                  <div className="mb-7">
                    <label
                      htmlFor="contact-mensagem"
                      className="block text-sm font-medium text-slate-400 mb-2"
                    >
                      Mensagem <span className="text-red-400" aria-hidden="true">*</span>
                    </label>
                    <textarea
                      id="contact-mensagem"
                      name="mensagem"
                      required
                      rows={5}
                      placeholder="Descreva sua necessidade de entrega ou serviço..."
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-blue-500/60 focus:bg-white/8 transition-all duration-200 resize-none"
                    />
                  </div>

                  <button
                    id="contact-submit"
                    type="submit"
                    disabled={formStatus === "submitting"}
                    className="btn-primary w-full justify-center disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {formStatus === "submitting" ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" aria-hidden="true" />
                        Enviar Mensagem
                      </>
                    )}
                  </button>

                  <p className="mt-4 text-center text-xs text-slate-600">
                    Ou ligue diretamente:{" "}
                    <a
                      href="tel:1150523563"
                      className="text-amber-400 hover:text-amber-300 font-medium transition-colors"
                    >
                      (11) 5052-3563
                    </a>
                  </p>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
