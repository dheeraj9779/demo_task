import { createAction, props } from "@ngrx/store";
import { userDetail } from "../user.state";


/**Actions related to user authentication. These actions are used to trigger state changes in the application.*/

//Triggers a user login attempt having payload {username, password}
export const login = createAction(
  '[Login] User Login',
  props<{ username: string, password: string }>()
);

//Indicates a successful user login having payload {detail}
export const loginSuccess = createAction(
  '[Login] Login Success',
  props<{ detail: userDetail }>()
);

//Indicates a failed user login attempt having payload {error}
export const loginFailure = createAction(
  '[Login] Login Failure',
  props<{ error: string }>()
);

//Triggers a user logout.
export const logout = createAction(
  '[Logout] User Logout',
);
