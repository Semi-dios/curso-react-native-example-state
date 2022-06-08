import { AuthState } from './AuthContext';

type AuthAction =
    | { type: 'signIn' }
    | { type: 'logOut' }
    | { type: 'changeFavIcon'; payload: string }
    | { type: 'changeUsername'; payload: string };

export const AuthReducer = (
    state: AuthState,
    action: AuthAction,
): AuthState => {
    switch (action.type) {
        case 'signIn':
            return {
                ...state,
                isLoggedIn: true,
                username: 'no-username-yet',
            };

            break;
        case 'logOut':
            return {
                ...state,
                isLoggedIn: false,
                username: undefined,
                icon: undefined,
            };

            break;
        case 'changeFavIcon':
            return {
                ...state,
                icon: action.payload,
            };

            break;
        case 'changeUsername':
            return {
                ...state,
                username: action.payload,
            };

            break;
        default:
            return state;
    }
};
