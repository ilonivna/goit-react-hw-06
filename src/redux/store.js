import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contactsReducer } from "./contactsSlice";
import { filtersReducer } from "./filtersSlice";




const persistConfig = {
    key: "contacts",
    storage
};
const persistedContactsReducer = persistReducer(persistConfig, contactsReducer);

const rootReducer = combineReducers({
    contacts: persistedContactsReducer,
    filters: filtersReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})



export const persistor = persistStore(store);