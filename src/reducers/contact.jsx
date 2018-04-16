const initialState = {
    mainUser:
        {
            id: 0,
            name: "Борис",
            age: 22,
            phoneNumber: "7-894-974-2672",
            textInfo: "проживает там-то, учится там-то, работает, а вот не работает, но спортом занимается, что тоже неплохо!!!"
        }
};
export default function contactList(state = initialState) {
    return state;
}