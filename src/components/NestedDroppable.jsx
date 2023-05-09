import React from 'react';
import Draggable from './Draggable';
import Droppable from './Droppable';


  
function NestedDroppable() {
  const handlChina = (item, monitor, state) => {
    if (!!monitor.didDrop() && !!monitor.getDropResult()) return;
    alert('Arrive China!');
  };
  const handlLiaoning = (item, monitor, state) => {
    if (!!monitor.didDrop() && !!monitor.getDropResult()) return;
    alert('Arrive Liaoning!');
  };
  const handleShenyang = (item, monitor, state) => {
    if (!!monitor.didDrop() && !!monitor.getDropResult()) return;
    alert('Arrive Shenyang!');
  };
  const handleDalian = (item, monitor, state) => {
    if (!!monitor.didDrop() && !!monitor.getDropResult()) return;
    alert('Arrive Dalian!');
  };

  return (
    <>
      <Draggable type='NestedDroppable' text='Drag Me' />
      <Droppable accept='NestedDroppable' handleDrop={handlChina} text='China' >
        <Droppable accept='NestedDroppable' handleDrop={handlLiaoning} text='Liaoning' >
          <Droppable accept='NestedDroppable' handleDrop={handleShenyang} text='Shenyang' />
          <Droppable accept='NestedDroppable' handleDrop={handleDalian} text='Dalian' />
          </Droppable>
      </Droppable>
    </>
  );
}

export default NestedDroppable;