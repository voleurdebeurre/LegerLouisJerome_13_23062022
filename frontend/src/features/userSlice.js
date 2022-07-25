import { createSlice } from '@reduxjs/toolkit'
import axios from "axios";

const API_URL = "http://localhost:3001/api/v1/"

// Slice
const initialUser = localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))
    : null

const slice = createSlice({
    name: 'user',
    initialState: {
        user: initialUser,
    },
    reducers: {
        loginSuccess: (state, action) => {
            state.user = action.payload;
            localStorage.setItem('user', JSON.stringify(action.payload))
            console.log('login dispatched')
        },
        logoutSuccess: (state, action) =>  {
            state.user = null;
            localStorage.removeItem('user')
            localStorage.clear()
        },
        fetchedUserProfile: (state, action) =>{
            console.log('userprofile dispatched')
            state.user = action.payload;
            localStorage.clear()
            localStorage.setItem('user', JSON.stringify(action.payload))
        },
        updatedUserProfile: (state, action) =>{
            console.log('userprofile updated')
            state.user = action.payload;
            localStorage.setItem('user', JSON.stringify(action.payload))
        },
    },
});

export default slice.reducer

// Actions
const { loginSuccess, logoutSuccess, fetchedUserProfile, updatedUserProfile } = slice.actions

// Function to log in
// @params: email, password
export const login = ({ email, password }) => async dispatch => {
    try {
        // Stores the API response
        const response = await axios.post(API_URL + 'user/login', { email, password })
        // Gets the token from the response
        const responseToken = response.data.body.token;
        //Sends it to the reducer loginSuccess
        dispatch(loginSuccess({email, responseToken}));
    } catch (e) {
        return console.error(e.message);
    }
}

// Function to log out
export const logout = () => async dispatch => {
    try {
        // Calls the reducer
        return dispatch(logoutSuccess())
    } catch (e) {
        return console.error(e.message);
    }
}

// Function to GET the profile info (first & last name)
// @params: token
export const getUserProfile = (token) => async dispatch => {
    try{
        // Gets the token and builds the header to send to the endpoint
        let headers = { Authorization : `Bearer ${token}` }
        // Stores the API response
        const userProfileResponse = await axios.post(API_URL + 'user/profile', {}, { headers })
        // Gets the body of the response
        let userProfile = userProfileResponse.data.body;
        // Sends it to the reducer updatedUserProfile with the params we want stored
        dispatch(fetchedUserProfile({userProfile, token}));
    }catch (e){
        return console.error(e.message)
    }
}

// Function to UPDATE the profile info (first & last name)
// @params: token, first name, last name
export const updateUserProfile = ({token, firstName, lastName}) => async dispatch => {
    try{
        // Gets the token and builds the header to send to the endpoint
        let headers = { Authorization : `Bearer ${token}` }
        // Stores the API response
        const userProfileUpdateResponse = await axios.put(API_URL + 'user/profile', {firstName, lastName}, { headers })
        // Gets the body of the response
        let userProfile = userProfileUpdateResponse.data.body;
        // Sends it to the reducer updatedUserProfile with the params we want stored
        dispatch(updatedUserProfile({userProfile, token}));
    }catch (e){
        return console.error(e.message)
    }
}