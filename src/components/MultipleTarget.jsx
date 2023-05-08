import React from 'react';
import Draggable from './Draggable';
import DragGroup from './DragGroup';
import Droppable from './Droppable';

function MultipleTarget() {
  const handleDrop = (item) => {
    alert(`You drop ${item.name}!`);
  };

  return (
    <>
      <DragGroup>
        <Draggable type='dryTrash' text='Paper' item={{ name: 'Paper' }} />
        <Draggable type='dryTrash' text='Bottle' item={{ name: 'Bottle' }} />
      </DragGroup>
      <DragGroup>
        <Draggable type='wetTrash' text='Banana' item={{ name: 'Banana' }} />
        <Draggable type='wetTrash' text='Flower' item={{ name: 'Flower' }} />
      </DragGroup>
      <Droppable accept='dryTrash' handleDrop={handleDrop} text='Dry Trash' />
      <Droppable accept='wetTrash' handleDrop={handleDrop} text='Wet Trash' />
    </>
  );
}

export default MultipleTarget;