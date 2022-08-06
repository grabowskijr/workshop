import React from 'react';
import { useAuth } from 'contexts/auth';
import styled from 'styled-components';
import { MdCheckCircle, MdHistory } from 'react-icons/md';

function Dashboard() {
  const { user } = useAuth();

  return (
    <Container>
      <UserLoggedCard>
        <h1>
          <MdCheckCircle size={35} color="#666" />
          Bem vindo ao Dashboard
        </h1>
        <p>
          Você está logado no e-mail: <b>{user?.email}</b>
        </p>
      </UserLoggedCard>

      <DashboardInfo>
        <h1>
          <MdHistory size={30} color="#666" />
          Logs:
        </h1>

        <p>Usuários:</p>

        <LogsContainer>
          <Title>
            <Ball />
            Número de usuários cadastrados:
          </Title>

          <Title>
            <Ball isOk />O usuário tal sofreu uma alteração
          </Title>

          <Title>
            <Ball isOk />O usuário tal sofreu uma alteração
          </Title>

          <Title>
            <Ball />O usuário tal sofreu uma alteração
          </Title>
        </LogsContainer>

        <p>Usuários:</p>

        <LogsContainer>
          <Title>
            <Ball />
            Número de usuários cadastrados:
          </Title>

          <Title>
            <Ball isOk />O usuário tal sofreu uma alteração
          </Title>

          <Title>
            <Ball isOk />O usuário tal sofreu uma alteração
          </Title>

          <Title>
            <Ball />O usuário tal sofreu uma alteração
          </Title>
        </LogsContainer>

        <p>Usuários:</p>

        <LogsContainer>
          <Title>
            <Ball />
            Número de usuários cadastrados:
          </Title>

          <Title>
            <Ball isOk />O usuário tal sofreu uma alteração
          </Title>

          <Title>
            <Ball isOk />O usuário tal sofreu uma alteração
          </Title>

          <Title>
            <Ball />O usuário tal sofreu uma alteração
          </Title>
        </LogsContainer>

        <p>Usuários:</p>

        <LogsContainer>
          <Title>
            <Ball />
            Número de usuários cadastrados:
          </Title>

          <Title>
            <Ball isOk />O usuário tal sofreu uma alteração
          </Title>

          <Title>
            <Ball isOk />O usuário tal sofreu uma alteração
          </Title>

          <Title>
            <Ball />O usuário tal sofreu uma alteração
          </Title>
        </LogsContainer>

        <p>Usuários:</p>

        <LogsContainer>
          <Title>
            <Ball />
            Número de usuários cadastrados:
          </Title>

          <Title>
            <Ball isOk />O usuário tal sofreu uma alteração
          </Title>

          <Title>
            <Ball isOk />O usuário tal sofreu uma alteração
          </Title>

          <Title>
            <Ball />O usuário tal sofreu uma alteração
          </Title>
        </LogsContainer>

        <p>Usuários:</p>

        <LogsContainer>
          <Title>
            <Ball />
            Número de usuários cadastrados:
          </Title>

          <Title>
            <Ball isOk />O usuário tal sofreu uma alteração
          </Title>

          <Title>
            <Ball isOk />O usuário tal sofreu uma alteração
          </Title>

          <Title>
            <Ball />O usuário tal sofreu uma alteração
          </Title>
        </LogsContainer>
      </DashboardInfo>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 30px 20px;
`;

const UserLoggedCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 20px;

  h1 {
    color: #333;
    display: flex;
    align-items: center;

    svg {
      margin-right: 10px;
    }
  }

  p {
    margin-top: -1rem;
  }
`;

const DashboardInfo = styled.div`
  padding: 15px 15px;
  background: #fff;
  width: 100%;
  border-radius: 4px;
  margin-top: 20px;
  box-shadow: 1px solid rgba(0, 0, 0, 0.05);

  h1 {
    color: #666;
    display: flex;
    align-items: center;

    svg {
      margin-right: 10px;
    }
  }
`;

const LogsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.span`
  display: flex;
  align-items: center;
`;

const Ball = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: ${props => (props.isOk ? '#68D89B' : '#EE7674')};

  margin-right: 10px;
`;

export default Dashboard;
