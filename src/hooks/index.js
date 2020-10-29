import React from 'react';

import {AuthProvider} from './auth';
import {FormProvider} from './form';

function AppProvider({children}) {
  return (
    <AuthProvider>
      <FormProvider>{children}</FormProvider>
    </AuthProvider>
  );
}

export default AppProvider;
