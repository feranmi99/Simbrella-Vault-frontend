// brandSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isPopupOpen: false,  // Controls popup visibility
    formData: {          // Stores form inputs
        name: '',
        description: '',
        logo: null,
        logoPreview: '',
    },
};

const brandSlice = createSlice({
    name: 'brand',
    initialState,
    reducers: {
        // Open/close popup
        openPopup: (state) => {
            state.isPopupOpen = true;
        },
        closePopup: (state) => {
            state.isPopupOpen = false;
        },

        // Update form fields
        setFormData: (state, action) => {
            state.formData = { ...state.formData, ...action.payload };
        },

        // Reset form
        resetForm: (state) => {
            state.formData = initialState.formData;
        },
    },
});

export const { openPopup, closePopup, setFormData, resetForm } = brandSlice.actions;
export default brandSlice.reducer;