import React from 'react';
import Droppable from './Droppable';
import Draggable from './Draggable';

function NestedDraggable(props) {
  const handleDrop = (item, monitor, state) => {
    alert(`Pick ${item.name}!`);
  };


  return (
    <>
      <Draggable type='draggable' item={{ name: 'Football' }} text='Football'  >
        <br />
        <Draggable type='draggable' item={{ name: 'Premier League' }} text='Premier League'>
          <br />
          <Draggable type='draggable' item={{ name: 'ManCity' }} text='ManCity' />
          <Draggable type='draggable' item={{ name: 'ManUnited' }} text='ManUnited' />
        </Draggable>
      </Draggable>
      <Droppable accept='draggable' handleDrop={handleDrop} text='Drop here'  />
    </>
  );
}

export default NestedDraggable;