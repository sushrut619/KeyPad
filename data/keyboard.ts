import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'
import { ViewStyle } from 'react-native'

import { layout as alphabeticalLayout } from '@/assets/keyboardLayouts/alphabetical';
import type { LayoutName } from '@/assets/keyboardLayouts';

export interface KeyboardState {
  style: ViewStyle
  layout: LayoutName
}

const initialState: KeyboardState = {
  style: {
    flex: 1, 
    flexWrap: 'wrap', 
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 8,
    maxHeight: '50%',
    margin: 4,
  },
  layout: 'qwerty',
}

export const keyboardSlice = createSlice({
  name: 'keyboard',
  initialState,
  reducers: {
  },
})

// // Action creators are generated for each case reducer function
export const { } = keyboardSlice.actions

export default keyboardSlice.reducer