import {useDrop} from 'react-dnd';

function Droppable({handleDrop, state, text, children}){
  const [{isOver}, drop] = useDrop(() => ({
    accept: 'card',
    collect: monitor => ({
      isOver: monitor.isOver(),
    }),
    drop: (item) => {
      handleDrop(item);
    },
  }), [state]);

  return (
    <div id = 'drop' ref={drop}>
      {text}
      <br />
      {children}
    </div>
  );
}

export default Droppable;
