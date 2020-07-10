import React from 'react';
import Button from './Button';

export default {
  title: 'Button',
  component: <Button>hey</Button>
};

// import mdx from './Button.mdx';

// export default {
//   title: 'Demo/Button',
//   parameters: {
//     docs: {
//       page: mdx
//     }
//   },
//   component: Button
// };

export const Default = () => (
  <>
    <Button>Click Me!</Button>
  </>
);
