import React from 'react';
import { useTreeStructureStore } from '../../../store/treeStructureStore';
import { useEffect } from 'react';

const TreeStructure = () => {

    const {treeStructure,setTreeStructure}=useTreeStructureStore();
    useEffect(()=>{
          if(treeStructure){
             console.log('tree:',treeStructure)
          }
          else{
            console.log("data is set")
             setTreeStructure();
          }
    },[setTreeStructure,treeStructure]);

  return (
    <div>TreeStructure</div>
  )
}

export default TreeStructure