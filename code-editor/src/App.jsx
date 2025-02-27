import React from 'react';
import Sidebar from './components/Sidebar';
import FileExplorer from './components/FileExplorer';
import CodeEditor from './components/CodeEditor';
import Toolbar from './components/Toolbar';
import StatusBar from './components/StatusBar';

function App() {
  return (
    <div className="app-container">
      <div className="main-content">
        <CodeEditor />
      </div>
      <div className="right-panel">
        <Toolbar />
        <Sidebar />
        <FileExplorer />
      </div>
      <StatusBar />
    </div>
  );
}

export default App;
