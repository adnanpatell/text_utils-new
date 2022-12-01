//import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, {  useState } from 'react';
import About from './Components/About';
import Alert from './Components/Alert';
import {
BrowserRouter as Router,
  Switch,
Route,
} from "react-router-dom";

function App() {
  const [mode,setMode] = useState('light');
  const [alert,setAlert]=useState();
  
  const showAlert = (message, type) =>{
    setAlert({
      msg : message,
      type : type
      
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'gray';
      showAlert("Dark Mode HAs Been ENabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode HAs been Enabled", "success");
    }
  }
    const togglegreen = () =>{
      if(mode === 'light'){
        document.body.style.backgroundColor = 'green';
        showAlert("Youve Entered Green Mode", "success");

      }
      else{
        setMode('light');
        showAlert("Light Mode Has Been Enabled");
      }
    }
  
  return (
  <>
  <Router>
  <Navbar title="TextUtils Blog"  mode={mode} toggleMode={toggleMode} togglegreen={togglegreen}/>
  
    <Alert  alert={alert} />
    <div className="container mx-3">
      
      <Switch>
      <Route exact path="/about">
            <About mode={mode} />
          </Route>
  
          <Route exact path="/">
          {<TextForm showAlert={showAlert} heading="Text Analyzer" mode={mode} />}
                
          </Route>
        </Switch>
    </div>
    </Router>
    
  </> 
    
  );
}

export default App;
