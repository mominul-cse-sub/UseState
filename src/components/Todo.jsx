import { useState } from "react"


export default function Todo (){
    const [todo, SetTodo] = useState("");
    const [warning, setWarning] = useState(null);

    const handleInput = (e) =>{
        const inputValue = e.target.value;
        const updateWarning = inputValue.includes("kaium") ? 'Most Wanted' : null;

        SetTodo(inputValue);
        setWarning(updateWarning);
    }


    return(
        <div>
            <p>{todo}</p>
            <p>
                <textarea name="todo" value={todo} onChange={handleInput}></textarea>
            </p>
            <hr />
            <h2>{warning || "Good Choice!"}</h2>
        </div>
    )
}




// import { useState } from "react"

// export default function Todo (){
//     const [todo, SetTodo] = useState({
//         title: "",
//         description: "",
//     });

//     const {title, description} = todo;
//     return( 
//         <div>
//             <p>{title}</p>
//             <hr />
//             <p>
//                 <input type="text" value={title} onChange={(e)=> SetTodo( {...todo,title: e.target.value})}></input>
//             </p>
//             <p>
//                 <textarea name="todo" value={description} onChange={(e)=> SetTodo( {...todo,description: e.target.value})}></textarea>
//             </p>
//             <hr />
//             <h2>{title}</h2>
//             <h2>{description || "Good Choice!"}</h2>
//         </div>
//     )
// }