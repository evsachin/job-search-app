import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import jobReducer from "./jobSlice";
import profileReducer from "./profileSlice";
import  savedJobsReducer  from "./savedJobSlice";
import analyticsReducer from './analyticsSlice'

// Load auth state from localStorage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem("auth");
    if (serializedState === null) {
      return undefined;
    }
    return {
      auth: JSON.parse(serializedState),
    };
  } catch (err) {
    console.error("Could not load state", err);
    return undefined;
  }
};

// Save auth state to localStorage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state.auth);
    localStorage.setItem("auth", serializedState);
  } catch (err) {
    console.error("Could not save state", err);
  }
};

const store = configureStore({
  reducer: {
    auth: authReducer,
    jobs: jobReducer,
    profile: profileReducer,
    savedJobs: savedJobsReducer,
    analytics: analyticsReducer,
  },
  preloadedState: loadState(),
});

// Persist only the auth slice
store.subscribe(() => {
  saveState(store.getState());
});

export default store;
