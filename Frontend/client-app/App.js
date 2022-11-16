import StackSwitcher from './navigation/StackSwitcher';
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './Redux/store';
import { Provider } from 'react-redux';
import {QueryClientProvider} from "@tanstack/react-query";
import {QueryClient} from "@tanstack/react-query";
export const queryClient = new QueryClient();
import configureMutations from './query/mutations/configureMutations';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
configureMutations(queryClient)

export default function App() {
  return (
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <QueryClientProvider client={queryClient}>
    <StackSwitcher/>
    </QueryClientProvider>

    </PersistGate>
    </Provider>

    );
}
