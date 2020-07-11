import React from 'react';
import DelayedRender from './DelayedRender';

export default {
  title: 'DelayedRender',
  component: DelayedRender,
  parameters: {
    componentSubtitle: 'useDelayRender hook as a wrapper component'
  }
};

export const Default = () => (
  <DelayedRender delay={1000}>There's a delay before I get rendered!</DelayedRender>
);
