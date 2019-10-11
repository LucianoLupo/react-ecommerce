import styled from 'styled-components';

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;

  @media screen and (max-width: 800px) {
    text-align: center;
    margin: 30px auto;
    width: 100%;
  }
`;

export const SignUpTitle = styled.h2`
  margin: 10px 0;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  
  @media screen and (max-width: 800px) {
    flex-direction: column;
    margin: 30px auto;
    width: 100%;

  }
`;