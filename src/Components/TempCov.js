import {useState} from 'react';

function TempCov() {
    const [temp,setTemp] = useState("");
    const [boil, setBoil] = useState("");

    const inputTemp = (e) => {
        setTemp(e.target.value);
        
    }
    const returnTemp = () => {
        if (temp >= 100) {
            setBoil("Boiled")
        } else {
            setBoil("Not Boiled")
        }
    }

    return (

        <div className="inputBar">
        <input 
        type="number"
        id="temp"
        name="temp"
        onChange={inputTemp}
        value={temp}
        />
        <input 
        type="submit" 
        value="Check" 
        onClick={returnTemp} 
        />
        <h4>The input temperature is :{temp}, 
        and it is {boil} </h4>


        </div>
    )


}
export default TempCov;