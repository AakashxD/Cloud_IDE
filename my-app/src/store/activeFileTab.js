import { create   } from "zustand";
export const useActiveFileTabStore=create((set)=>{
     return {
        // initial state 
        activeFileTab:null,
        // function to state the change
        setActiveFileTab:(path,value,extension)=>{
            set({
                activeFileTab:{
                    path:path,
                    value:value,
                    extension:extension
                }
            })
        }
     }
});
