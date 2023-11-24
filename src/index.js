import React from 'react';
/** Сброс стилей */
import 'normalize.css';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
/**Хранилище*/
import store from './store/store';

/** Общие стили */
import { ErrorBoundary } from 'react-error-boundary';
import { ConfigProvider } from 'antd';
import ErrorFallback from './ErrorBoundery/ErrorFallback';
import { COLORS_VARIABLES } from './constants/colors';
import './commonStyle/_index.scss';
import { createRoot } from 'react-dom/client';


const root = createRoot(document.getElementById('root'));
root.render(

    <Provider store={store}>
      <ConfigProvider>
        <Router>
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <App />
          </ErrorBoundary>
        </Router>
      </ConfigProvider>
    </Provider>
);

ConfigProvider.config({
  theme: {
    primaryColor: COLORS_VARIABLES.primaryColor,
  },
});
