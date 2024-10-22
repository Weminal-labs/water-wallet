import React from 'react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { WalletInterface } from '@/components/WalletInterface';
import { Home } from '@/components/Home';
import { Assets } from '@/components/Assets';
import { Apps } from '@/components/Apps';
import { Activity as ActivityPage } from '@/components/Activity';
import { AddAccountPage } from '@/components/AddAccountPage';

export const Router: React.FC = () => {
  return (
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<WalletInterface />}>
          <Route index element={<Home />} />
          <Route path="assets" element={<Assets />} />
          <Route path="apps" element={<Apps />} />
          <Route path="activity" element={<ActivityPage />} />
          <Route path="add-account" element={<AddAccountPage />} />
        </Route>
      </Routes>
    </MemoryRouter>
  );
};
