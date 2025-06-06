import { WelcomeCard } from '@banco/shared';
import styles from './dashboard.module.css';

export const Dashboard = () => {
  const user = {
    name: 'Diego Vicuña',
    accountNumber: '****1234',
    balance: 15750.5,
  };

  const recentTransactions = [
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

  return (
    <div className={styles.container}>
      <WelcomeCard userName={user.name} />

      <div className={styles.welcomeSection}>
        <h1 className={styles.title}>¡Bienvenido, {user.name}!</h1>
        <p className={styles.subtitle}>
          Gestiona tus finanzas de manera inteligente
        </p>
      </div>

      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={styles.statTitle}>Saldo Disponible</div>
          <div className={styles.statValue}>S/ {user.balance.toLocaleString()}</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statTitle}>Cuenta Principal</div>
          <div className={styles.statValue}>{user.accountNumber}</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statTitle}>Productos Activos</div>
          <div className={styles.statValue}>3</div>
        </div>
      </div>

      <div className={styles.transactionsSection}>
        <h2 className={styles.sectionTitle}>Movimientos Recientes</h2>
        {recentTransactions.map((transaction) => (
          <div key={transaction.id} className={styles.transaction}>
            <div className={styles.transactionInfo}>
              <div className={styles.transactionDesc}>
                {transaction.description}
              </div>
              <div className={styles.transactionDate}>{transaction.date}</div>
            </div>
            <div
              className={`${styles.transactionAmount} ${
                transaction.type === 'credit' ? styles.credit : styles.debit
              }`}
            >
              {transaction.type === 'credit' ? '+' : ''}S/{' '}
              {Math.abs(transaction.amount).toLocaleString()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};