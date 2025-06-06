import { Transfer } from "../../types";

export const initialTransfers: Transfer[] = [
  {
    id: 1,
    recipient: 'María González',
    amount: 500.0,
    date: '2025-06-05',
    status: 'completed',
    concept: 'Pago de servicios',
  },
  {
    id: 2,
    recipient: 'Carlos Rodríguez',
    amount: 1200.0,
    date: '2025-06-04',
    status: 'completed',
    concept: 'Transferencia familiar',
  },
  {
    id: 3,
    recipient: 'Ana Silva',
    amount: 300.0,
    date: '2025-06-03',
    status: 'pending',
    concept: 'Pago compartido',
  },
  {
    id: 4,
    recipient: 'Luis Pérez',
    amount: 800.0,
    date: '2025-06-02',
    status: 'completed',
    concept: 'Reembolso',
  },
  {
    id: 5,
    recipient: 'Tienda Online',
    amount: 250.0,
    date: '2025-06-01',
    status: 'failed',
    concept: 'Compra online',
  },
];