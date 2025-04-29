import './EditorButton.css'
export const EditorButton=({isActive})=>{
    
    return (
       <button className="editor-button"
        style={{
           background: (isActive)?"white":"yellow"
        }}
        >
        File.js
       </button>
    )
}