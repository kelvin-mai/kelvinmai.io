'use client';

import React from 'react';
import { PasswordInput } from '../ui/password-input';
import { PasswordStrengthMeter } from '../ui/password-strength-meter';

export default function Demo() {
  const [password, setPassword] = React.useState('');
  return (
    <div className='bg-card space-y-2 rounded-lg border p-4'>
      <PasswordInput
        value={password}
        placeholder='Password'
        onChange={(e) => setPassword(e.target.value)}
      />
      <PasswordStrengthMeter password={password} />
    </div>
  );
}
