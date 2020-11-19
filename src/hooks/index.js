import React from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider} from '@ui-kitten/components';
import {AuthProvider} from './auth';
import {FormProvider} from './form';
import {AlertProvider} from './alert';

function AppProvider({children}) {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <AuthProvider>
        <AlertProvider>
          <FormProvider>{children}</FormProvider>
        </AlertProvider>
      </AuthProvider>
    </ApplicationProvider>
  );
}

export default AppProvider;
