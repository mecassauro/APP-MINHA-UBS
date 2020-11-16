import React, {createContext, useContext, useState} from 'react';

import Alert from '../components/Alert';

const initialState = {
  isOpen: false,
  title: '',
  message: '',
  type: '',
};

const AlertContext = createContext(initialState);

function AlertProvider({children}) {
  const [alertState, setAlertState] = useState(initialState);

  function alert({title = '', message = '', type = 'error'}) {
    setAlertState({
      isOpen: true,
      title,
      message,
      type,
    });
  }

  function close() {
    setAlertState(initialState);
  }

  return (
    <AlertContext.Provider value={{alert, close}}>
      <Alert {...alertState} close={close} />
      {children}
    </AlertContext.Provider>
  );
}

function useAlert() {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error('useAlert must be used within an AlertProvider');
  }
  return context;
}

export {useAlert, AlertProvider};
