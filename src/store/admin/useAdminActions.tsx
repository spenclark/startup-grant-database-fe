import {useCallback} from 'react';
import {useDispatch} from "react-redux";
import {axiosWithAuth as axios} from "../utils/axiosConfig";
import {AdminTypes} from "./adminTypes";

export const useAdminActions = () => {
    const dispatch = useDispatch();

    const fetchAdminGrants = useCallback((token: string) => {
        dispatch({type: AdminTypes.FETCH_ADMIN_GRANTS_START});
        axios(token).get('/admin/grants').then(res => dispatch({
            type: AdminTypes.FETCH_ADMIN_GRANTS_SUCCESS,
            payload: res.data
        })).catch(error => dispatch({type: AdminTypes.FETCH_ADMIN_GRANTS_FAILURE, payload: error.response}))
    }, [dispatch]);

    const fetchAllUsers = useCallback((token: string) => {
        dispatch({type: AdminTypes.FETCH_ADMIN_USERS_START});
        axios(token).get('/admin/users').then(res => dispatch({
            type: AdminTypes.FETCH_ADMIN_USERS_SUCCESS,
            payload: res.data
        })).catch(error => dispatch({type: AdminTypes.FETCH_ADMIN_USERS_FAILURE, payload: error.response}))
    }, [dispatch]);

    const isModerator = useCallback(() => {
        dispatch({type: AdminTypes.IS_MODERATOR});
    }, [dispatch]);

    const fetchAllRoles = useCallback((token: string) => {
        dispatch({type: AdminTypes.FETCH_ADMIN_ROLES_START});
        axios(token).get('/admin/users/roles').then(res => dispatch({
            type: AdminTypes.FETCH_ADMIN_ROLES_SUCCESS,
            payload: res.data
        })).catch(error => dispatch({type: AdminTypes.FETCH_ADMIN_ROLES_FAILURE, payload: error.response}))
    }, [dispatch]);

    return {fetchAdminGrants, isModerator, fetchAllUsers, fetchAllRoles}
};

export interface UseAdminActions {
    fetchAdminGrants: (token: string) => void
    isModerator: () => void
    fetchAllUsers: (token: string) => void
    fetchAllRoles: (token: string) => void
}
