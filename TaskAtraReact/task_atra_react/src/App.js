import React from "react";
import './App.css';
import Router from './Component/router'
import store from './Component/Redux/store'
import {Provider} from 'react-redux'
import logo from './logo.svg';
function App() {
  return (
    <div className="App">
          {/* <header className="App-header"> 
      </header> */}
         {/* <img src={logo} className="App-logo" alt="logo" />     */}
      <Provider store={store} >
        <Router></Router>
      </Provider>
      
    </div>
  );
}

export default App;



// import logo from './logo.svg';
// import './App.css';
// import WorkerList from './Middleware/crud'
// function App() {
//   return (
//     <div className="App">
//       {/* <WorkerList></WorkerList> */}
//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> */}
//     </div>
//   );
// }

// export default App;
