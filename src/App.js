import './App.css';
import {movieService} from "./services/movieService";
import {Genres, Movies} from "./components";

function App() {

    movieService.getAll().then(({data})=>console.log(data.results))



    return (
        <div className="App">
            <Movies/>
            <Genres/>
            app
        </div>
    );
}

export default App;
