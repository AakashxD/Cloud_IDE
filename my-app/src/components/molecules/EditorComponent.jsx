import React, { useEffect, useState } from 'react';
import Editor from '@monaco-editor/react';

const EditorComponent = () => {
  const [themeData, setThemeData] = useState(null);
  const [monacoInstance, setMonacoInstance] = useState(null);

  useEffect(() => {
    // fetch theme JSON
    fetch('/themes/Dracula.json') 
      .then((res) => res.json())
      .then((data) => {
        setThemeData(data);
      });
  }, []);

  useEffect(() => {
    // when both monaco and theme are ready
    // we can write func instead for this
    if (monacoInstance && themeData) {
      monacoInstance.editor.defineTheme('dracula', themeData);
      monacoInstance.editor.setTheme('dracula');
      console.log('theme updated!');
    }
  }, [monacoInstance, themeData]); // watch both

  const handleEditorMount = (editor, monaco) => {
    setMonacoInstance(monaco);
  };

  return (
    <div>
      <Editor
        height="90vh"
        width="100vw"
        defaultLanguage="javascript"
        defaultValue="// Write your code"
        onMount={handleEditorMount}
        options={{
          fontSize: 18,
          fontFamily: 'monospace',
        }}
      />
    </div>
  );
};

export default EditorComponent;
