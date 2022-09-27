function Popup(props) {
 
    const xxx = props.text;

    return(
        <div className="pops">
         <button onClick={() => props.redirect()}>{xxx.text}</button>
        </div> 
            
    )
}

export default Popup;