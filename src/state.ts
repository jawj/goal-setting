
export interface State {
  q1?: string;
  q2?: string;
  q3?: string;
};

const state: State = {
  q1: undefined,
  q2: undefined,
  q3: undefined,
};

type Observer = (key: keyof State, value: any, prevValue?: any) => void;
type Observable = '_all' | keyof State;

const observers: { [k in Observable]: Observer[] } =
  Object.keys(state).reduce(function (memo, k) { memo[k] = []; return memo; }, <any>{ _all: [] });

export function observeState(key: Observable, callback: Observer) {
  observers[key].push(callback);
}

export function setState<T extends keyof State>(key: T, value: State[T]) {
  const prevValue = state[key];
  state[key] = value;
  for (const observer of [...observers[key], ...observers._all]) {
    if (value !== prevValue) observer(key, value, prevValue);
  }
}

export function getState<T extends keyof State>(key: T): State[T] {
  return state[key];
}
