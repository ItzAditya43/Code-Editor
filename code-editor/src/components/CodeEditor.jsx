import React, { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';

function CodeEditor() {
  const [code, setCode] = useState('// Start coding...');

  return (
    <div className="editor-container">
      <CodeMirror
        value={code}
        height="100%"
        theme="dark"
        extensions={[javascript()]}
        onChange={(value) => setCode(value)}
      />
    </div>
  );
}

export default CodeEditor;
