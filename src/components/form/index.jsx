import React, {useState} from 'react'
import styles from './form.module.scss'

export const CustomForm = ({children}) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    date_of_birth: '',
    location: ''
    // другие поля
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://namek.me/api/v1/auth/register', formData);
      console.log(response.data);
      // обрабатываем ответ сервера
    } catch (error) {
      console.error(error);
      // обрабатываем ошибку
    }
  };

  return (
    <form className={styles.form} onSubmit={()=>console.log("first")}>{children}</form>
  )
}
