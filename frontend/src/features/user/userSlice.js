import { createSlice } from "@reduxjs/toolkit"

const storage = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')) : null

const initialState = {
    username: storage?.username ? storage.username : null,
    email: storage?.email ? storage.email : null,
    token: storage?.token ? storage.token : null,
    isAdmin: storage?.isAdmin ? storage.isAdmin : false,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            const data = action.payload
            state.username = data.username;
            state.email = data.email;
            state.token = data.token;
            state.isAdmin = data.isAdmin;
            localStorage.setItem('userData', JSON.stringify(data))
        },
        logOut: (state, action) => {
            state.username = null;
            state.email = null;
            state.token = null;
            state.isAdmin = false;
            localStorage.setItem('userData', null)
        }
    },
})

export const { setCredentials, logOut } = userSlice.actions;

export default userSlice.reducer;

export const selectCurrentUsername = (state) => state.user.username;
export const selectCurrentEmail = (state) => state.user.email;
export const selectCurrentToken = (state) => state.user.token;
export const selectCurrentIsAdmin = (state) => state.user.isAdmin;