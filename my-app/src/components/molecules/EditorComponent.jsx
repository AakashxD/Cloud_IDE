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
    <div style={{ height: '100vh', width: '100vw', backgroundColor: '#1e1e1e', margin: 0, padding: 0 }}>
      <Editor
        height="100%"
        width="100%"
        defaultLanguage="javascript"
        defaultValue="// Write your code here..."
        onMount={handleEditorMount}
        theme="vs-dark" // fallback until Dracula loads
        options={{
          fontSize: 16,
          fontFamily: 'Fira Code, monospace',
          minimap: { enabled: false },
          lineNumbers: 'on',
          scrollBeyondLastLine: false,
          wordWrap: 'on',
          automaticLayout: true,
          tabSize: 2,
          padding: { top: 16 },
        }}
      />
      <div>
        <EditorButton  isActive={true}/>
        <EditorButton/>
      </div>
    </div>
  );
};

export default EditorComponent;
