import UserActionType from './user.types';

const setCurrentUser = user => ({
    type : UserActionType.SET_CURRENT_USER,
    payload : user
});

export default setCurrentUser;