import styles from './TransferHistory.module.css';

interface RecentTransfer {
  id: number;
  recipient: string;
  amount: number;
  date: string;
  status: 'completed' | 'pending' | 'failed';
  concept: string;
}

interface TransferHistoryProps {
  transfers: RecentTransfer[];
  onStatusUpdate?: (transferId: number, status: RecentTransfer['status']) => void;
}

export const TransferHistory = ({ transfers, onStatusUpdate }: TransferHistoryProps) => {
  const getStatusBadge = (status: string) => {
    const statusConfig = {
      completed: { color: '#059669', bg: '#d1fae5', text: 'Completada' },
      pending: { color: '#d97706', bg: '#fef3c7', text: 'Pendiente' },
      failed: { color: '#dc2626', bg: '#fecaca', text: 'Fallida' },
    };
    return statusConfig[status as keyof typeof statusConfig];
  };

  const handleRetry = (transferId: number) => {
    if (onStatusUpdate) {
      onStatusUpdate(transferId, 'pending');
      alert('Transfer reintentatado');
    }
  };

  return (
    <div className={styles.historyContainer}>
      <h2 className={styles.sectionTitle}>Transferencias Recientes</h2>
      {transfers.length === 0 ? (
        <div className={styles.emptyState}>
          <p>No hay transferencias recientes</p>
        </div>
      ) : (
        transfers.map((transfer) => {
          const statusBadge = getStatusBadge(transfer.status);
          return (
            <div key={transfer.id} className={styles.historyItem}>
              <div className={styles.historyInfo}>
                <div className={styles.historyRecipient}>
                  {transfer.recipient}
                </div>
                <div className={styles.historyConcept}>{transfer.concept}</div>
                <div className={styles.historyDate}>{transfer.date}</div>
              </div>
              <div className={styles.historyRight}>
                <div className={styles.historyAmount}>
                  S/ {transfer.amount.toLocaleString()}
                </div>
                <div className={styles.statusContainer}>
                  <span
                    className={styles.statusBadge}
                    style={{
                      color: statusBadge.color,
                      backgroundColor: statusBadge.bg,
                    }}
                  >
                    {statusBadge.text}
                  </span>
                  {transfer.status === 'failed' && onStatusUpdate && (
                    <button 
                      className={styles.retryButton}
                      onClick={() => handleRetry(transfer.id)}
                    >
                      Reintentar
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};