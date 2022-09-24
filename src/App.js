import { useState } from "react";
import Todo from "./Components/Todo";
import Modal from "./Components/Modal";
import Add from "./Components/Add";
import Like from "./Components/Like";

const odata = [
  { id: 1, text: "Learn React", isCompleted: false },
  { id: 2, text: "Master React", isCompleted: false },
  { id: 3, text: "Explore the Depth", isCompleted: false },
  { id: 4, text: "Yue is gonna Win", isCompleted: false },
];

// button => onClick
// isCompleted =>true

//App
//del
//add



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

  const addTodo = (val) => {
    // console.log(val)
    // console.log(data)
    //Create a new obj
    //push
    //new data arr
    //set

    const newData = { id: data.length, text: val, isCompleted: false };
    setData([...data, newData]);
  };

  const openModal = (id) => {
    setSelectedId(id);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const setItDone = (id) => {
    for (let i = 0; i < data.length; i += 1) {
      if (data[i].id === id && data[i].isCompleted === false) {
        data[i].isCompleted = true;
        console.log(data[i].isCompleted);
      } else if (data[i].id === id && data[i].isCompleted === true) {
        data[i].isCompleted = false;
        console.log(data[i].isCompleted);
      }

      setData([...data]);
    }
  };

  return (
    <>
      <>
        <div>
          <h1>My todos</h1>
          {isModalOpen && (
            <Modal onDelete={deleteTodo} closeModal={closeModal} />
          )}
          {data.map((item) => {
            return (
              <Todo
                label={item.text}
                key={item.id}
                id={item.id}
                openModal={() => openModal(item.id)}
                setItDone={setItDone}
                isCompleted={item.isCompleted}
              />
            );
          })}
        </div>
        <div>
          <Add addNew={addTodo} />
        </div>
      </>
      <div>
        <Like liked likeCount={1}/>
      </div>
    </>
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
