import React, { useEffect, useState } from 'react';
import Editor from '@monaco-editor/react';
import { EditorButton } from '../atoms/EditorButton/EditorButton';

const EditorComponent = () => {
  const [themeData, setThemeData] = useState(null);
  const [monacoInstance, setMonacoInstance] = useState(null);

  useEffect(() => {
    fetch('/themes/Dracula.json')
      .then((res) => res.json())
      .then((data) => setThemeData(data));
  }, []);

  useEffect(() => {
    if (monacoInstance && themeData) {
      monacoInstance.editor.defineTheme('dracula', themeData);
      monacoInstance.editor.setTheme('dracula');
    }
  }, [monacoInstance, themeData]);

  const handleEditorMount = (editor, monaco) => {
    setMonacoInstance(monaco);
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '80vh',
      width: '90vw',
      backgroundColor: '#141313ff',
      color: '#fff',
      overflow: 'hidden',
    }}>
      {/* Editor File Buttons */}
      <div style={{
        display: 'flex',
       // justifyContent: 'center',
        gap: '0.5rem',
       padding: '0.5rem',
        backgroundColor: '#2e2e2eff',
        borderTop: '2px solid #f1e6e6ff',
      }}>
        <EditorButton isActive={true} />
        <EditorButton />
      </div>
      {/* style={{
  display: 'flex',
  flexDirection: 'column',
  height: '80vh',
  width: '100vw',
  backgroundColor: '#1b1a1aff',
  color: '#fff',
  margin: 0,       // <--- important
  padding: 0,      // <--- important
  overflow: 'hidden'
}}  useless for below div*/}
      <div >
        <Editor
          height="100%"
          width="100%"
          padding="1rem"
          defaultLanguage="javascript"
          defaultValue="// Write your code here..."
          onMount={handleEditorMount}
          theme="vs-dark"
          options={{
            fontSize: 16,
            fontFamily: 'Fira Code, monospace',
            minimap: { enabled: false },
            lineNumbers: 'on',
            scrollBeyondLastLine: false,
            wordWrap: 'on',
            automaticLayout: true,
            tabSize: 2,
            padding: { top: 1 },
          }}
        />
      </div>

      
    </div>
  );
};

export default EditorComponent;
