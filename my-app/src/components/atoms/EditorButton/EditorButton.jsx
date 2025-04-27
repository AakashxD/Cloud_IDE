import {useNavigate} from "react-router-dom"
export const EditorButton=()=>{
    const navigator=useNavigate(); 
    const filename="index.js";
    return (
       <button >
        File.js
       </button>
    )
}