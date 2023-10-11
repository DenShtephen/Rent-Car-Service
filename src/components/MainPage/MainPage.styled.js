import styled from 'styled-components';
import MainCarFont from '../../imgs/jpgs/CarFont.jpg';

export const MainSection = styled.section`
  padding-top: 200px;
  padding-bottom: 888px;
  background-image: linear-gradient(
      rgba(46, 47, 66, 0.7),
      rgba(46, 47, 66, 0.7)
    ),
    url(${MainCarFont});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  text-align: center;
  overflow: hidden;

  .link-main-page {
    padding: 12px 99px;
    align-items: center;
    border-radius: 12px;
    border: 1px solid var(--main-button-color);
    transition: background-color 0.5s ease, border 0.5s ease, opacity 0.5s ease;

    &:hover,
    &:focus {
      background-color: var(--hover-button-color);
      opacity: 1;
      border: none;
    }

    color: var(--button-text-color);
    font-size: 30px;
    font-style: normal;
    font-weight: 600;
    line-height: 1.4;

    opacity: 0.3;
  }
`;

export const MainText = styled.h1`
  color: var(--button-text-color);

  margin-bottom: 40px;
  font-size: 80px;
  opacity: 0.3;
`;
