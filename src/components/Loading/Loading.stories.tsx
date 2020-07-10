import React from 'react';
import Loading from './Loading';
import LoadingOverlay from './LoadingOverlay';

export default {
  title: 'Loading',
  component: Loading
};

export const Default = () => <Loading />;

export const WithMessage = () => <Loading message="Loading custom message!" />;

export const Overlay = () => <LoadingOverlay>child content</LoadingOverlay>;
export const Overlay2 = () => <LoadingOverlay>child content2</LoadingOverlay>;
