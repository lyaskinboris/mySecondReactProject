export default function ContactActive(state = null, action) {
    switch (action.type) {
        case "USER_SELECTED":
            return action.payload;
            break;
        default:
            return state;
    }
}