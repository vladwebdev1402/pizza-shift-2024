import { Provider } from 'react-redux';

import { Router } from './components';
import { store } from './store';
import './styles/reset.scss';
import './styles/fonts.scss';
import './styles/globalClasses.scss';

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export { App };
