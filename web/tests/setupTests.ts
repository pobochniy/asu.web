
// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// Object.defineProperty(globalThis,"IS_REACT_ACT_ENVIRONMENT", {
//     get() {
//       if (typeof globalThis.self !== 'undefined') {
//         return globalThis.self.IS_REACT_ACT_ENVIRONMENT
//       }
//     },
//     set(value) {
//       if (typeof globalThis.self !== 'undefined') {
//         globalThis.self.IS_REACT_ACT_ENVIRONMENT = value
//       }
//     }
//   })

  // @ts-ignore
   globalThis.IS_REACT_ACT_ENVIRONMENT = true