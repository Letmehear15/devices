import { createAction } from '@reduxjs/toolkit';

export const redirectTo = createAction<string>('router/redirect_to');

export type RouterActions = ReturnType<typeof redirectTo>;
