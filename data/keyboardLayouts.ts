import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface KeyboardLayoutType {
    keys: string[],
    type: 'predefined' | 'custom',
    id: string,
}

export interface CustomKeyboardLayoutType extends KeyboardLayoutType {
    type: 'custom',
}

export interface KeyboardLayoutState {
    layoutList: CustomKeyboardLayoutType[],
}

const initialState: KeyboardLayoutState = {
    layoutList: [],
};

const keyboardLayoutSlice = createSlice({
    name: 'keyboardLayout',
    initialState,
    reducers: {
        // setLayout(state, action: PayloadAction<string>) {
        //     state.layout = action.payload;
        // },
    },
});

// export const { setLayout } = keyboardLayoutSlice.actions;
export default keyboardLayoutSlice.reducer;