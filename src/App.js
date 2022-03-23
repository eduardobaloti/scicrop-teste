import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBarComp";
import CarouselComp from "./components/CarouselComp";
import About from "./components/About"

function App() {
    return (
        <div className="App">
          
            <header className="App-header">
                <NavBar />
                {/*Router*/}
                <h2> ZooPet </h2>
                <CarouselComp/>
                <About/>
            </header>
            
        </div>
    );
}

export default App;
  