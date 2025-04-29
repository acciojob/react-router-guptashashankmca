
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
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './Navigation';
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


// Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
    </ul>
  </nav>
);

export default Navigation;


// Home.js
import React from 'react';

const Home = () => (
  <div>
    <h1>Welcome to my website!</h1>
  </div>
);

export default Home;


// About.js
import React from 'react';

const About = () => (
  <div>
    <h1>This is a sample React Router program.</h1>
  </div>
);

export default About;