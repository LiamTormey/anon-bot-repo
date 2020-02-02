import React from 'react';
import logo from './logo.svg';
import './App.css';
import MessagePage from './pages/MessagePage';
import NavigationBar from './components/common/NavigationBar';

function App() {
  return (<>
    <NavigationBar></NavigationBar>
    <div className="App">
      <MessagePage></MessagePage>
    </div>
  </>);
}


export default App;
