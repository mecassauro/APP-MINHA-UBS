import React, {useContext, createContext, useState, useCallback} from 'react';

const FormContext = createContext();

function FormProvider({children}) {
  const [personalFormData, setPersonalFormData] = useState({});
  const [healthFormData, setHealthFormData] = useState([]);
  const [addressForm, setAddressForm] = useState({});

  const handleSubmitPersonalForm = useCallback(
    (data) => {
      setPersonalFormData(data);
    },
    [setPersonalFormData],
  );

  const handleSubmitHealthForm = useCallback(
    (data) => {
      const {comorbidity_id, value} = data;
      if (!value) {
        const newList = healthFormData.filter((id) => id !== comorbidity_id);
        setHealthFormData(newList);
      } else {
        if (!healthFormData.includes(comorbidity_id)) {
          setHealthFormData([...healthFormData, comorbidity_id]);
        }
      }
    },
    [setHealthFormData, healthFormData],
  );

  const handleSubmitAddressForm = useCallback((data) => {
    console.log(data);
    setAddressForm(data);
  }, []);

  return (
    <FormContext.Provider
      value={{
        personalFormData,
        handleSubmitPersonalForm,
        healthFormData,
        handleSubmitHealthForm,
        addressForm,
        handleSubmitAddressForm,
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
