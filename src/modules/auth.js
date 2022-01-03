import { createAction, handleActions } from 'redux-actions';

const SAMEPLE_ACTION = 'aut/SAMPLE_ACTION';

export const sampleAction = createAction (SAMEPLE_ACTION);

const initialState = {};
const auth = handleActions (
    {
        [SAMEPLE_ACTION]: (state, action) => state
    }, initialState
);

export default auth;