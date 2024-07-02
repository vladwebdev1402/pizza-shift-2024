import { Provider } from 'react-redux';

import './styles/reset.scss';
import './styles/fonts.scss';
import './styles/globalClasses.scss';
import { Router } from './components';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export { App };
