import { configureStore } from "@reduxjs/toolkit";
import { routeReducer } from "./slices/routeSlice";

const store = configureStore({
  reducer: {
    route: routeReducer,
  },
});

export { store };
export type RootState = ReturnType<typeof store.getState>;
