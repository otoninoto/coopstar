"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    id: "q1",
    question: "Qual é o horário de atendimento da Coopstar Express?",
    answer:
      "Funcionamos 24 horas por dia, 7 dias por semana — de segunda a segunda. Realizamos atendimentos com hora marcada conforme agendamento, garantindo pontualidade e organização para você.",
  },
  {
    id: "q2",
    question: "Quais regiões de São Paulo vocês atendem?",
    answer:
      "Cobrimos toda a São Paulo Capital e a Grande São Paulo. Para cidades fora da capital, temos uma tabela de preços específica. Entre em contato para verificar se sua região está incluída.",
  },
  {
    id: "q3",
    question: "Que tipos de itens posso enviar com o moto frete?",
    answer:
      "Envios de documentos, pequenos volumes, encomendas para serviços bancários e cartoriais, retiradas em aeroportos e muito mais. Caso tenha dúvidas sobre algum item específico, consulte nossa equipe.",
  },
  {
    id: "q4",
    question: "Como funciona o serviço de delivery para empresas?",
    answer:
      "Implantamos na sua empresa um sistema de delivery com motoboys dedicados ou sob demanda. Atendemos farmácias, pizzarias, restaurantes, auto peças e outros estabelecimentos que precisam de entregas frequentes.",
  },
  {
    id: "q5",
    question: "Como faço para solicitar um motoboy agora?",
    answer:
      "Você pode ligar diretamente para (11) 5052-3563 / 5051-4442, enviar um e-mail para coopstar_express@hotmail.com ou preencher o formulário de contato nesta página. Nossa equipe entra em contato imediatamente.",
  },
  {
    id: "q6",
    question: "Vocês oferecem contrato mensal ou somente serviços avulsos?",
    answer:
      "Oferecemos as duas modalidades. Para empresas com volume recorrente de entregas, montamos um plano personalizado com preços especiais. Para demandas pontuais, atendemos por corrida avulsa.",
  },
];

function FAQItem({ item, index }: { item: (typeof faqs)[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className="glass-card overflow-hidden hover:border-white/15 transition-colors duration-300"
    >
      <button
        id={`faq-btn-${item.id}`}
        aria-expanded={open}
        aria-controls={`faq-panel-${item.id}`}
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left group cursor-pointer"
      >
        <span className="font-semibold text-white text-base group-hover:text-amber-400 transition-colors duration-200">
          {item.question}
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0 text-slate-400"
          aria-hidden="true"
        >
          <ChevronDown className="w-5 h-5" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`faq-panel-${item.id}`}
            role="region"
            aria-labelledby={`faq-btn-${item.id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5">
              <div className="h-px bg-white/5 mb-4" />
              <p className="text-slate-400 leading-relaxed text-sm">{item.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="py-24 md:py-32 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0a1520 0%, #0D1B2A 100%)" }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-amber-400 font-semibold text-sm uppercase tracking-widest mb-4">
            Dúvidas Frequentes
          </p>
          <h2 id="faq-heading" className="section-title">
            Tudo que você precisa{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
              saber
            </span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Respondemos as perguntas mais comuns sobre nossos serviços. Não
            encontrou o que procura? Entre em contato!
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((item, index) => (
            <FAQItem key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
