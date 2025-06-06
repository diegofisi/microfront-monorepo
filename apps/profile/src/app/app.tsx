import '../styles.css';
import { useBankStore } from '@banco/shared';

const styles = {
  container: {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'system-ui, -apple-system, sans-serif',
  },
  header: {
    backgroundColor: '#6366f1',
    color: 'white',
    padding: '30px',
    borderRadius: '12px',
    marginBottom: '30px',
    textAlign: 'center' as const,
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
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
    marginBottom: '30px',
  },
  card: {
    backgroundColor: 'white',
    padding: '25px',
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    border: '1px solid #e5e7eb',
  },
  cardTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: '15px',
    borderBottom: '2px solid #f3f4f6',
    paddingBottom: '8px',
  },
  infoRow: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '12px',
    padding: '8px 0',
  },
  label: {
    color: '#6b7280',
    fontWeight: '500',
  },
  value: {
    color: '#1f2937',
    fontWeight: '600',
  },
  accountItem: {
    backgroundColor: '#f8fafc',
    padding: '15px',
    borderRadius: '8px',
    marginBottom: '12px',
    border: '1px solid #e2e8f0',
  },
  accountType: {
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: '5px',
  },
  accountDetails: {
    fontSize: '14px',
    color: '#6b7280',
  },
  balance: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#059669',
    marginTop: '8px',
  },
  productItem: {
    backgroundColor: '#fef7ff',
    padding: '15px',
    borderRadius: '8px',
    marginBottom: '12px',
    border: '1px solid #f3e8ff',
  },
  productName: {
    fontWeight: 'bold',
    color: '#7c3aed',
    marginBottom: '8px',
  },
  productDetails: {
    fontSize: '14px',
    color: '#6b7280',
  },
  badge: {
    display: 'inline-block',
    backgroundColor: '#fef3c7',
    color: '#92400e',
    padding: '4px 12px',
    borderRadius: '12px',
    fontSize: '12px',
    fontWeight: 'bold',
  },
};

export function App() {
  const userProfile = useBankStore((state) => state.userProfile);
  const accounts = useBankStore((state) => state.accounts);
  const userProducts = useBankStore((state) => state.userProducts);

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Mi Perfil Bancario</h1>
        <p style={styles.subtitle}>
          Información personal y productos financieros
        </p>
        <div style={styles.badge}>
          Cliente {userProfile.bankingInfo.customerType}
        </div>
      </div>

      <div style={styles.grid}>
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>📋 Información Personal</h2>
          <div style={styles.infoRow}>
            <span style={styles.label}>Nombre Completo:</span>
            <span style={styles.value}>
              {userProfile.personalInfo.fullName}
            </span>
          </div>
          <div style={styles.infoRow}>
            <span style={styles.label}>Email:</span>
            <span style={styles.value}>{userProfile.personalInfo.email}</span>
          </div>
          <div style={styles.infoRow}>
            <span style={styles.label}>Teléfono:</span>
            <span style={styles.value}>{userProfile.personalInfo.phone}</span>
          </div>
          <div style={styles.infoRow}>
            <span style={styles.label}>DNI:</span>
            <span style={styles.value}>{userProfile.personalInfo.dni}</span>
          </div>
          <div style={styles.infoRow}>
            <span style={styles.label}>Fecha de Nacimiento:</span>
            <span style={styles.value}>
              {userProfile.personalInfo.birthDate}
            </span>
          </div>
          <div style={styles.infoRow}>
            <span style={styles.label}>Dirección:</span>
            <span style={styles.value}>{userProfile.personalInfo.address}</span>
          </div>
        </div>

        {/* Información Bancaria */}
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>🏦 Información Bancaria</h2>
          <div style={styles.infoRow}>
            <span style={styles.label}>Cliente desde:</span>
            <span style={styles.value}>
              {userProfile.bankingInfo.customerSince}
            </span>
          </div>
          <div style={styles.infoRow}>
            <span style={styles.label}>Tipo de Cliente:</span>
            <span style={styles.value}>
              {userProfile.bankingInfo.customerType}
            </span>
          </div>
          <div style={styles.infoRow}>
            <span style={styles.label}>Score Crediticio:</span>
            <span style={styles.value}>
              {userProfile.bankingInfo.creditScore}/850
            </span>
          </div>
          <div style={styles.infoRow}>
            <span style={styles.label}>Ingresos Mensuales:</span>
            <span style={styles.value}>
              S/ {userProfile.bankingInfo.monthlyIncome.toLocaleString()}
            </span>
          </div>
        </div>
      </div>

      {/* Cuentas */}
      <div style={styles.card}>
        <h2 style={styles.cardTitle}>💳 Mis Cuentas</h2>
        {accounts.map((account, index) => (
          <div key={index} style={styles.accountItem}>
            <div style={styles.accountType}>{account.type}</div>
            <div style={styles.accountDetails}>Número: {account.number}</div>
            <div style={styles.balance}>
              {account.currency === 'USD' ? '$' : 'S/'}{' '}
              {account.balance.toLocaleString()}
            </div>
          </div>
        ))}
      </div>

      {/* Productos */}
      <div style={styles.card}>
        <h2 style={styles.cardTitle}>🛍️ Mis Productos</h2>
        {userProducts.map((product, index) => (
          <div key={index} style={styles.productItem}>
            <div style={styles.productName}>{product.name}</div>
            <div style={styles.productDetails}>
              {product.limit &&
                `Límite: S/ ${product.limit.toLocaleString()} | Usado: S/ ${product.used?.toLocaleString()}`}
              {product.amount &&
                `Monto: S/ ${product.amount.toLocaleString()} | Por pagar: S/ ${product.remaining?.toLocaleString()}`}
              {product.coverage &&
                `Cobertura: S/ ${product.coverage.toLocaleString()} | Prima: S/ ${
                  product.premium
                }/mes`}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
