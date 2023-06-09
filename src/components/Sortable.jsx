import React from 'react';
import Card from './Card';

function Sortable() {
  const [cards, setCards] = React.useState([
    {
      id: 1,
      text: 'JavaScript',
    },
    {
      id: 2,
      text: 'Python',
    },
    {
      id: 3,
      text: 'Go',
    },
    {
      id: 4,
      text: 'Java',
    },
    {
      id: 5,
      text: 'Ruby',
    },
    {
      id: 6,
      text: 'C++',
    },
  ]);

  const handleDrag = (dragIndex, hoverIndex) => {
    setCards((prev) => {
      const copy = [...prev];
      const card = copy[dragIndex];
      // remove origin
      copy.splice(dragIndex, 1);
      // add to target
      copy.splice(hoverIndex, 0, card);
      return copy;
    });
  };


  return (
    <div>
      {cards.map((item, index) => (
        <Card
          key={item.id}
          index={index}
          text={item.text}
          handleDrag={handleDrag}
          state={cards}
        />
      ))}
    </div>
  );
}

export default Sortable;