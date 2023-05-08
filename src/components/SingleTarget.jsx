import React from 'react';
import Draggable from './Draggable';
import DragGroup from './DragGroup';
import Droppable from './Droppable';

function SingleTarget() {
  const handleDrop = (item) => {
    alert(`You drop ${item.name}!`);
  };

  return (
    <>
      <DragGroup>
        <Draggable type='drag1' text='Glass' item={{ name: 'Glass' }} />
        <Draggable type='drag1' text='Banana' item={{ name: 'Banana' }} />
        <Draggable type='drag1' text='Paper' item={{ name: 'Paper' }} />
      </DragGroup>
      <Droppable accept='drag1' handleDrop={handleDrop} text='Drop it Here!' />
    </>
  );
}

export default SingleTarget;