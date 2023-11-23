export class Exception extends Error {
  constructor(message) {
    super(message);
  }
}

export function throwException(message) {
  if (message === undefined) {
    throw new Exception("message is undefined");
  } else {
    return new Exception(message);
  }
}
