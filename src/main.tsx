import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import 'react-toastify/dist/ReactToastify.min.css';
import { PersistGate } from 'redux-persist/integration/react';

import { App } from './App.jsx';
import './styles/index.css';
import { persistor, store } from './store/store.tsx';
import { Toast } from '@/shared/Toast/Toast.tsx';
import { Loader } from '@/shared/Loader/Loader.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <PersistGate persistor={persistor} loading={<Loader />}>
            <Toast />
            <App />
        </PersistGate>
    </Provider>
);
