export const isSuccess = (resData) =>
   resData && !resData.error && resData.message === 'success'
