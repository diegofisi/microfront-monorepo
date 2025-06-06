import { BankAccount } from "../../types";

export const initialAccounts: BankAccount[] = [
  {
    id: 'corriente',
    type: 'Cuenta Corriente',
    number: '****1234',
    balance: 15750.5,
    currency: 'PEN',
  },
  {
    id: 'ahorros',
    type: 'Cuenta de Ahorros',
    number: '****5678',
    balance: 2300.0,
    currency: 'USD',
  },
  {
    id: 'cts',
    type: 'Cuenta CTS',
    number: '****9012',
    balance: 12400.0,
    currency: 'PEN',
  },
];
