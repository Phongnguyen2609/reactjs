import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./layouts/Navbar";
import Home from "./pages/Home";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <div className="mt-5">
                <Home/>
            </div>
        </div>
    );
}

export default App;
