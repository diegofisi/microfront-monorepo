import styles from './ContactsList.module.css';

interface Contact {
  id: number;
  name: string;
  bank: string;
  accountNumber: string;
  accountType: string;
  avatar: string;
}

interface ContactsListProps {
  contacts: Contact[];
  onTransfer?: (contact: Contact) => void;
}

export const ContactsList = ({ contacts, onTransfer }: ContactsListProps) => {
  const handleQuickTransfer = (contact: Contact) => {
    if (onTransfer) {
      onTransfer(contact);
    } else {
      alert(`Transferir a ${contact.name}`);
    }
  };

  return (
    <div className={styles.contactsGrid}>
      {contacts.map((contact) => (
        <div key={contact.id} className={styles.contactCard}>
          <div className={styles.contactHeader}>
            <span className={styles.contactAvatar}>{contact.avatar}</span>
            <div className={styles.contactInfo}>
              <div className={styles.contactName}>{contact.name}</div>
              <div className={styles.contactBank}>{contact.bank}</div>
            </div>
          </div>
          <div className={styles.contactDetails}>
            <div className={styles.contactAccount}>
              {contact.accountType} - {contact.accountNumber}
            </div>
          </div>
          <button 
            className={styles.transferQuickButton}
            onClick={() => handleQuickTransfer(contact)}
          >
            Transferir
          </button>
        </div>
      ))}
    </div>
  );
};