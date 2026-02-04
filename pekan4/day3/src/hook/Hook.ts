import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../app/store';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector; // typed hooks state

export const useAppDispatch = () => useDispatch<AppDispatch>(); // typed hooks action
