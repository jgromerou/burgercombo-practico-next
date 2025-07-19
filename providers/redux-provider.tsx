'use client';

import React, { useRef } from 'react';
import { Provider } from 'react-redux';
import { store, AppStore } from '../store/store';

export default function ReduxProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore | null>(null);
  if (!storeRef.current) {
    // Crear la store la primera vez que se renderiza
    storeRef.current = store();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}