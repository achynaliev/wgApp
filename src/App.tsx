import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './shared/store/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from './shared/components/Layout';
import AppRouter from './app/router/AppRouter';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <AppRouter />
          <ToastContainer position="bottom-right" />
        </Layout>
      </Router>
    </Provider>
  );
};

export default App;
