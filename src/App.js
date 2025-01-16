import { Provider } from "react-redux";
import Routing from "./Components/Routing";
import appStore from "./utils/appStore";

function App() {
  return (
    <div className="App">
      <Provider store={appStore} >
        <Routing />
      </Provider>
    </div>
  );
}

export default App;
