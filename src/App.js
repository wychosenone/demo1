import { useState } from "react";
import Todo from "./Components/Todo";
import Modal from "./Components/Modal";

const odata = [
  { id: 1, text: "Learn React" },
  { id: 2, text: "Master React" },
  { id: 3, text: "Explore the Depth" },
  { id: 4, text: "Yue is gonna Win" },
];

function App() {
  //useState => val,set func

  const [data, setData] = useState(odata);
  const [selectedId, setSelectedId] = useState(undefined);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const deleteTodo = () => {
    for (let i = 0; i < data.length; i += 1) {
      if (data[i].id === selectedId) {
        data.splice(i, 1);
      }
    }
    console.log(data);
    setData([...data]);
    setIsModalOpen(false);
  };

  const openModal = (id) => {
    setSelectedId(id);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <h1>My todos</h1>
      {isModalOpen && (
        <Modal onDelete={deleteTodo} closeModal={closeModal} />
      )}
      {data.map((item) => {
        return (
          <Todo
            text={item.text}
            key={item.id}
            openModal={() => openModal(item.id)}
          />
        );
      })}
    </div>
  );
}

export default App;

//weather => localhost:300 -full stack-> fe be
//
//reactdash => 3001 -> dev mode ->hot update ;> npm build =>static

//a.html b.html
//xxx.com/a
//xxx.com/b

//config index.html/home.html
//->machine index.html -> about.html

//php html. css. js php

//react => index.html

//react => preload
