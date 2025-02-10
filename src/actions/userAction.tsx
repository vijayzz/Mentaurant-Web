export const ADDUSER = "ADDUSER";
export const DELETEUSER = "DELETEUSER";
export const UPDATEUSER = "UPDATEUSER";

export const addUser = (profile: any) => ({
    type: ADDUSER,
    payload: profile
});

export const deleteUser = (userId: any) => ({
    type: DELETEUSER,
    payload: userId
});

export const updateUser = (updatedProfile: any) => ({
    type: UPDATEUSER,
    payload: updatedProfile
});
