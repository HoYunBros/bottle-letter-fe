import styled, { css } from 'styled-components';

const $size = {
  small: css`
    width: 120px;
    height: 40px;
    padding: 0 8px;
    border-radius: 8px;
    font-size: 4px;
    line-height: 40px;
  `,
  medium: css`
    width: 160px;
    height: 48px;
    padding: 0 16px;
    border-radius: 8px;
    font-size: 16px;
    line-height: 48px;
  `,
  large: css`
    width: 240px;
    height: 56px;
    padding: 0 24px;
    border-radius: 8px;
    font-size: 24px;
    line-height: 56px;
  `,
};

const $color = css`
  color: ${({ theme }) => theme.colors.inverse};
  background-color: ${({ theme }) => theme.colors.default};
  border: 1px solid ${({ theme }) => theme.colors.inverse};
  outline: none;
  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }
`;

const Input = styled.input<{ size: keyof typeof $size }>`
  ${({ size }) => $size[size]};
  ${$color}
`;

export { Input };
