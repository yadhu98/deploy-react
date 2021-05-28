import './App.css';
import {useState} from 'react'
import Feed from './Components/Feed/Feed';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';
import Chatbox from './Components/Chatbox/chatbox'
import InitialChatbox from './Components/Chatbox/InitialChatbox'
import MenuContainer from './Components/MenuButton/MenuContainer';
function App() {
  const [isOpen, setIsopen] =useState(false) 
  const togglePopup =()=>{
    setIsopen(!isOpen)
  }
  return (
    <div className="App">
      <Navbar/>
      <div className="appbody">
        <Sidebar/>
        <Feed/>
        <div className="stickychat">
        <div className="Chatboxcomp" onClick={togglePopup}>
        <InitialChatbox className="fixedbox"/></div>
        {isOpen && <Chatbox className="containerSticky"
          
        
        
        />}
        </div>
      </div>
    </div>
  );
}

export default App;
