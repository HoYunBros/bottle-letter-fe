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
    width: 200px;
    height: 56px;
    padding: 0 24px;
    border-radius: 8px;
    font-size: 24px;
    line-height: 56px;
  `,
};

const $status = {
  primary: css`
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.default};
  `,
  secondary: css`
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.default};
  `,
  tertiary: css`
    background-color: ${({ theme }) => theme.colors.default};
    color: ${({ theme }) => theme.colors.inverse};
    border: 1px solid ${({ theme }) => theme.colors.inverse};
  `,
};

const $Button = styled.button<{ size: keyof typeof $size; status: keyof typeof $status }>`
  ${({ size }) => $size[size]};
  ${({ status }) => $status[status]};
`;

export { $Button };
