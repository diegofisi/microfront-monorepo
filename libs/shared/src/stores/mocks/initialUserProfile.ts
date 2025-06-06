import { UserProfile } from "../../types";

export const initialUserProfile: UserProfile = {
  personalInfo: {
    fullName: 'Diego Giancarlo Vicuña Huamán',
    email: 'diego.test@email.com',
    phone: '+51 999 999 999',
    dni: '12345678',
    birthDate: '1985-03-15',
    address: 'Av. Javier Prado 123, San Isidro, Lima',
  },
  bankingInfo: {
    customerSince: '2018-06-15',
    customerType: 'Premium',
    creditScore: 750,
    monthlyIncome: 8500,
  },
};