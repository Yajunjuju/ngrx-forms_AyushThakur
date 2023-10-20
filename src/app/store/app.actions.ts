import { createAction, props } from "@ngrx/store";


export const changeMessageAction = createAction(
  '[Child Message] Change',
  // 定義ID
  props<{ payload: string}>()
);

export const storeUpdateMessageAction = createAction(
  '[Child Message] Store Update Effect',
  props<{ payload: string}>()
);

export type actionInterface = { payload: string; type: string};
// 定義資料型態
