import React from 'react';
import styles from '../styles/Content.module.css';
import Box from './Box';
import ChessBoard from './ChessBoard/ChessBoard';
import { observe } from './ChessBoard/Game';
import SingleTarget from './SingleTarget';
import MultipleTarget from './MultipleTarget';
import DragnDrop from './DragnDrop.jsx';

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
      <Box title='Dustbin'>
        <SingleTarget />
      </Box>
      <Box title='Sorted Dustbin'>
        <MultipleTarget />
      </Box>
      <Box title='Drag&Drop'>
        <DragnDrop />
      </Box>

    </div>
  );
}

export default Content;
