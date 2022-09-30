import {useState} from 'react';

function TempCov() {
    const [cel,setCel] = useState("");
    const [fah,setFah] = useState("");
    const [boil, setBoil] = useState("");

   
    
    const returnCel = () => {
        if (cel >= 100) {
            setBoil("Boiled")
        } else {
            setBoil("Not Boiled")
        }
    }
    const toFah = () => {
        setFah((cel * 9 /5) + 32)
    }

    return (

        <div className="inputBar">
        <input 
        type="number"
        id="temp"
        name="temp"
        onChange={(e)=> {setCel(e.target.value);}}
        value={cel}
        />
        <input 
        type="submit" 
        value="Check" 
        onClick={returnCel} 
        />
        <button onClick={()=> {toFah()}}>toFah</button>
        <h4>The input temperature to cel is :{cel}, to Fah is :{fah}, 
        and it is {boil} </h4>


        </div>
    )


}
export default TempCov;