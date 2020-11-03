// // Temporarily going to use as a copy and paste until we
// // can extract request and auth as it's own service
// const isClientError = (status: number) => status >= 400 && status <= 499;

// export const handleAPIError = error => {
//   try {
//     logAPIError({
//       type: 'api',
//       fault: isClientError(error.request?.status) ? 'client' : 'server',
//       origin: window?.location?.hostname,
//       status: error.request?.status,
//       url: error.request?.url,
//       headers: error.request?.headers,
//       stack: error.toJSON?.stack,
//       errorObj: error
//     });
//   } catch (e) {
//     console.log('API Logger Failed: Ironic huh', e);
//   }
// };

// export const handleBounaryError = (error, errorInfo) => {
//   logAPIError({
//     type: 'boundary',
//     fault: 'client',
//     origin: window?.location?.hostname,
//     status: null,
//     url: null,
//     headers: null,
//     stack: errorInfo,
//     errorObj: error
//   });
// };
