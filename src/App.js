import './App.css';
import ReactQuill from 'react-quill';
import useEditor from './hooks/useEditor';
import 'react-quill/dist/quill.snow.css';

function App() {

  const [{ value }, {handleChange,generateJSON}] = useEditor();

  return (
    <div className="App">
      <ReactQuill theme="snow" value={value} formats='block'  onChange={handleChange} />
      <button onClick={generateJSON}>Generate JSON</button>

      <br />
      <strong>Note:</strong> <span>This is very basic implementation, open your console and see the output</span>
      <span>Contact For the further more.</span>
    </div>
  );
}

export default App;
