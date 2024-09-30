import { createSelector } from '@ngrx/store';
import { Users } from '../user.state';


/**It contains a set of selectors that can be used to select specific parts of the
* user authentication state from the NgRx store.*/


//Selects the entire user authentication state.
export const selectLogin = (state:{users:Users}) => state.users;

//Selects the user's authentication token
export const selectToken = createSelector(
  selectLogin,
  (state) => state
);

//Selects any error that occurred during the login process.
export const selectError = createSelector(
  selectLogin,
  (state) => state.error
);

// Selects a boolean indicating whether the login process is currently in progress.
export const selectIsLoading = createSelector(
  selectLogin,
  (state) => state.isLoading
);
