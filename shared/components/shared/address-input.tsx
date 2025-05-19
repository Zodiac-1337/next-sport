'use client';

import React from 'react';
import { AddressSuggestions } from 'react-dadata';
import 'react-dadata/dist/react-dadata.css';

interface Props {
  onChange?: (value?: string) => void;
}

export const AdressInput: React.FC<Props> = ({ onChange }) => {
  return (
    <AddressSuggestions
      token="9c5f35d49b256326cc2b39db3e981758b670d253"
      onChange={(data) => onChange?.(data?.value)}
    />
  );
};