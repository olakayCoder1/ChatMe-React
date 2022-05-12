import './App.css';
import LeftSide from './components/navbar/LeftSide';
import Display from './components/display/Display';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";





function User(){
  return <h1>USER PAGE</h1>
}


function Home(){
  return <h1>HOME PAGE</h1>
}


function NoMatch(){
  return <h1>404 ERROR</h1>
}

function About(){
  return <h1>About</h1>
}

function App() {
  return (
    // <Router >
    //    <div>
    //     <nav>
    //       <ul>
    //         <li>
    //           <Link to="/">Home</Link>
    //         </li>
    //         <li>
    //           <Link to="/about">About</Link>
    //         </li>
    //         <li>
    //           <Link to="/users">Users</Link>
    //         </li>
    //       </ul>
    //     </nav>

       
        
    //       <Routes>
    //           <Route path="/about" element={<About />} />
               
    //           <Route path="/users" element={<User />} />
    

    //           <Route path="/" element={<Home />} />
             

    //           {/* <Route>
    //             <NoMatch />
    //           </Route> */}
    //       </Routes>
            
    
    //   </div>
    // </Router>
    <div className='App'>
      <LeftSide />
      <Display />
    </div>

   
  );
}

export default App;