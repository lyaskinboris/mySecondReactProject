export const getUser = (user) => {
    return{
        type: "USER_SELECTED",
        payload: user
    }
};