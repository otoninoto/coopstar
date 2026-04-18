"use server";

import { z } from "zod";
import fs from "fs/promises";
import path from "path";

const contactSchema = z.object({
  nome: z.string().min(2, "Nome é obrigatório"),
  email: z.string().email("E-mail inválido"),
  assunto: z.string().min(3, "Assunto é obrigatório"),
  mensagem: z.string().min(10, "A mensagem deve ter pelo menos 10 caracteres"),
});

export async function submitContactForm(formData: FormData) {
  // Simular delay de rede
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const rawData = {
    nome: formData.get("nome"),
    email: formData.get("email"),
    assunto: formData.get("assunto"),
    mensagem: formData.get("mensagem"),
  };

  const validatedData = contactSchema.safeParse(rawData);

  if (!validatedData.success) {
    return {
      success: false,
      errors: validatedData.error.flatten().fieldErrors,
    };
  }

  try {
    // Backend Funcional: Salvar o lead em um arquivo local (simulando banco de dados)
    const logPath = path.join(process.cwd(), "leads.json");
    let leads = [];

    try {
      const existingData = await fs.readFile(logPath, "utf-8");
      leads = JSON.parse(existingData);
    } catch {
      leads = [];
    }

    const newLead = {
      ...validatedData.data,
      id: Date.now(),
      timestamp: new Date().toISOString(),
    };

    leads.push(newLead);
    await fs.writeFile(logPath, JSON.stringify(leads, null, 2));

    console.log("Novo lead recebido:", newLead);

    // Aqui poderíamos integrar com Resend, SendGrid ou Nodemailer:
    // await sendEmail(validatedData.data);

    return {
      success: true,
      message: "Mensagem enviada com sucesso! Nossa equipe entrará em contato.",
    };
  } catch (error) {
    console.error("Erro no backend:", error);
    return {
      success: false,
      message: "Ocorreu um erro interno. Tente novamente mais tarde.",
    };
  }
}
