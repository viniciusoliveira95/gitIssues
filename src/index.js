import React from 'react';
import { StatusBar } from 'react-native';

import Background from '~/components/Background';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#1a84b8" />
      <Background />
    </>
  );
}
