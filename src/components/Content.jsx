import React from 'react';
import styles from '../styles/Content.module.css';
import Box from './Box';
import ChessBoard from './ChessBoard';
import { observe } from './Game';

function Content() {
  const [knightPosition, setKnightPosition] = React.useState('');

  React.useEffect(() => {
    observe((newKnightPosition) => {
      setKnightPosition(newKnightPosition);
    });
  }, []);

  

  return (
    <div className={styles.content}>
      <Box title='Chess Board'>
          <ChessBoard knightPosition={knightPosition} />
      </Box>
    </div>
  );
}

export default Content;
