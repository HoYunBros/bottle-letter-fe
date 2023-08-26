import { useNavigate } from 'react-router-dom';

import { useInput } from '@hooks/useInput';
import Layout from '@components/common/Layout';
import Input from '@components/common/Input';
import Button from '@components/common/Button';
import * as S from './SignUpPage.style';

const SignUpPage = () => {
  const [id, handleIdInputChange] = useInput('');
  const [password, handlePasswordInputChange] = useInput('');
  const [confirmedPassword, handleConfirmedPasswordInputChange] = useInput('');
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
        <Input
          value={confirmedPassword}
          onChange={handleConfirmedPasswordInputChange}
          size="large"
          placeholder="비밀번호 확인"
        />
        <Button
          onClick={() => {
            // TODO: 회원가입 후 메인 페이지 이동 시, api 통신
            navigate('/');
          }}
          size="large"
          status="primary"
        >
          가입하기
        </Button>
        <Button
          onClick={() => {
            navigate('/signin');
          }}
          size="large"
          status="tertiary"
        >
          돌아가기
        </Button>
      </S.Main>
      <S.Footer>ⓒ 2023. HoYunBros all rights reserved.</S.Footer>
    </Layout>
  );
};

export default SignUpPage;
