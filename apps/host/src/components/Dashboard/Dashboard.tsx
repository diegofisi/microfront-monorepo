import { WelcomeCard } from '@banco/shared';
import { useBankStore } from '@banco/shared';
import styles from './dashboard.module.css';

export const Dashboard = () => {
  const userProfile = useBankStore((state) => state.userProfile);
  const accounts = useBankStore((state) => state.accounts);
  const userProducts = useBankStore((state) => state.userProducts);
  const recentTransactions = useBankStore((state) => state.recentTransactions);

  const primaryAccount = accounts.find(acc => acc.type === 'Cuenta Corriente');
  const totalBalance = accounts
    .filter(acc => acc.currency === 'PEN')
    .reduce((sum, acc) => sum + acc.balance, 0);

  const user = {
    name: userProfile.personalInfo.fullName.split(' ')[0] + ' ' + userProfile.personalInfo.fullName.split(' ')[2],
    accountNumber: primaryAccount?.number || '****0000',
    balance: totalBalance,
  };

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
          <div className={styles.statValue}>{userProducts.length}</div>
        </div>
      </div>

      <div className={styles.transactionsSection}>
        <h2 className={styles.sectionTitle}>Movimientos Recientes</h2>
        {recentTransactions.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '20px', color: '#6b7280' }}>
            No hay transacciones recientes
          </div>
        ) : (
          recentTransactions.map((transaction) => (
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
          ))
        )}
      </div>
    </div>
  );
};