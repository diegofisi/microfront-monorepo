import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Dashboard } from '../components/Dashboard/Dashboard';
import { Navbar } from '../components/Navbar/Navbar';

const Profile = React.lazy(() => import('profile/Module'));
const Catalog = React.lazy(() => import('catalog/Module'));
const Transfers = React.lazy(() => import('transfers/Module'));

export function App() {
  return (
    <React.Suspense
      fallback={
        <div style={{ textAlign: 'center', padding: '50px' }}>Cargando...</div>
      }
    >
      <Navbar />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/transfers" element={<Transfers />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/catalog" element={<Catalog />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
