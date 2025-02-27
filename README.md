# AI Code Editor

**AI Code Editor** (not thought of any name yet) is a simple, web-based code editor inspired by the look and feel of VS Code and the efficiency of NeoVim. Built with React and CodeMirror, this project is currently focused on providing a sleek, dark-themed UI with basic file management functionality.

## Overview

This project is in its very early stages. The current version includes:
- A **VS Code–like interface** with a header, main editor area, and a right-hand sidebar.
- A **Code Editor** powered by CodeMirror that supports JavaScript syntax highlighting.
- A **Status Bar** at the bottom displaying basic file information.

## Features

- **Modern UI:**  
  A dark, clean, and responsive interface modeled after VS Code, designed to deliver a distraction-free coding experience.

- **File Management:**  
  - Create new files via a simple input.
  - View and select files from the explorer on the right.

- **Code Editing:**  
  - Real-time editing using CodeMirror.
  - Syntax highlighting for JavaScript (with plans to support more languages).

- **Future Enhancements:**  
  - Additional file operations such as renaming and deleting.
  - Multiple tabs for managing several open files.
  - Integrated terminal and output panels.
  - Theme customization with support for GitHub themes and more.
  - Advanced features like Vim keybindings, AI-powered code suggestions, and an extension/plugin system.

## File Structure

The project is organized as follows:

```
src/
├── App.jsx                   // Main application container
├── index.css                 // Global styles (vanilla CSS)
├── components/               
│   ├── CodeEditorEnhanced.jsx  // CodeMirror editor integration
│   ├── Toolbar.jsx             // Toolbar for future actions
│   ├── FileExplorer.jsx        // Right sidebar for file creation and management
│   ├── StatusBar.jsx           // Bottom status bar for file info and feedback
│   └── Tabs.jsx                // (Future) Component for managing multiple open files
└── main.jsx                  // React entry point
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm

### Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/yourusername/code-editor.git
   cd code-editor
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Run the Development Server:**
   ```bash
   npm run dev
   ```
   Then open your browser and navigate to [http://localhost:5173](http://localhost:5173).

## Future Roadmap

- **File Operations:** Expand functionality to include renaming, deleting, and organizing files.
- **Enhanced Code Editing:** Support for multiple languages, auto-completion, and code linting.
- **Terminal Integration:** Embed a fully functional terminal within the editor.
- **Theme & Extensions:** Allow users to choose from various themes and add extensions to customize the editor further.
- **NeoVim Integration:** Implement Vim-like keybindings and modal editing for power users.
- **AI-Powered Features:** Integrate AI tools for code suggestions, error detection, and more.

## Contributing

Contributions, feedback, and feature suggestions are welcome! Please open an issue or submit a pull request if you’d like to help improve the project.
You can connect to me by messaging me on X.com (link in the profile).

## License

This project is licensed under the [MIT License](LICENSE).

---

This README provides an overview that's both comprehensive and accessible for beginners while clearly outlining current functionality and future plans without overhyping the early-stage features. Let me know if you need further modifications!
