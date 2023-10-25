
import './App.css';
import {UsersContainer} from "./components/UserConteiner/UsersConteiner";
import {CommentsContainer} from "./components/CommentsConteiner/ComentsConteiner";

function App() {
  return (
    <div className="App">
      <UsersContainer/>
      <CommentsContainer/>

    </div>
  );
}

export default App;
