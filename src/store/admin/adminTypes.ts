import {Grant} from "../grants/grantTypes";
import {Error} from '../reduxTypes';
import {User} from "../user/userTypes";

export enum AdminTypes {
    FETCH_ADMIN_GRANTS_START = 'FETCH_ADMIN_GRANTS_START',
    FETCH_ADMIN_GRANTS_SUCCESS = 'FETCH_ADMIN_GRANTS_SUCCESS',
    FETCH_ADMIN_GRANTS_FAILURE = 'FETCH_ADMIN_GRANTS_FAILURE',
    FETCH_ADMIN_USERS_START = 'FETCH_ADMIN_USERS_START',
    FETCH_ADMIN_USERS_SUCCESS = 'FETCH_ADMIN_USERS_SUCCESS',
    FETCH_ADMIN_USERS_FAILURE = 'FETCH_ADMIN_USERS_FAILURE',
    IS_MODERATOR = "IS_MODERATOR",
}

export interface AdminState {
    grants: Grant[]
    users: User[]
    isLoading: boolean
    isModerator: boolean
    errors: Error | null
}

interface FetchAdminGrantsStartAction {
    type: typeof AdminTypes.FETCH_ADMIN_GRANTS_START
}

interface FetchAdminGrantsSuccessAction {
    type: typeof AdminTypes.FETCH_ADMIN_GRANTS_SUCCESS
    payload: Grant[]
}

interface FetchAdminGrantsFailureAction {
    type: typeof AdminTypes.FETCH_ADMIN_GRANTS_FAILURE
    payload: Error
}

interface FetchAdminUsersStartAction {
    type: typeof AdminTypes.FETCH_ADMIN_USERS_START
}

interface FetchAdminUsersSuccessAction {
    type: typeof AdminTypes.FETCH_ADMIN_USERS_SUCCESS
    payload: User[]
}

interface FetchAdminUsersFailureAction {
    type: typeof AdminTypes.FETCH_ADMIN_USERS_FAILURE
    payload: Error
}

interface IsModeratorAction {
    type: typeof AdminTypes.IS_MODERATOR;
}

export type AdminActions =
    FetchAdminGrantsFailureAction
    | FetchAdminGrantsStartAction
    | FetchAdminGrantsSuccessAction
    | FetchAdminUsersFailureAction
    | FetchAdminUsersStartAction
    | FetchAdminUsersSuccessAction
    | IsModeratorAction