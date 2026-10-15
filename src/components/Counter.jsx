import { useState } from "react"

function Counter()
{

    const[count,setCount] = useState(0);
    const [active, setActive] = useState(false);

    return(
        <section>
            <button onClick={()=>{setCount(count + 1)}}>+1</button>
            <button onClick={()=>{setCount(count - 1)}}>-1</button>
            <button onClick={()=>{setCount(0)}}>Reset</button>
            <button onClick={()=>{setCount(count +5)}}>+5</button>
            <button onClick={()=>{setCount(count -5)}}>-5</button>
            <button onClick={()=>{setCount(100)}}>100</button>

            <p>Licznik: {count}</p>

                <hr/>

            <button onClick={()=>{setActive(!active)}}>Prawda</button>
            
            <p>{active?"TAk":"NIE"}</p>

        </section>
    )
}


export default Counter;