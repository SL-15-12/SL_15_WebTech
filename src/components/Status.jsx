import { useState } from "react";

function Status()
{

    const [isLearning, setIsLearning] = useState(false);
    return(<>
    
            <button onClick={()=>{setIsLearning(!isLearning)}}>Status</button>
            <p>{isLearning?"Uczy się":"Nie uczy się"}</p>
    </>)
}

export default Status;