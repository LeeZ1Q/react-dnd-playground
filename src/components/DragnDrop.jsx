import React from 'react';
import Draggable from './Draggable';
import DragGroup from './DragGroup';
import Droppable from './Droppable';

function DragnDrop() {
  const [box1, setBox1] = React.useState([
    { text: 'Hello' },
    { text: 'World' },
  ]);

  const [box2, setBox2] = React.useState([
    { text: `I'm` },
    { text: 'Lee' },
  ]);
  
  const handleDrop = (item, monitor, state, setSource, setTarget) => {
    if (state.find((each) => each.text === item.text)) return;
    // remove from source
    setSource((prev) => {
      const index = prev.findIndex((each) => each.text === item.text);
      const copy = [...prev];
      copy.splice(index, 1);
      return copy;
    });
    // add to target
    setTarget((prev) => {
      return [...prev, { text: item.text }];
    });
  };
  

  return (
    <>
      <Droppable 
        accept='dragnDrop'  
        text='Box1'
        handleDrop={(item, monitor, state) =>
          handleDrop(item, monitor, state, setBox2, setBox1)
        }
        state={box1}
      >
        <DragGroup>
          {box1.map((drag) => (
              <Draggable
                key={drag.text}
                type='dragnDrop'
                text={drag.text}
                item={{ text: drag.text }}
                state={box1}
              />
            ))}
        </DragGroup>
      </Droppable>
      <Droppable 
        accept='dragnDrop'  
        text='Box2'
        handleDrop={(item, monitor, state) =>
          handleDrop(item, monitor, state, setBox1, setBox2)
        }
        state={box2}
      >
        <DragGroup>
          {box2.map((drag) => (
              <Draggable
                key={drag.text}
                type='dragnDrop'
                text={drag.text}
                item={{ text: drag.text }}
                state={box2}
              />
            ))}
        </DragGroup>
      </Droppable>
    </>
  );
}

export default DragnDrop;