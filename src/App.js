import MainRouterProvider from "./components/Main";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import store from "./utils/Store";

function App() {
  return (
    <div className="app">
      <Provider store={store}>
        <MainRouterProvider />
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
