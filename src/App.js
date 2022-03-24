import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBarComp";
import CarouselComp from "./components/CarouselComp";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <NavBar />
            </header>
            <body className="App-body">
                <CarouselComp />
                <About />
            </body>
            <footer className="App-footer">
                <Contact/>
            </footer>
        </div>
    );
}

export default App;
