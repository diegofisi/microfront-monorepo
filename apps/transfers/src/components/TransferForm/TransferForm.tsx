import { useState } from 'react';
import styles from './TransferForm.module.css';

interface UserAccount {
  id: string;
  name: string;
  number: string;
  balance: number;
}

interface TransferFormProps {
  userAccounts: UserAccount[];
  onTransfer?: (transferData: {
    recipient: string;
    amount: number;
    concept: string;
    fromAccount: string;
    toBank: string;
  }) => void;
}

export const TransferForm = ({
  userAccounts,
  onTransfer,
}: TransferFormProps) => {
  const [amount, setAmount] = useState('');
  const [concept, setConcept] = useState('');
  const [selectedAccount, setSelectedAccount] = useState('corriente');
  const [destinationAccount, setDestinationAccount] = useState('');
  const [selectedBank, setSelectedBank] = useState('Banco Central');

  const handleTransfer = () => {
    if (!amount || parseFloat(amount) <= 0) {
      alert('Por favor ingresa un monto válido');
      return;
    }

    if (!destinationAccount) {
      alert('Por favor ingresa el número de cuenta destino');
      return;
    }

    const selectedAccountData = userAccounts.find(
      (acc) => acc.id === selectedAccount
    );
    if (
      selectedAccountData &&
      parseFloat(amount) > selectedAccountData.balance
    ) {
      alert('Saldo insuficiente en la cuenta seleccionada');
      return;
    }

    if (onTransfer) {
      onTransfer({
        recipient: `${selectedBank} - ${destinationAccount}`,
        amount: parseFloat(amount),
        concept: concept || 'Transferencia',
        fromAccount: selectedAccount,
        toBank: selectedBank,
      });
    }

    setAmount('');
    setConcept('');
    setDestinationAccount('');
  };

  return (
    <div className={styles.grid}>
      <div className={styles.card}>
        <h2 className={styles.cardTitle}>💳 Cuenta de Origen</h2>
        {userAccounts.map((account) => (
          <div
            key={account.id}
            className={`${styles.accountOption} ${
              selectedAccount === account.id ? styles.accountSelected : ''
            }`}
            onClick={() => setSelectedAccount(account.id)}
          >
            <div className={styles.accountInfo}>
              <div className={styles.accountName}>{account.name}</div>
              <div className={styles.accountNumber}>{account.number}</div>
            </div>
            <div className={styles.accountBalance}>
              S/ {account.balance.toLocaleString()}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.card}>
        <h2 className={styles.cardTitle}>📤 Datos de Transferencia</h2>
        <div className={styles.formGroup}>
          <label className={styles.label}>Banco Destino:</label>
          <select
            className={styles.input}
            value={selectedBank}
            onChange={(e) => setSelectedBank(e.target.value)}
          >
            <option>Banco Central</option>
            <option>Banco Nacional</option>
            <option>Banco Empresarial</option>
            <option>Otros bancos</option>
          </select>
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Número de Cuenta:</label>
          <input
            type="text"
            className={styles.input}
            placeholder="Ingresa el número de cuenta"
            value={destinationAccount}
            onChange={(e) => setDestinationAccount(e.target.value)}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Monto (S/):</label>
          <input
            type="number"
            className={styles.input}
            placeholder="0.00"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Concepto:</label>
          <input
            type="text"
            className={styles.input}
            placeholder="Descripción de la transferencia"
            value={concept}
            onChange={(e) => setConcept(e.target.value)}
          />
        </div>
        <button className={styles.transferButton} onClick={handleTransfer}>
          Realizar Transferencia
        </button>
      </div>
    </div>
  );
};
