import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);


  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 1500);
  }

  const toogleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enabled","success");
      document.title ='Edit-Your-Text-Dark Mode'
    }else{
      setMode('light');
      document.body.style.backgroundColor='white';
       showAlert("Light mode has been enabled","success");
        document.title ='Edit-Your-Text-Light Mode'
    }

  }
  return (
  <>
  <Navbar title="TextUtils" mode={mode} toogleMode={toogleMode} />
  <Alert alert={alert} />
  <div className="container my-3">
  <TextForm showAlert={showAlert} mode={mode} heading="Enter the text to analyze below"/>
  {/* <About/> */}
  </div>
  </>
  );
}

export default App;
