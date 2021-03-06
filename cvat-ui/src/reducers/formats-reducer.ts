import { FormatsActionTypes, FormatsActions } from 'actions/formats-actions';
import { AuthActionTypes, AuthActions } from 'actions/auth-actions';

import { FormatsState } from './interfaces';

const defaultState: FormatsState = {
    annotationFormats: [],
    datasetFormats: [],
    initialized: false,
    fetching: false,
};

export default (
    state: FormatsState = defaultState,
    action: FormatsActions | AuthActions,
): FormatsState => {
    switch (action.type) {
        case FormatsActionTypes.GET_FORMATS: {
            return {
                ...state,
                fetching: true,
                initialized: false,
            };
        }
        case FormatsActionTypes.GET_FORMATS_SUCCESS:
            return {
                ...state,
                initialized: true,
                fetching: false,
                annotationFormats: action.payload.annotationFormats,
                datasetFormats: action.payload.datasetFormats,
            };
        case FormatsActionTypes.GET_FORMATS_FAILED:
            return {
                ...state,
                initialized: true,
                fetching: false,
            };
        case AuthActionTypes.LOGOUT_SUCCESS: {
            return {
                ...defaultState,
            };
        }
        default:
            return state;
    }
};
