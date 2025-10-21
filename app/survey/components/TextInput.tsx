'use client';

import { useState } from 'react';

interface TextInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  multiline?: boolean;
}

export default function TextInput({ value, onChange, placeholder = 'Your answer...', multiline = false }: TextInputProps) {
  if (multiline) {
    return (
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={4}
        className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-600 focus:outline-none transition-colors resize-none text-gray-700"
      />
    );
  }

  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-600 focus:outline-none transition-colors text-gray-700"
    />
  );
}






