import { createReducer, on } from "@ngrx/store";
import { login, loginFailure, loginSuccess, logout } from "./user.action";
import { Users } from "../user.state";


/**Contains a reducer function that handles state changes related to user authentication.
This reducer is used by the NgRx store to update the state based on dispatched actions.*/


//The initial state of the reducer is an object of type Users, which represents the user's authentication details
const initialState: Users = {
  detail: {
    name:'',
    token:''
  },
  error: '',
  isLoading: false
};


//Exports the loginReducer constant, which is the reducer function defined using createReducer.
//This reducer can be used as part of the NgRx store configuration to handle user authentication state changes.
export const loginReducer = createReducer(initialState,

  //Handles Login actions
  on(login, state => ({ ...state, isLoading: true })),

  //Handles LoginSuccess actions
  on(loginSuccess, (state, { detail }) => ({ ...state, detail, isLoading: false })),

  //Handles LoginFailure actions
  on(loginFailure, (state, { error }) => ({ ...state, error, isLoading: false })),

  //Handles Logout actions
  on(logout, state => ({ detail:{name: '',token: ''},error: '', isLoading: false }))
);

