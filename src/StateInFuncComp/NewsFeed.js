import { useState } from "react";
function NewsFeedFComp() {
    const [date, setDate] = useState(new Date());
    const [headLines, setHeadlines] = useState([]);
    return (
        <>

            <h1>Head lines from the functional state component: {date.toLocaleString()}</h1>
            <h1>Head lines from the functional state component:</h1>
            <button onClick={() => setHeadlines(["news 1", " news 2"])}>update news</button>
            <div>
                {headLines.map((item, index)=>{
                    return (<li key={index}>{item}</li>)
                })}
         
            </div>
        </>
    );
}

export default NewsFeedFComp;