import { createStore } from 'redux';
import rootReducers from '../reducers';
// import { persistStore } from 'redux-persist';
export const store = createStore(
    rootReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()  // to visualize in redux dev tool
)

// export const persistor = persistStore(store);

export default store; 