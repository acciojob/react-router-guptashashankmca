
// import React from "react";
// import './../styles/App.css';

// const App = () => {
//   return (
//     <div>
//         {/* Do not remove the main div */}
//     </div>
//   )
// }

// export default App


import React from 'react';
import './../styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './Navigation';
import {Link} from 'react-router-dom';
import Home from './Home';
import About from './About';

const App = () => (
  <Router>
    <div>
      {/* Navigation links */}
      <Navigation />
      {/* Route definitions */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  </Router>
);

export default App;