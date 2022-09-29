import {useState} from 'react';

const data1 = [
    "Yue",
    "Wang",
    "Aaron",
    "King",
     "Kong",
];
const data2 = [
    "Learn React",
    "Master React",
    "Explore the Depth",
    "Yue is gonna Win",
    "Yue is not gonna lose",

]

function NewPageSwitch() {
    const [page, setPage] = useState(data1[0])
    const [ids, setIds] = useState(0);
    const [status, setStatus] = useState(true);

    const getLastPage = () => {
        if (ids<=4 && ids>0) {
            setPage(data1[ids-1]);
            setIds(ids-1);
    } else if (ids===4) {
        setPage(data1[0]);
    }
}
    const getNextPage = () => {
        if (ids>=0 && ids<4) {
            setPage(data1[ids+1])
            setIds(ids+1)
        } else if (ids===4) {
            setPage(data1[4]);
        }
    }
    const getNewTxt = () => {
            if (status && page===data1[ids]) {
                setPage(data2[ids])
        } else {
            setPage(data1[ids])
        }

    }


    return (
        <div className={'card'}>
            <h3 className="word" onClick={() => {
                setStatus(!status);
                getNewTxt()} }>{page}</h3>
            <div className="miniContainer">
            <button onClick={() => 
                getLastPage()}>Last</button>
            <button onClick={()=> 
                getNextPage()}>Next</button>
            </div>
        </div>
    )
}
export default NewPageSwitch;