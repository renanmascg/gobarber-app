import React from 'react';
import { FiArrowLeft, FiLock, FiMail, FiUser } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { Background, Container, Content } from './SignUpComponents';

const SignUp: React.FC = () => {
  return (
    <>
      <Container>
        <Background />
        <Content>
          <img src={logoImg} alt="GoBarber" />

          <form action="#">
            <h1>Faça seu Logon</h1>
            <Input icon={FiUser} name="name" type="text" placeholder="Nome" />
            <Input
              icon={FiMail}
              name="email"
              type="text"
              placeholder="E-mail"
            />
            <Input
              icon={FiLock}
              name="password"
              type="password"
              placeholder="Senha"
            />

            <Button type="submit">Cadastrar</Button>
          </form>

          <a href="">
            <FiArrowLeft />
            Voltar Para logon
          </a>
        </Content>
      </Container>
    </>
  );
};

export default SignUp;
