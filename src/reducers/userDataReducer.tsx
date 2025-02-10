import { ADDUSER, DELETEUSER, UPDATEUSER } from "../actions/userAction";

const initialState = {
    userProfileData: [
        {
            id: 1,
            name: "John Doe",
            staffId: "REC230497",
            joiningDate: "21-09-2023",
            workingHours: "12",
            workShift: "Morning"
        }
    ]
};

export default function userDataReducer(state = initialState, action: any) {
    switch (action.type) {
        case ADDUSER:
            return {
                ...state,
                userProfileData: [...state.userProfileData, action.payload]
            };

        case DELETEUSER:
            return {
                ...state,
                userProfileData: state.userProfileData.filter(user => user.id !== action.payload)
            };

        case UPDATEUSER:
            return {
                ...state,
                userProfileData: state.userProfileData.map(user =>
                    user.id === action.payload.id ? { ...user, ...action.payload } : user
                )
            };

        default:
            return state;
    }
}
