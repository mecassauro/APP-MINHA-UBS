import React, {useContext, createContext, useState, useCallback} from 'react';
import {useAuth} from './auth';
import api from '../services/api';

const FormContext = createContext();

function FormProvider({children}) {
  const [personalFormData, setPersonalFormData] = useState({});
  const [healthFormData, setHealthFormData] = useState([]);
  const [addressForm, setAddressForm] = useState({});
  const [allDependents, setAllDependents] = useState([]);

  const {user} = useAuth();

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
    setAddressForm(data);
  }, []);

  const handleSubmitData = useCallback(
    async (data) => {
      const formData = {
        user_id: user.id,
        ...personalFormData,
        ...addressForm,
        ...data,
        comorbidities: healthFormData,
      };
      console.log(formData);
    },
    [addressForm, personalFormData, healthFormData, user],
  );

  const addList = useCallback(
    async (data) => {
      const submitdata = {
        provider_user_id: user.id,
        ...data,
      };

      setAllDependents([...allDependents, submitdata]);
    },
    [user, allDependents],
  );

  const submitAllDependents = useCallback(async () => {
    try {
      allDependents.forEach(async (item) => {
        await api.post('/forms/dependents', item);
      });
    } catch (error) {
      console.log(error.response.data.error);
    }
  }, [allDependents]);

  return (
    <FormContext.Provider
      value={{
        personalFormData,
        handleSubmitPersonalForm,
        healthFormData,
        handleSubmitHealthForm,
        addressForm,
        handleSubmitAddressForm,
        handleSubmitData,
        addList,
        allDependents,
        submitAllDependents,
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
