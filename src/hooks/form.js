import React, {useContext, createContext, useState, useCallback} from 'react';

const FormContext = createContext();

function FormProvider({children}) {
  const [personalFormData, setPersonalFormData] = useState({});
  const [healthFormData, setHealthFormData] = useState({});

  const handleSubmitPersonalForm = useCallback(
    (data) => {
      setPersonalFormData(data);
    },
    [setPersonalFormData],
  );

  const handleSubmitHealthForm = useCallback(
    (question) => {
      console.log(question);
      setHealthFormData({...healthFormData, ...question});
    },
    [setHealthFormData, healthFormData],
  );

  return (
    <FormContext.Provider
      value={{
        personalFormData,
        handleSubmitPersonalForm,
        healthFormData,
        handleSubmitHealthForm,
      }}>
      {children}
    </FormContext.Provider>
  );
}

function useForm() {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useForm must be used within an FormProvider');
  }
  return context;
}

export {useForm, FormProvider};
