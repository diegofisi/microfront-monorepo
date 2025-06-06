import styles from './TabNavigation.module.css';

interface TabNavigationProps {
  selectedTab: 'new' | 'contacts' | 'history';
  onTabChange: (tab: 'new' | 'contacts' | 'history') => void;
}

export const TabNavigation = ({ selectedTab, onTabChange }: TabNavigationProps) => {
  return (
    <div className={styles.tabsContainer}>
      <button
        className={`${styles.tab} ${selectedTab === 'new' ? styles.tabActive : ''}`}
        onClick={() => onTabChange('new')}
      >
        Nueva Transferencia
      </button>
      <button
        className={`${styles.tab} ${selectedTab === 'contacts' ? styles.tabActive : ''}`}
        onClick={() => onTabChange('contacts')}
      >
        Contactos Favoritos
      </button>
      <button
        className={`${styles.tab} ${selectedTab === 'history' ? styles.tabActive : ''}`}
        onClick={() => onTabChange('history')}
      >
        Historial
      </button>
    </div>
  );
};