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
  justify-content: flex-start;
  padding-inline-start: 13%;
  flex-wrap: wrap;
  margin-top: 7%;

  list-style-type: disc;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;

  li {
    position: relative;
    width: 250px;
    height: 130px;

    background: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 14px;
    margin-bottom: 20px;
    margin-left: 0.7%;

    list-style: none;
    text-align: center;

        h1 {
          font-size: 24px;
          margin-block-end: 0.67em;
          margin-block-start: 0.50em;
        }

        p {
         position: relative;
         margin-block-start: 0.5em;
         margin-block-end: 0em;
         font-size: 22px;
         color: rgb(70, 69, 69);
        }

        .exp {
         position: relative;
         margin-block-start: 0.5em;
         margin-block-end: 0em;
         font-size: 20px;
         color: rgb(70, 69, 69);
        }
  }
`;