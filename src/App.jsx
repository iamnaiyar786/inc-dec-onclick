import React, { useState } from "react";
import "./App.css";

const App =() =>{
    const[count, setCount] = useState(0);

    
    return (
    <>
    <div className="main">
        <div className="second">
            <h1>{count}</h1>
            <main>
                <button onClick={()=>setCount(count+1)}>Incream</button>
                <button onClick={()=>
                {
                    if(count-1>=0){
                        setCount(count-1)
                    }
                }}>Decream</button>
            </main>
        </div>
    </div>
    </>
)}

export default App;