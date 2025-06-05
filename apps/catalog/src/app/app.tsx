import '../styles.css';

interface BankProduct {
  name: string;
  description: string;
  benefits: string[];
  icon: string;
  minAmount?: number;
  maxAmount?: number;
  coverage?: number | string;
}

interface ProductCategory {
  category: string;
  items: BankProduct[];
}

export function App() {
  const bankProducts: ProductCategory[] = [
    {
      category: 'Cuentas',
      items: [
        {
          name: 'Cuenta Corriente Plus',
          description: 'Cuenta con beneficios exclusivos para profesionales',
          benefits: [
            'Sin comisión de mantenimiento',
            'Transferencias ilimitadas',
            'Tarjeta de débito premium',
          ],
          minAmount: 500,
          icon: '💳',
        },
        {
          name: 'Cuenta de Ahorros Digital',
          description:
            'Ahorra de manera inteligente con nuestra cuenta 100% digital',
          benefits: ['3.5% TEA', 'Sin comisiones', 'App móvil incluida'],
          minAmount: 100,
          icon: '💰',
        },
        {
          name: 'Cuenta CTS',
          description: 'Protege tu compensación por tiempo de servicios',
          benefits: [
            'Mayor rentabilidad',
            'Fondo de garantía',
            'Retiro parcial libre',
          ],
          minAmount: 0,
          icon: '🏦',
        },
      ],
    },
    {
      category: 'Créditos',
      items: [
        {
          name: 'Préstamo Personal Express',
          description: 'Dinero rápido para tus proyectos personales',
          benefits: [
            'Aprobación en 24 horas',
            'TEA desde 18%',
            'Hasta 48 meses de plazo',
          ],
          maxAmount: 100000,
          icon: '🚀',
        },
        {
          name: 'Tarjeta de Crédito Platinum',
          description: 'La tarjeta ideal para tu estilo de vida',
          benefits: [
            'Línea hasta S/ 50,000',
            'Millas por compras',
            'Seguro de viaje incluido',
          ],
          maxAmount: 50000,
          icon: '💎',
        },
        {
          name: 'Crédito Hipotecario',
          description: 'Haz realidad el sueño de tu casa propia',
          benefits: [
            'TEA desde 8.5%',
            'Hasta 30 años de plazo',
            'Financiamiento hasta 90%',
          ],
          maxAmount: 500000,
          icon: '🏠',
        },
      ],
    },
    {
      category: 'Seguros',
      items: [
        {
          name: 'Seguro de Vida Familiar',
          description: 'Protección integral para toda tu familia',
          benefits: [
            'Cobertura hasta S/ 200,000',
            'Prima desde S/ 80/mes',
            'Asistencia médica 24/7',
          ],
          coverage: 200000,
          icon: '👨‍👩‍👧‍👦',
        },
        {
          name: 'Seguro Vehicular',
          description: 'Protege tu vehículo contra todo riesgo',
          benefits: [
            'Cobertura todo riesgo',
            'Asistencia en carretera',
            'Auto de reemplazo',
          ],
          coverage: 'Variable',
          icon: '🚗',
        },
        {
          name: 'Seguro de Salud',
          description: 'Cuida tu salud y la de tu familia',
          benefits: [
            'Red médica nacional',
            'Emergencias cubiertas',
            'Medicinas incluidas',
          ],
          coverage: 'Ilimitada',
          icon: '🏥',
        },
      ],
    },
  ];

  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'system-ui, -apple-system, sans-serif',
    },
    header: {
      backgroundColor: '#059669',
      color: 'white',
      padding: '40px',
      borderRadius: '12px',
      marginBottom: '40px',
      textAlign: 'center' as const,
    },
    title: {
      fontSize: '32px',
      fontWeight: 'bold',
      marginBottom: '10px',
    },
    subtitle: {
      fontSize: '18px',
      opacity: 0.9,
    },
    categorySection: {
      marginBottom: '40px',
    },
    categoryTitle: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#1f2937',
      marginBottom: '20px',
      paddingBottom: '10px',
      borderBottom: '3px solid #f3f4f6',
    },
    productsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '20px',
    },
    productCard: {
      backgroundColor: 'white',
      border: '1px solid #e5e7eb',
      borderRadius: '12px',
      padding: '25px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
    },
    productCardHover: {
      transform: 'translateY(-2px)',
      boxShadow: '0 8px 15px rgba(0, 0, 0, 0.15)',
    },
    productHeader: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '15px',
    },
    productIcon: {
      fontSize: '32px',
      marginRight: '15px',
    },
    productName: {
      fontSize: '20px',
      fontWeight: 'bold',
      color: '#1f2937',
    },
    productDescription: {
      color: '#6b7280',
      marginBottom: '15px',
      lineHeight: 1.5,
    },
    benefitsList: {
      marginBottom: '20px',
    },
    benefitsTitle: {
      fontSize: '16px',
      fontWeight: 'bold',
      color: '#374151',
      marginBottom: '10px',
    },
    benefit: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '5px',
      fontSize: '14px',
      color: '#4b5563',
    },
    benefitIcon: {
      color: '#059669',
      marginRight: '8px',
      fontWeight: 'bold',
    },
    productFooter: {
      borderTop: '1px solid #f3f4f6',
      paddingTop: '15px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    amount: {
      fontSize: '16px',
      fontWeight: 'bold',
      color: '#059669',
    },
    applyButton: {
      backgroundColor: '#059669',
      color: 'white',
      border: 'none',
      padding: '10px 20px',
      borderRadius: '6px',
      fontWeight: 'bold',
      cursor: 'pointer',
      transition: 'background-color 0.2s',
    },
    applyButtonHover: {
      backgroundColor: '#047857',
    },
  };

  const handleApply = (productName: string) => {
    alert(
      `¡Gracias por tu interés en ${productName}! Un asesor se pondrá en contacto contigo.`
    );
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>🏪 Catálogo de Productos Bancarios</h1>
        <p style={styles.subtitle}>
          Descubre los mejores productos financieros para ti
        </p>
      </div>

      {bankProducts.map((category, categoryIndex) => (
        <div key={categoryIndex} style={styles.categorySection}>
          <h2 style={styles.categoryTitle}>{category.category}</h2>
          <div style={styles.productsGrid}>
            {category.items.map((product, productIndex) => (
              <div
                key={productIndex}
                style={styles.productCard}
                onMouseEnter={(e) => {
                  Object.assign(e.currentTarget.style, styles.productCardHover);
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow =
                    '0 4px 6px rgba(0, 0, 0, 0.1)';
                }}
              >
                <div style={styles.productHeader}>
                  <span style={styles.productIcon}>{product.icon}</span>
                  <h3 style={styles.productName}>{product.name}</h3>
                </div>

                <p style={styles.productDescription}>{product.description}</p>

                <div style={styles.benefitsList}>
                  <div style={styles.benefitsTitle}>Beneficios:</div>
                  {product.benefits.map((benefit, index) => (
                    <div key={index} style={styles.benefit}>
                      <span style={styles.benefitIcon}>✓</span>
                      {benefit}
                    </div>
                  ))}
                </div>

                <div style={styles.productFooter}>
                  <div style={styles.amount}>
                    {product.minAmount !== undefined &&
                      `Desde S/ ${product.minAmount.toLocaleString()}`}
                    {product.maxAmount !== undefined &&
                      `Hasta S/ ${product.maxAmount.toLocaleString()}`}
                    {product.coverage &&
                      `Cobertura: ${
                        typeof product.coverage === 'number'
                          ? `S/ ${product.coverage.toLocaleString()}`
                          : product.coverage
                      }`}
                  </div>
                  <button
                    style={styles.applyButton}
                    onClick={() => handleApply(product.name)}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#047857';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#059669';
                    }}
                  >
                    Solicitar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
