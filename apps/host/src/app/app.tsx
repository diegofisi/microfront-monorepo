import * as React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { WelcomeCard } from '../../../../libs/shared/src/lib/shared';
 
const Profile = React.lazy(() => import('profile/Module'));
const Catalog = React.lazy(() => import('catalog/Module'));

const Dashboard = () => {
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

  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'system-ui, -apple-system, sans-serif',
    },
    welcomeSection: {
      backgroundColor: '#1e40af',
      color: 'white',
      padding: '30px',
      borderRadius: '12px',
      marginBottom: '30px',
    },
    title: {
      fontSize: '28px',
      fontWeight: 'bold',
      marginBottom: '10px',
    },
    subtitle: {
      fontSize: '16px',
      opacity: 0.9,
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '20px',
      marginBottom: '30px',
    },
    statCard: {
      backgroundColor: 'white',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      border: '1px solid #e5e7eb',
    },
    statTitle: {
      fontSize: '14px',
      color: '#6b7280',
      marginBottom: '8px',
      fontWeight: '500',
    },
    statValue: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#1f2937',
    },
    transactionsSection: {
      backgroundColor: 'white',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      border: '1px solid #e5e7eb',
    },
    sectionTitle: {
      fontSize: '18px',
      fontWeight: 'bold',
      marginBottom: '15px',
      color: '#1f2937',
    },
    transaction: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '12px 0',
      borderBottom: '1px solid #f3f4f6',
    },
    transactionInfo: {
      flex: 1,
    },
    transactionDesc: {
      fontWeight: '500',
      color: '#1f2937',
    },
    transactionDate: {
      fontSize: '14px',
      color: '#6b7280',
    },
    transactionAmount: {
      fontWeight: 'bold',
      fontSize: '16px',
    },
    credit: {
      color: '#059669',
    },
    debit: {
      color: '#dc2626',
    },
  };

  return (
    <div style={styles.container}>
      <WelcomeCard userName={user.name} />
      
      <div style={styles.welcomeSection}>
        <h1 style={styles.title}>¡Bienvenido, {user.name}!</h1>
        <p style={styles.subtitle}>
          Gestiona tus finanzas de manera inteligente
        </p>
      </div>

      <div style={styles.statsGrid}>
        <div style={styles.statCard}>
          <div style={styles.statTitle}>Saldo Disponible</div>
          <div style={styles.statValue}>S/ {user.balance.toLocaleString()}</div>
        </div>
        <div style={styles.statCard}>
          <div style={styles.statTitle}>Cuenta Principal</div>
          <div style={styles.statValue}>{user.accountNumber}</div>
        </div>
        <div style={styles.statCard}>
          <div style={styles.statTitle}>Productos Activos</div>
          <div style={styles.statValue}>3</div>
        </div>
      </div>

      <div style={styles.transactionsSection}>
        <h2 style={styles.sectionTitle}>Movimientos Recientes</h2>
        {recentTransactions.map((transaction) => (
          <div key={transaction.id} style={styles.transaction}>
            <div style={styles.transactionInfo}>
              <div style={styles.transactionDesc}>
                {transaction.description}
              </div>
              <div style={styles.transactionDate}>{transaction.date}</div>
            </div>
            <div
              style={{
                ...styles.transactionAmount,
                ...(transaction.type === 'credit'
                  ? styles.credit
                  : styles.debit),
              }}
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

export function App() {
  const navStyles = {
    nav: {
      backgroundColor: '#f8fafc',
      padding: '15px 0',
      borderBottom: '1px solid #e2e8f0',
      marginBottom: '20px',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px',
    },
    ul: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      gap: '30px',
    },
    link: {
      textDecoration: 'none',
      color: '#374151',
      fontWeight: '500',
      padding: '8px 16px',
      borderRadius: '6px',
      transition: 'all 0.2s',
    },
    linkHover: {
      backgroundColor: '#e5e7eb',
      color: '#1f2937',
    },
  };

  return (
    <React.Suspense
      fallback={
        <div style={{ textAlign: 'center', padding: '50px' }}>Cargando...</div>
      }
    >
      <nav style={navStyles.nav}>
        <div style={navStyles.container}>
          <ul style={navStyles.ul}>
            <li>
              <Link to="/" style={navStyles.link}>
                🏠 Dashboard
              </Link>
            </li>
            <li>
              <Link to="/profile" style={navStyles.link}>
                👤 Mi Perfil
              </Link>
            </li>
            <li>
              <Link to="/catalog" style={navStyles.link}>
                🏪 Catálogo
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/catalog" element={<Catalog />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;