import { NextResponse } from "next/server";

// Simulação de banco de dados de encomendas
const ordersDatabase = {
  "CP-123": {
    status: "Em rota de entrega",
    location: "Moema, SP",
    updatedAt: new Date().toISOString(),
    driver: "Marcos Silva",
  },
  "CP-456": {
    status: "Coleta realizada",
    location: "Centro, SP",
    updatedAt: new Date().toISOString(),
    driver: "Ana Souza",
  },
  "CP-789": {
    status: "Entregue",
    location: "Itaim Bibi, SP",
    updatedAt: new Date().toISOString(),
    driver: "Carlos Lima",
  },
};

export async function GET(
  request: Request,
  context: { params: { code: string } | Promise<{ code: string }> }
) {
  const { code } = await context.params;
  
  // Simular delay do banco de dados
  await new Promise((resolve) => setTimeout(resolve, 800));

  const order = ordersDatabase[code as keyof typeof ordersDatabase];

  if (order) {
    return NextResponse.json({ success: true, data: order });
  }

  return NextResponse.json(
    { success: false, message: "Código de rastreio não encontrado." },
    { status: 404 }
  );
}
