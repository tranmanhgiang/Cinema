import { AppConstants } from '@common/constants';
import AsyncStorage from '@react-native-community/async-storage';
import { applyMiddleware, createStore } from 'redux';
import { PersistConfig, persistReducer, persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

// Import the state interface and our combined reducers/sagas.
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

function configureStore(initialState: {}) {
    // create the redux-saga middleware
    const sagaMiddleware = createSagaMiddleware();

    const persistConfig: PersistConfig<any> = {
        key: 'root',
        storage: AsyncStorage,
        debug: AppConstants.ENVIRONMENT === 'dev',
        blacklist: ['auth'],
    };

    const persistedReducer = persistReducer(persistConfig, rootReducer);

    const store = createStore(persistedReducer, initialState, applyMiddleware(sagaMiddleware));

    // Don't forget to run the root saga, and return the store object.
    sagaMiddleware.run(rootSaga);
    const persistor = persistStore(store);

    return { store, persistor };
}

export default configureStore({});
