import { ReactNode } from 'react';

import * as S from './Button.style';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  size?: 'small' | 'medium' | 'large';
  status?: 'primary' | 'secondary' | 'tertiary';
}

const Button = ({
  children,
  onClick = () => console.log('Click Button!'),
  size = 'medium',
  status = 'primary',
}: ButtonProps) => {
  return (
    <S.$Button onClick={onClick} size={size} status={status}>
      {children}
    </S.$Button>
  );
};

export default Button;
