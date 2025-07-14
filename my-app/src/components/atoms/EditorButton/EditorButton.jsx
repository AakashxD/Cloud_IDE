import './EditorButton.css'
export const EditorButton=({isActive})=>{
    function handleClick(){
      // todo
    }
    return (
      <div className='btn-div'>
       <button className="editor-button "
        style={{
           background: (isActive)?"Black":"purple",
         //   color:isActive? 'white': '#959eba'
        }}
        onClick={handleClick}
        >
        File.js
       </button>
       </div>
    )
}