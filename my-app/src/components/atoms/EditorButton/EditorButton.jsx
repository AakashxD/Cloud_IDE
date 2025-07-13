import './EditorButton.css'
export const EditorButton=({isActive})=>{
    
    return (
       <button className="editor-button "
        style={{
           background: (isActive)?"Black":"purple"
        }}
        >
        File.js
       </button>
    )
}