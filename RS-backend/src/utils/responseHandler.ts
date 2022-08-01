interface ResponseObjectType<T> {
    data: T,
    message: string,
    success: boolean,
}

const makeSuccessObject = <T>(data: T, message: string): ResponseObjectType<T> => ({
  data,
  message,
  success: true
})

const mso = makeSuccessObject<number>(1, 'hello')

const makeErrorObject = (message): ResponseObjectType<null> => ({
  data: null,
  message,
  success: false
})

export {
  makeErrorObject,
  makeSuccessObject
}
