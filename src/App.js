import { AppRoutes } from './routes';
import { Provider } from "react-redux"
import { store } from './redux';
function App() {
  return (
    <Provider store={store} >
      <AppRoutes />
    </Provider>
  );
}

export default App;
