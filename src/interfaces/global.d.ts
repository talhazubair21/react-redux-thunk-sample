declare global {
  // Main reducer
  interface AppStore {
    app: AppStoreState;
  }

  // App Reducer
  interface AppStoreState {
    tasks: any[];
    loading: Boolean;
  }
}

export {};
