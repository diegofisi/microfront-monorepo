import styles from './shared.module.css';

export function WelcomeCard({ userName }: { userName: string }) {
  return (
    <div className={styles['welcome-card']}>
      <h2 className={styles['card-title']}>BANCO TEST - {userName}</h2>
    </div>
  );
}
