import { useState } from "react"


export default function Counter(){
    const [count,setCount] = useState(0);


    let i = 0;
    const add = (j) => {
        while(i<j){
            setCount((previousState)=>previousState+1);
            i= i+1;
        }

    }


    return (
        <div>
            {count}
            <p>
                {/* <button type="button" onClick={()=> setCount((previousState)=>previousState+1)} >Add 1</button> */}
                <button type="button" onClick={()=> add(1)} >Add 1</button>
            </p>
            <p>
            <button type="button" onClick={()=> add(5)} >Add 5</button>
            </p>
        </div>
    )
}