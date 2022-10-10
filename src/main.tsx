import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';
import { App } from './containers/hooks/App';
import { rootReducer } from './storage/reducers/recipe';
import './utils/config/css';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);