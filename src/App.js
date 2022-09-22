import { useState } from "react";
import Todo from "./Components/Todo";
import Modal from "./Components/Modal";

const odata = [
  { id: 1, text: "Learn React", isDeleted: false },
  { id: 2, text: "Master React", isDeleted: false },
  { id: 3, text: "Explore the Depth", isDeleted: false },
  { id: 4, text: "Yue is gonna Win", isDeleted: false },
];

//setState()
//props.xxx setSatet()=>
function App() {
  const [data, setData] = useState(odata);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const deleteTodo = () => {
    const todoData = data;
    console.log(todoData)
    for (let i = 0; i < todoData.length; i += 1) {
      if(todoData[i].id==1){
        todoData[i].isDeleted=true
      }
    }
    console.log(todoData)
    setData(...todoData)
  };



  return (
    <div>
      <h1>My todos</h1>
      {isModalOpen && <Modal onDelete={deleteTodo} />}
      {data.map((item) => {
        if(!item.isDeleted){
          return (
            <Todo text={item.text} key={item.id} openModal={()=>setIsModalOpen(true)} />
          );
        }

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
