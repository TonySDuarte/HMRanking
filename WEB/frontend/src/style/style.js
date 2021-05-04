import styled from 'styled-components';

export const Loading = styled.div`
  height: 120px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Cards = styled.ul`
  display: flex;
  margin: 0;
  justify-content: flex-start;
  padding-inline-start: 23%;
  flex-wrap: wrap;
  padding-top: 7%;

  list-style-type: disc;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;

  li {
    position: relative;
    width: 250px;
    height: 130px;

    background: #ffffff;
    border-radius: 5px;
    margin-bottom: 20px;
    margin-left: 0.7%;

    list-style: none;
    text-align: center;

        h1 {
          font-size: 22px;
          margin-block-end: 0.0em;
          margin-block-start: 0.30em;
          margin-inline-start: 1em;
          margin-inline-end: 1em;
          white-space: nowrap; // Removendo quebra de linha
          overflow: hidden; // Removendo a barra de rolagem
          text-overflow: ellipsis; // Adicionando "..." ao final do texto
        }

        p {
         position: relative;
         margin-block-start: 0.1em;
         margin-block-end: 0em;
         font-size: 20px;
         color: #292121;
        }

        .exp {
         position: relative;
         margin-block-start: 0.5em;
         margin-block-end: 0em;
         font-size: 20px;
         color: #000;
        }
  }
`;

export const CardsQuests = styled.ul`
  position: relative;
  display: flex;
  flex: 1;
  
  margin: 0;
  padding-top: 4.5%;
  padding-inline-start: 21%;
  flex-wrap: wrap;
  
  li {
    /* background-image: linear-gradient(to bottom right, #3742fa, #1e90ff); */
    border-radius: 10%;
    border: solid 1.8px #dfe4ea;
    width: 30%;
    height: 180px;
    border-radius: 5px;

    background: #ffffff;
    margin-bottom: 2.5%;
    margin-left: 2.5%;

    list-style: none;

    h1 {
      display: flex;
      font-size: 20px;
      border-top: 5%;
      color: #2f3542;
      padding: 4% 0 0 5%;
      margin-block-start: 0;

    }

  }
`;