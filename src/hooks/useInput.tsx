import { useState } from 'react';

export const useInput = <T,>(initialValue: T) => {
  const [value, setValue] = useState(initialValue);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value as T);
  };
  return [value, handleInputChange] as const;
};
