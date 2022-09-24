import {useState} from 'react';
function Add({ addCard }) {
    const [message, setMessage] = useState('');


    const haveChange = event => {
        setMessage(event.target.value);
        console.log('value is:', event.target.value);
    
      }
    function addEvent() {
        addCard();
    }

   

  return (
    <div className="inputBar">
        <input type="text" id="message" name="message"
            onChange={haveChange} value={message}
        />
        <input type="submit" value="Submit" onClick={addEvent} />
      

    </div>
  );
};

export default Add;


  