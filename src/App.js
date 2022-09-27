import { useState} from "react";
import Todo from "./Components/Todo";
import Modal from "./Components/Modal";
import Add from "./Components/Add";
import Like from "./Components/Like";
import CardSwitch from "./Components/CardSwitch";
import Popup from "./Components/Popup";
import PageSwitch from "./Components/PageSwitch";

const pop = [
  {id:1,text:"Go to React Web",value:1},
  {id:2,text:"aaron",value:3},
  {id:3,text:"44",value:10},

]
const odata = [
  { id: 1, text: "Learn React", isCompleted: false },
  { id: 2, text: "Master React", isCompleted: false },
  { id: 3, text: "Explore the Depth", isCompleted: false },
  { id: 4, text: "Yue is gonna Win", isCompleted: false },
];


const cardi = [
  {id:1, words:"Yue"},
  {id:2, words:"Wang"},
  {id:3, words:"Aaron"},
  {id:4, words:"King"},
]
const story1 = [
  {id:1, words:"'Don’t tell people your plans. Show them your results'"},
  {id:2, words: "'No pressure, no diamonds.'"},
  {id:3, words: "'We can do anything we want to if we stick to it long enough.'"},
  {id:4, words:"'Stay foolish to stay sane.'"}
];

// button => onClick
// isCompleted =>true

//App
//del
//add


const cardj = [cardi[0]]
const num = 1
const cardk = [cardi[cardi.length-1]]



function App() {
  //useState => val,set func
  const [i, setI] = useState(num);
  const [card2,setCard2] = useState(cardj); //fill new cards
  const [data, setData] = useState(odata);
  const [selectedId, setSelectedId] = useState(undefined);
  const [isModalOpen, setIsModalOpen] = useState(false);
  

  const cardSwitch = (ord) => {
    if (ord===true) {
      if (i<cardi.length && i>=1) {
        setI(i+1);
        setCard2(cardi.slice(i,i+1));
        // console.log(card2);
        // console.log(i);
        // console.log(ord);
    }  
    else if (i>=cardi.length) {
          setCard2(cardk);
          // console.log(card2);
          // console.log(i);
          // console.log(ord);

    }
  } else if (ord===false) {
      if (i<=1) {
        setCard2(cardj);
        // console.log(card2);
        // console.log(i);
        // console.log(ord);


    } else if (i<=cardi.length && i>1) {
        setI(i-1);
        setCard2(cardi.slice(i-2,i-1));
        // console.log(card2);
        // console.log(i);
        // console.log(ord);
        
      
    }
  }


    
  }



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
  const storyOpen= () => {
      setCard2(story1.slice(i-1,i));
      
  

  }
  const storyClose = () => {
    setCard2(cardi.slice(i-1,i))


  }
  // （⬆️ 这个版本比较粗暴）
  // 也试过其他好几种解决方案，比如先用splice清理对应的card2里的word属性
  // 然后放进去story里的对应object的word属性，又或者给card2里每个object都加上
  // 一条story属性 通过加上一个包涵story展示div给ui结构并赋予状态，通过css的z-index
  // 以及fix定位来分层展示story的div和word的div，监听卡片的onclick来调整z-index
  // 

  const addTodo = (val) => {
    // console.log(val)
    // console.log(data)
    //Create a new obj
    //push
    //new data arr
    //set

    const newData = { id: data.length, text: val, isCompleted: false };
    setData([...data, newData]);
    console.log(data[0]);
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
  function goNextWeb() {
    window.location.href="https://reactjs.org/docs/state-and-lifecycle.html";
  }
  

  return (
    <><><><>
      <>
        <div className="section">
          <h1>Card Actions:</h1>
          {isModalOpen && (
            <Modal onDelete={deleteTodo} closeModal={closeModal} />
          )}
          <div className="container">
          {data.map((item) => {
            return (
              <Todo
                text={item.text}
                key={item.id}
                id={item.id}
                openModal={() => openModal(item.id)}
                setItDone={setItDone}
                isCompleted={item.isCompleted} />
            );
          })}
          </div>
       
        </div>
        <div className="section">
          <h1>Input bar && Add New:</h1>
          <Add addNew={addTodo} />
        </div>
      </>
      <div className="section">
        <h1>LikeButton && Likes:</h1>
        <Like liked likeCount={7} />
      </div>
    </><div className="section">
      <h1>SwitchCards:</h1>
        {card2.map((cards) => {
          return (
            <CardSwitch
              words={cards.words}
              key={cards.id}
              id={cards.id}
              switchCard={cardSwitch}
              openS={storyOpen}
              closeS={storyClose} />
          );
        })}

      </div></><div className="section">
        <h1>Dataflow Traing:</h1>
        {pop.slice(0,1).map((text) => {
          return (
            <Popup text={text}
              key={text.id} 
              redirect={goNextWeb}/>
          );

        })}

        
      </div></><div className="section">
        <h1>UseEffect && UseState: </h1>
        <PageSwitch />
        
        

      </div></>
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
