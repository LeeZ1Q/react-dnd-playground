import React from 'react';
import styles from '../styles/Content.module.css';
import Box from './Box';
import ChessBoard from './ChessBoard/ChessBoard';
import { observe } from './ChessBoard/Game';
import SingleTarget from './SingleTarget';
import MultipleTarget from './MultipleTarget';
import DragnDrop from './DragnDrop.jsx';
import DragAround from './DragAround.jsx';
import NestedDraggable from './NestedDraggable.jsx';
import NestedDroppable from './NestedDroppable.jsx';
import Sortable from './Sortable.jsx';


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
      <Box title='Drag Around'>
        <DragAround />
      </Box>
      <Box title='Nested Draggable'>
        <NestedDraggable />
      </Box>
      <Box title='Nested Droppable'>
        <NestedDroppable />
      </Box>
      <Box title='Sortable'>
        <Sortable />
      </Box>
    </div>
  );
}

export default Content;
