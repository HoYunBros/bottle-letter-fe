import * as S from './Input.style';

interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  size?: 'small' | 'medium' | 'large';
}

const Input = ({ value, onChange, placeholder, size = 'medium' }: InputProps) => {
  return <S.$Input value={value} onChange={onChange} placeholder={placeholder} size={size} />;
};

export default Input;
