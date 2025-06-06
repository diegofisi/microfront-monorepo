import { Transaction } from "../../types";

export const initialTransactions: Transaction[] = [
  {
    id: 1,
    description: 'Transferencia recibida',
    amount: 500.0,
    date: '2025-06-03',
    type: 'credit',
  },
  {
    id: 2,
    description: 'Pago de servicios',
    amount: -120.0,
    date: '2025-06-02',
    type: 'debit',
  },
  {
    id: 3,
    description: 'Depósito ATM',
    amount: 300.0,
    date: '2025-06-01',
    type: 'credit',
  },
];