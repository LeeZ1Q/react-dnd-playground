import React from 'react';
import Droppable from './Droppable';
import Draggable from './Draggable';

function DragAround() {
  const [position, setPosition] = React.useState({ top: 50, left: 100 });

  const handleDrop = (item, monitor, state) => {
    const { x, y } = monitor.getDifferenceFromInitialOffset();
    const { top, left } = { top: state.top + y, left: state.left + x };
    if (top > 0 && left > 0) {
      setPosition((prev) => ({ top, left }));
    }
  };

  const dragStyle = {
    position: 'relative',
    justifyContent: 'left',
    left: `${position.left}px`,
    top: `${position.top}px`,
  };

  return (
    <>
      <Droppable
        accept='dragAround'
        handleDrop={handleDrop}
        big={true}
        style={{ textAlign: 'start' }}
        state={position}
      >
        <Draggable
          type='dragAround'
          text='Drag Me'
          style={dragStyle}
          hideWhenDrag={true}
          item={{ top: position.top, left: position.left }}
          state={position}
        />
      </Droppable>
    </>
  );
}

export default DragAround;
