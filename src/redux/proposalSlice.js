import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    clientInfo: {
        "name": "",
        "email": "",
        "phone": "",
        "company": ""
    },
    services: [],
    pricing: {
        discount: 0,
        tax: 0
    },
    theme: "light",
    layout: "default",
    notes: ""
};

const proposalSlice = createSlice({
    name: "proposal",
    initialState,
    reducers:{
        updateField: (state, action) => {
            const { section, field, value } = action.payload;
            if(field !== undefined) {
                state[section][field] = value; 
            } else {
                state[section] = value; 
            }
        },
        addService: (state, action) => {
            state.services.push(action.payload);
        },
        removeService: (state, action) => {
            state.services = state.services.filter(
                service => service.id != action.payload
            );
        },
        switchTheme: (state) => {
            state.theme = state.theme == "light" ? "dark" : "light";
        },
        clearProposal: () => initialState
    }
})

export const {
    updateField,
    addService,
    removeService,
    switchTheme,
    clearProposal
} = proposalSlice.actions;

export default proposalSlice.reducer;

