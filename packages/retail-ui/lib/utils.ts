export const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const emptyHandler = () => undefined;

export class CancelationError extends Error {
  public code = 'CancelationError';
}

export function taskWithDelay(task: () => void, ms: number) {
  let cancelationToken: (() => void) = () => null;

  new Promise((resolve, reject) => {
    cancelationToken = reject;
    setTimeout(resolve, ms);
  })
    .then(task)
    .catch(() => null);

  return cancelationToken;
}

// tslint:disable-next-line: ban-types
export function isFunction<T>(x: T | Function): x is Function {
  return typeof x === 'function';
}
