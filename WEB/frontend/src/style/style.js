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
    /* box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); */
    border-radius: 14px;
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
         color: #34495E;
        }

        .exp {
         position: relative;
         margin-block-start: 0.5em;
         margin-block-end: 0em;
         font-size: 20px;
         color: #34495E;
        }
  }
`;

export const CardsQuests = styled.ul`
  margin: 0;
  padding-top: 7%;
  display: flex;
  justify-content: flex-start;
  padding-inline-start: 23%;
  flex-wrap: wrap;

  list-style-type: disc;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  
  li {
    position: relative;
    width: 45%;
    height: 230px;

    background: #3B556D;
    margin-bottom: 2.5%;
    margin-left: 2.5%;

    list-style: none;
    text-align: center;
  }
`;