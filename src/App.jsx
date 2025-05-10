import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home.jsx';
import About from './pages/about.jsx';
import Signup from './pages/signup.jsx';
import Movies from "./pages/movies.jsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path = "/signup" element = {<Signup />}/>
                <Route path = "/movies" element = {<Movies />}/>
            </Routes>
        </Router>
    );
}

export default App;
