import StackSwitcher from './navigation/StackSwitcher';
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './Redux/store';
import { Provider } from 'react-redux';

export default function App() {
  return (
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <StackSwitcher/>
    </PersistGate>
    </Provider>

    );
}
