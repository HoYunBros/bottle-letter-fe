import { useNavigate } from 'react-router-dom';

import { ROUTE_PATH } from '@routes/router';
import { useInput } from '@hooks/useInput';

import Layout from '@components/common/Layout';
import Input from '@components/common/Input';
import Button from '@components/common/Button';
import * as S from './SignInPage.style';

const SignInPage = () => {
  const [id, handleIdInputChange] = useInput('');
  const [password, handlePasswordInputChange] = useInput('');
  const navigate = useNavigate();

  return (
    <Layout>
      <S.Header>Bottle Letter</S.Header>
      <S.Main>
        <Input value={id} onChange={handleIdInputChange} size="large" placeholder="아이디" />
        <Input
          value={password}
          onChange={handlePasswordInputChange}
          size="large"
          placeholder="비밀번호"
        />
        <Button
          onClick={() => {
            navigate(ROUTE_PATH.MAIN);
          }}
          size="large"
          status="primary"
        >
          로그인
        </Button>
        <Button
          onClick={() => {
            navigate(ROUTE_PATH.SIGN_UP);
          }}
          size="large"
          status="tertiary"
        >
          회원가입
        </Button>
      </S.Main>
      <S.Footer>ⓒ 2023. HoYunBros all rights reserved.</S.Footer>
    </Layout>
  );
};

export default SignInPage;
