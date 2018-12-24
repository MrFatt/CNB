/* @flow */
import React, { useContext } from 'react';
import styled, { keyframes } from 'styled-components';
import GameThemeContext from '../../../../../../contexts/GameThemeContext';

type Props = {
  result: Object,
  player1: Object,
  player2: Object,
};

const WinnerView = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5px;
  margin-right: 5px;
  position: relative;
`;

const fadeAndScale = keyframes`
    0% {
        opacity: 0;
        transform: scale(.5, .5);
    }
    75% {
        opacity: 1;
        transform: scale(1.1, 1.1);
    }
    100% {
        opacity: 1;
        transform: scale(1, 1);
    }
`;

const extremeFadeAndScale = keyframes`
    0% {
        opacity: 0;
        transform: scale(.5, .5);
    }
    60% {
        opacity: 1;
        transform: scale(1.3, 1.3);
    }
    100% {
        opacity: 1;
        transform: scale(1, 1);
    }
`;

const WinnerHeading = styled.h2`
  opacity: 0;
  animation: ${extremeFadeAndScale} 1s linear 4s 1 forwards;
  text-align: center;
  margin: 0;
`;

const ResultContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const CenteredText = styled.span`
  align-self: center;
`;

const WinnerAnimated = styled(CenteredText)`
  opacity: 0;
  animation: ${fadeAndScale} 1s linear 1s 1 forwards;
`;

const BeatsAnimated = styled(CenteredText)`
  font-size: 3vmin;
  padding: 0 1vw;
  opacity: 0;
  animation: ${fadeAndScale} 1s linear 1.2s 1 forwards;
`;

const LoserAnimated = styled(CenteredText)`
  opacity: 0;
  animation: ${fadeAndScale} 1s linear 1.4s 1 forwards;
`;

const TrashTalk = styled.p`
  margin: 0;
  padding: 10px;
  border: 2px solid black;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  top: -110px;
  left: -80px;
  font-size: 0.5rem;
  width: 28vw;

  &::after {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 1px;
    width: 0;
    height: 0;
    display: block;
    width: 15px;
    height: 15px;
    background-color: white;
    border: 2px solid black;
    border-top: 0;
    border-right: 0;
    transform: rotate(-24deg);`;

const TranslatedWinnerText = ({ winner }) => {
  if (winner === 'XIAN') {
    return (
      <React.Fragment>
        XIAN WINS! <br />
        西安勝
      </React.Fragment>
    );
  }

  if (winner === 'MELB') {
    return (
      <React.Fragment>
        MELB WINS! <br />
        墨爾本獲勝
      </React.Fragment>
    );
  }

  return null;
};

const View = ({ player1, player2, result }: Props) => {
  const theme = useContext(GameThemeContext);
  const winner = result.winner === 'player1' ? player1 : player2;
  const loser = winner === player1 ? player2 : player1;

  return (
    <WinnerView>
      {/* <ResultContainer>
        <WinnerAnimated>
          { theme.characters.nameMapping[winner.move] }
        </WinnerAnimated>
        <BeatsAnimated>beats 打败</BeatsAnimated>
        <LoserAnimated>
          { theme.characters.nameMapping[loser.move] }
        </LoserAnimated>
      </ResultContainer> */}
      {/* <TrashTalk>Trash talk here...</TrashTalk> */}
      <WinnerHeading>
        <TranslatedWinnerText winner={winner.name} />
      </WinnerHeading>
    </WinnerView>
  );
};

export default View;
