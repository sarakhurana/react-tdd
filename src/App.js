import Counter from "./components/counter/Counter";
import ApiService from "./components/service/ApiService";

function App() {
  return <ApiService url={"https://api.github.com/users/defunkt"}/>;
}

export default App;
