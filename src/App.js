import './App.css';
import {Person} from "./components/person/Person";
import {Character} from "./components/rick_and_morty/Character";


function App() {
    return (
        <div className="App">
            <Person/>
            <Character/>
        </div>
    );
}

export default App;
