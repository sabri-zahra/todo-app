import { PreloadedState, combineReducers, configureStore } from '@reduxjs/toolkit';
import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import searchFormReducer from './todo/searchFormSlice';
import todoReducer from './todo/todoSlice';
//import themeReducer from './theme/themeSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  todos: todoReducer,
  // searchForm: searchFormReducer
  //theme: themeReducer,
});

export const presistedReducer = persistReducer(persistConfig, rootReducer);

const configureAppStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: presistedReducer,
    devTools: true,
    preloadedState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
  });
};

// export const store1 = configureStore({
//   reducer: {
//     searchForm: searchFormReducer,
//   },
// });

export const store = configureAppStore();

// typed state and dispatch
export type RootState = ReturnType<typeof presistedReducer>;
export type AppStore = ReturnType<typeof configureAppStore>;
export type AppDispatch = AppStore['dispatch'];

// typed hooks
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export { addTodo, updateTodo, deleteTodo } from './todo/todoSlice';
//export { toggleTheme } from './theme/themeSlice'