import React from 'react';
import './index.css'; // Global styles
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Jobs from './pages/Jobs/Jobs';
import SignUp from './pages/SignUp/SignUp';
import Resources from './pages/Resources/Resources';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import ContactForm from './pages/Contact/ContactForm';
import Login from './pages/Login/Login';
import Services from './pages/Services/Services';

const routes = [
  { path: '/', element: <Home /> },
  { path: '/jobs', element: <Jobs /> },
  { path: '/signup', element: <SignUp /> },
  { path: '/resources', element: <Resources /> },
  { path: '/about', element: <About /> },
  { path: '/contact', element: <Contact /> },
  { path: '/login', element: <Login /> },
  { path: '/services', element: <Services /> },
  { path: '/contactform', element: <ContactForm /> },
];

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;



//Key points to remember on above code in App.js for study purposes

//Imports:

//`BrowserRouter as Router`: main router component that wraps your entire application and enables routing.
//`Route`: component is used to define a route and the component that should be rendered when the path matches.
//`Switch`: component renders the first child `Route` that matches the location.
//useful to ensure only one route is rendered at a time.

//Header and Footer Components
//These components are typically displayed on every page

//Route Definitions:
//<Route path="/" exact component={HomePage} /> : This route matches the root URL(`/`) and renders the `HomePage` component.
//The `exact` prop ensures that this route only matches exactly the root path.
//`<Route path="/jobs" component={JobList} />`: This route matches `/jobs` and renders the `JobList` component.
//`<Route path="/job/:id" component={JobDetails} />`: This route matches `/job/:id` where `:id` is a route parameter.
//    -this is used for dynamic routing to show details of a specific job.
//<Route path="/profile" component={UserProfile} />: This route matches /profile and renders the UserProfile component.
//<Route path="/signup" component={SignUp} />: This route matches /signup and renders the SignUp component.
//<Route path="/login" component={Login} />: This route matches /login and renders the Login component.

//Point to ask Esraa in class:
//Route components inside  Routes use the element  prop instead of component.
//The element prop should be passed a aReact element (JSX) rather than a component class or function.
