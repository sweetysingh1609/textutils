import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import { Router, Switch, Route, } from 'react-router-dom';
import {createBrowserHistory} from 'history';
export const customHistory = createBrowserHistory();  //This maintains custom history
// import {
//   BrowserRouter as Router,
//   Switch,
//   Link
// } from "react-router-dom";
// import { Routes ,Route } from 'react-router-dom';


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
      // document.title ='Edit-Your-Text-Dark Mode'
    }else{
      setMode('light');
      document.body.style.backgroundColor='white';
       showAlert("Light mode has been enabled","success");
        // document.title ='Edit-Your-Text-Light Mode'
    }

  }
  return (
  <>
  <Router history={customHistory}>
    
  <Navbar title="TextUtils" mode={mode} toogleMode={toogleMode} />
  <Alert alert={alert} />
  <div className="container my-3">
    
    <Switch>
          <Route exact path="/about" >
            <About mode={mode} />
          </Route>
          
         
          <Route exact path="/"  >
            <TextForm showAlert={showAlert} mode={mode} heading="Enter the text to analyze below"/>
          </Route>
        </Switch>
        
        
</div>

        </Router>
  
   </>
  );
}

export default App;
