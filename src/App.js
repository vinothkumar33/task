import { useState } from "react";
import axios from "axios";

function  App() {
    const[data,setData]=useState([]);
    let date =new Date();
    const handleClick=()=>{
     axios.get("https://official-joke-api.appspot.com/random_joke")
     .then(item =>{
        console.log(item.data);
        let date=new Date();
        let value={...item.data,date}
        setData([...data,value])
     })

    }
    console.log(data)
    return(
        <>
         <div>
            <button onClick={handleClick} style={{
                        width:"100px",
                        height:"50px",
                        marginTop: "40px",
                        marginLeft:"90%",
                        boxShadow:"rgb(107, 100, 100) 5px 5px 5px 5px"
                      }}>Add</button>
            {data.map((item)=>{
                return (
                    <>
                    <div
                    style={{
                        width:"500px",
                        height:"300px",
                        marginTop: "40px",
                        marginLeft:"300px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        boxShadow:"rgb(107, 100, 100) 5px 5px 5px 5px"
                      }}
                    >
                      <h4> ID:{item.id}</h4>
                      <h4> TYPE:{item.type}</h4>
                      <h4> SETUP:{item.setup}</h4>
                      <h4> PUNCHLINE: {item.punchline}</h4>
                      
                   </div>
                   
                   </>
                )
            })}
         </div>
        </>
    )
    
}

export default App;