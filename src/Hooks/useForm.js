import React from 'react'

const types = {
   email : {
    regex : /^([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)@([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)[\\.]([a-zA-Z]{2,9})$/ ,
    message : 'Preencha um email valido',
   }
}



const useForm = (type) => {  
  const [value, setValue] = React.useState(''); 
  const [error, setError] = React.useState(null); 

  function validate(value){
    if(type === false) return true; 

    if(value.length === 0){
      setError('Preencha um valor.'); 
      return false; 
    } else if(types[type] && !types[type].regex.test(value)){
       setError(types[type].message);
       return false; 

   }else {
     setError(null);
     return true;
   }

  }

  function onChange({ target }) {
     setValue(target.value);
  }

  return {
      value,
      setValue,
      onChange,
      error,
      validate : () => validate(value),
      onBlur : () => validate(value)
  };
};

export default useForm;
