import { Checkbox } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

function Configs() {
  return (
    <Container>
      <ConfigsOptions>
        <h1>Personalize suas configurações</h1>

        <ScreenOptions>
          <Checkbox color="#666" />
          <p>Ativar modo escuro</p>
        </ScreenOptions>

        <ScreenOptions>
          <Checkbox color="#666" />
          <p>Receber notificações com áudio</p>
        </ScreenOptions>

        <ScreenOptions>
          <Checkbox color="#666" />
          <p>Aumentar tamanho da fonte</p>
        </ScreenOptions>

        <h1>Assistência e reports</h1>
        <ReportOptions>
          <span>Estou encontrando erros, o quê devo fazer?</span>
          <p>
            Caso você esteja encontrando algum erro na aplicação, sugerimos que
            você faça um report para o nosso time avaliar. Utilize o campo
            abaixo para nos informar o que está acontecendo.
          </p>

          <textarea />
        </ReportOptions>

        <SaveButton>
          <CheckCircleOutlineIcon color="#f3f3f3" />
          Enviar Feedback
        </SaveButton>
      </ConfigsOptions>
    </Container>
  );
}

const Container = styled.div`
  padding: 0px 20px;
`;

const ConfigsOptions = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  width: 100%;
  border-radius: 4px;
  margin-top: 20px;
  box-shadow: 1px solid rgba(0, 0, 0, 0.05);
  padding: 15px 20px;

  h1 {
    color: #666;
  }
`;

const ScreenOptions = styled.div`
  display: flex;
`;

const ReportOptions = styled.div`
  display: flex;
  flex-direction: column;

  textarea {
    width: 100%;
    height: 16rem;
    margin-top: 0.8rem;
    border-radius: 0.8rem;
    background: #f7f7ff;
    border: 2px solid #7159c1;
    outline: 0;
    resize: vertical;
    padding: 1.2rem 1.6rem;
  }
`;

const SaveButton = styled.button`
  background: #fe5f55;
  margin-top: 1rem;
  height: 45px;
  border: 0;
  color: #fff;
  border-radius: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;

  &:hover {
    background: #cb769e;
  }

  svg {
    margin-right: 0.5rem;
  }
`;

export default Configs;
