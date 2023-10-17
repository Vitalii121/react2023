import './App.css';
import {Persons} from "./components/person/Persons";
import {Characters} from "./components/rick_and_morty/Characters";


function App() {
    return (
        <div className="App">
            <Persons/>
            <Characters/>
        </div>
    );
}

export default App;
