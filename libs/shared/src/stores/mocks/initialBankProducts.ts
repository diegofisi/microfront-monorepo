import { ProductCategory } from "../../types";

export const initialBankProducts: ProductCategory[] = [
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
        description: 'Ahorra de manera inteligente con nuestra cuenta 100% digital',
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