import { createAction } from '@reduxjs/toolkit';

export const pushNextUrl = createAction<string>('router/push');
