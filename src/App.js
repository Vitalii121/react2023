// з jsonplaceholder отримати всі пости в компоненту Posts.js
// відобразити кожного інформацію (id,title) з кожного поста (компонента Post)
// Зробити кнопку вибора поста, при натисканні на яку в Posts.js ви покажете детальну інфомацію про пост(всю інфу)
//
//
//
// =====
// є API от SpaceX
// https://api.spacexdata.com/v3/launches/
//     потрібно вивести всі запуски кораблів окрім 2020 року
// репрезентувати тільки окремі поля (зазначені в скрнішоті в папці)
import './App.css';
import {Posts} from "./components/PostsContainer/Posts/Posts";
import {Launches} from "./components/LaunchesContainer/Launches/Launches";


function App() {
    return (
        <div className="App">
            <Posts/>
            {/*<Launches/>*/}
        </div>
    );
}

export default App;
