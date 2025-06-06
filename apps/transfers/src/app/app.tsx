// transfers/Module.tsx - Con actualización de balance
import { useState } from 'react';
import { TabNavigation } from '../components/TabNavigation/TabNavigation';
import { TransferForm } from '../components/TransferForm/TransferForm';
import { ContactsList } from '../components/ContactsList/ContactsList';
import { TransferHistory } from '../components/TransferHistory/TransferHistory';
import { useBankStore } from '@banco/shared';
import '../styles.css';

interface Contact {
  id: number;
  name: string;
  bank: string;
  accountNumber: string;
  accountType: string;
  avatar: string;
}

export function App() {
  const [selectedTab, setSelectedTab] = useState<
    'new' | 'contacts' | 'history'
  >('new');

  const accounts = useBankStore((state) => state.accounts);
  const favoriteContacts = useBankStore((state) => state.favoriteContacts);
  const recentTransfers = useBankStore((state) => state.recentTransfers);
  const addTransfer = useBankStore((state) => state.addTransfer);
  const addTransaction = useBankStore((state) => state.addTransaction);
  const updateAccountBalance = useBankStore((state) => state.updateAccountBalance);
  const updateTransferStatus = useBankStore((state) => state.updateTransferStatus);

  const userAccounts = accounts.map(account => ({
    id: account.id,
    name: account.type,
    number: account.number,
    balance: account.balance,
  }));

  const handleContactTransfer = (contact: Contact) => {
    setSelectedTab('new');
    alert(`Transferir a ${contact.name} - ${contact.accountNumber}`);
  };

  const handleNewTransfer = (transferData: {
    recipient: string;
    amount: number;
    concept: string;
    fromAccount: string;
    toBank: string;
  }) => {
    // 1. Buscar la cuenta origen
    const fromAccountData = accounts.find(acc => acc.id === transferData.fromAccount);
    
    if (!fromAccountData) {
      alert('Cuenta origen no encontrada');
      return;
    }

    // 2. Verificar saldo suficiente
    if (fromAccountData.balance < transferData.amount) {
      alert('Saldo insuficiente');
      return;
    }

    // 3. Actualizar balance de la cuenta origen
    const newBalance = fromAccountData.balance - transferData.amount;
    updateAccountBalance(transferData.fromAccount, newBalance);

    // 4. Agregar transferencia al historial
    addTransfer({
      recipient: transferData.recipient,
      amount: transferData.amount,
      concept: transferData.concept,
      date: new Date().toISOString().split('T')[0],
      status: 'completed', // Cambié a 'completed' para que se vea exitosa
    });

    // 5. Agregar transacción al historial
    addTransaction({
      description: `Transferencia a ${transferData.recipient}`,
      amount: -transferData.amount, // Negativo porque es salida de dinero
      date: new Date().toISOString().split('T')[0],
      type: 'debit',
    });
    
    alert(`Transferencia de S/ ${transferData.amount.toLocaleString()} completada exitosamente`);
  };

  return (
    <div className="transfers-container">
      {/* Header */}
      <div className="transfers-header">
        <h1 className="transfers-title">💸 Transferencias</h1>
        <p className="transfers-subtitle">Envía dinero de forma rápida y segura</p>
      </div>

      {/* Tab Navigation */}
      <TabNavigation selectedTab={selectedTab} onTabChange={setSelectedTab} />

      {/* Content based on selected tab */}
      {selectedTab === 'new' && (
        <TransferForm 
          userAccounts={userAccounts}
          onTransfer={handleNewTransfer}
        />
      )}

      {selectedTab === 'contacts' && (
        <ContactsList
          contacts={favoriteContacts}
          onTransfer={handleContactTransfer}
        />
      )}

      {selectedTab === 'history' && (
        <TransferHistory 
          transfers={recentTransfers}
          onStatusUpdate={updateTransferStatus}
        />
      )}
    </div>
  );
}

export default App;