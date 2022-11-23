import { SnackbarProps } from '@mui/material';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useAppDispatch } from '../../app/hooks';
import { RootState, AppThunk } from '../../app/store';

export interface SnackbarState extends SnackbarProps {};

const initialState: SnackbarState = {
  autoHideDuration: 6000
};

export const snackbarSlice = createSlice({
  name: 'snackbar',
  initialState,
  reducers: {
    open: (state, action: PayloadAction<SnackbarState>) => {
        state.open = true;
        state.message = action.payload.message;
    },
    close: (state) => {
        state.open = false;
    }
  },
});

export const { open, close } = snackbarSlice.actions;

export const getSnackbarState = (state: RootState) => state.snackbar;

export default snackbarSlice.reducer;
