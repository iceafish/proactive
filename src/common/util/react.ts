import { Component } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isReactClassComponent = (target: any): target is Component =>
  !!target?.isReactComponent;
