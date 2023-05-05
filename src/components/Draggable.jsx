import {useDrag} from 'react-dnd';

function Draggable({id}){
  const [{isDragging}, drag] = useDrag(() => ({
    type: 'card',
    item: {id},
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  if (isDragging){
    return <div ref={drag}></div>
  }

  return (
    <div id = 'drag' ref = {drag}>
      {`Drag ${id}`}
    </div>
  );
}

export default Draggable;