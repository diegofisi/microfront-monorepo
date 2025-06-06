// stores/bankStore.ts
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { BankAccount, Contact, ProductCategory, Transaction, Transfer, UserProduct, UserProfile } from '../types';
import { initialAccounts, initialBankProducts, initialContacts, initialTransactions, initialTransfers, initialUserProducts, initialUserProfile } from './mocks';

interface BankState {
  userProfile: UserProfile;
  accounts: BankAccount[];
  userProducts: UserProduct[];
  
  recentTransactions: Transaction[];
  recentTransfers: Transfer[];
  favoriteContacts: Contact[];
  
  bankProductsCatalog: ProductCategory[];
  
  updateUserProfile: (profile: Partial<UserProfile>) => void;
  addAccount: (account: BankAccount) => void;
  updateAccountBalance: (accountId: string, newBalance: number) => void;
  addTransaction: (transaction: Omit<Transaction, 'id'>) => void;
  addTransfer: (transfer: Omit<Transfer, 'id'>) => void;
  addContact: (contact: Omit<Contact, 'id'>) => void;
  removeContact: (contactId: number) => void;
  updateTransferStatus: (transferId: number, status: Transfer['status']) => void;
}

export const useBankStore = create<BankState>()(
  devtools(
    persist(
      (set) => ({
        userProfile: initialUserProfile,
        accounts: initialAccounts,
        userProducts: initialUserProducts,
        recentTransactions: initialTransactions,
        recentTransfers: initialTransfers,
        favoriteContacts: initialContacts,
        bankProductsCatalog: initialBankProducts,

        // Actions
        updateUserProfile: (profile) =>
          set((state) => ({
            userProfile: {
              ...state.userProfile,
              ...profile,
              personalInfo: {
                ...state.userProfile.personalInfo,
                ...(profile.personalInfo || {}),
              },
              bankingInfo: {
                ...state.userProfile.bankingInfo,
                ...(profile.bankingInfo || {}),
              },
            },
          })),

        addAccount: (account) =>
          set((state) => ({
            accounts: [...state.accounts, account],
          })),

        updateAccountBalance: (accountId, newBalance) =>
          set((state) => ({
            accounts: state.accounts.map((account) =>
              account.id === accountId
                ? { ...account, balance: newBalance }
                : account
            ),
          })),

        addTransaction: (transaction) =>
          set((state) => {
            const newId = Math.max(...state.recentTransactions.map(t => t.id), 0) + 1;
            return {
              recentTransactions: [
                { ...transaction, id: newId },
                ...state.recentTransactions,
              ].slice(0, 10),
            };
          }),

        addTransfer: (transfer) =>
          set((state) => {
            const newId = Math.max(...state.recentTransfers.map(t => t.id), 0) + 1;
            return {
              recentTransfers: [
                { ...transfer, id: newId },
                ...state.recentTransfers,
              ].slice(0, 20),
            };
          }),

        addContact: (contact) =>
          set((state) => {
            const newId = Math.max(...state.favoriteContacts.map(c => c.id), 0) + 1;
            return {
              favoriteContacts: [...state.favoriteContacts, { ...contact, id: newId }],
            };
          }),

        removeContact: (contactId) =>
          set((state) => ({
            favoriteContacts: state.favoriteContacts.filter(
              (contact) => contact.id !== contactId
            ),
          })),

        updateTransferStatus: (transferId, status) =>
          set((state) => ({
            recentTransfers: state.recentTransfers.map((transfer) =>
              transfer.id === transferId ? { ...transfer, status } : transfer
            ),
          })),
      }),
      {
        name: 'bank-storage',
        partialize: (state) => ({
          userProfile: state.userProfile,
          accounts: state.accounts,
          userProducts: state.userProducts,
          recentTransactions: state.recentTransactions,
          recentTransfers: state.recentTransfers,
          favoriteContacts: state.favoriteContacts,
        }),
      }
    ),
    {
      name: 'bank-store',
    }
  )
);

export const useBankSelectors = () => {
  const store = useBankStore();
  
  return {
    ...store,
    totalBalance: store.accounts
      .filter(acc => acc.currency === 'PEN')
      .reduce((sum, acc) => sum + acc.balance, 0),
    
    primaryAccount: store.accounts.find(acc => acc.type === 'Cuenta Corriente'),
    
    activeProductsCount: store.userProducts.length,
    
    pendingTransfersCount: store.recentTransfers.filter(
      t => t.status === 'pending'
    ).length,
    
    getAccountById: (id: string) => store.accounts.find(acc => acc.id === id),    
    getContactById: (id: number) => store.favoriteContacts.find(c => c.id === id),
  };
};