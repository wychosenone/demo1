import {useState} from 'react';

function CardSwitch({words,switchCard,openS,closeS}) {
// const defaultStatus = true;
// const defaultNum = 1;
// const [status,setStatus] = useState(defaultStatus);
// const [Num, setNum] = useState(defaultNum);
const defaultTxt = false;
const [txt,setTxt] = useState(defaultTxt)

function nextCard() {
    switchCard(true);
}
function lastCard() {
    switchCard(false);
}
function showText() {
    if (txt) {
        closeS()
    } else {
        openS()
    }
   
}



    return (
        <div className={`card`} >
            <h2 className="word" onClick={()=> {
            setTxt(!txt);
            showText()
        }}>{words}</h2>
            <div className="actions">
                <button className="btn" 
                onClick=
                {()=> {
                // setStatus(false);
                // setNum(Num - 1);
                lastCard()
                }}
                >
                    Previous
                </button>
                <button className="btn" 
                onClick={()=> {
                // setStatus(true);
                // setNum(Num+1);
                nextCard()
                }}
                >
                    Next
                </button>
            </div>
        </div>
    )




}

export default CardSwitch;