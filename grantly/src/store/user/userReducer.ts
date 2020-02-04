import {UserActions, UserState, UserTypes} from "./userTypes";

const initialState: UserState = {
    currentUser: {
        email: '',
        email_verified: false,
        nickname: '',
        name: '',
        picture: '',
        sub: '',
        updated_at: ''
    },
    token: null,
    favoriteGrants: [],
    isModerator: false,
    isLoading: false,
    errors: null,
};

export const userReducer = (state = initialState, action: UserActions): UserState => {
    switch (action.type) {
        case UserTypes.FETCH_USER_START:
            return {...state, isLoading: true};
        case UserTypes.FETCH_USER_SUCCESS:
            return {...state, isLoading: false, errors: null, currentUser: action.payload};
        case UserTypes.FETCH_USER_FAILURE:
            return {...state, isLoading: false, errors: action.payload};
        case UserTypes.SET_USER_FROM_AUTH0:
            return {...state, isLoading: false, errors: null, currentUser: {...action.payload}};
        case UserTypes.IS_MODERATOR:
            return {...state, isModerator: true};
        case UserTypes.SET_TOKEN:
            return {...state, token: action.payload};
        case UserTypes.FETCH_FAVORITES_START:
            return {...state, isLoading: true};
        case UserTypes.FETCH_FAVORITES_SUCCESS:
            return {...state, favoriteGrants: action.payload, isLoading: false};
        case UserTypes.FETCH_FAVORITES_FAILURE:
            return {...state, isLoading: false, errors: action.payload};
        case UserTypes.RESET_USER:
            return initialState;
        default:
            return state;
    }
};
