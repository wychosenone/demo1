import { useState, useEffect } from "react";

function PageSwitch() {
    
    const [page, setPage] = useState(1);
    const [option, setOption] = useState("React");
    const [issues, setIssues] = useState([]);

    useEffect(() => {console.log("current page", page)
    fetch('https://api.github.com/repos/facebook/' + option + '/issues?page=' + page)
    .then((res) => res.json())
    .then((data) => {
        console.log({data});
        setIssues(data); 
    })
}, [page,option])

    useEffect(() => {console.log("current option", option)},[option])


    return (
        <div>
        <div className="optionpage">
        <h3>page: <div className="pagebutton">{page}</div></h3>
        <button onClick={()=> setPage(Math.max(1,page-1))}>Previous</button>
        <button onClick={()=> setPage(Math.min(5,page+1))}>Next</button>
        </div>
        <div className="optionpage">
            <h3>Selected: <div className="pagebutton">{option}</div></h3>
            <select onChange={(evt) => setOption(evt.target.value)}>
                <option value="react">React</option>
                <option value="create-react-app">Create React App</option>
            </select>
        </div>
        <div>
            <ul>
                {issues.map(issue => {
                    return (<li>{issue.title}</li>)
                })
                }
            </ul>
        </div>

        </div>




    )


}
export default PageSwitch;