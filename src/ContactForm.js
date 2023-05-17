import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { Formik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Este campo es requerido'),
  email: Yup.string().email('Ingresa un correo válido').required('Este campo es requerido'),
  message: Yup.string().required('Este campo es requerido'),
});

const ContactForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    // Aquí puedes agregar el código para enviar el formulario a través de una API o un correo electrónico
    resetForm();
  };

  return (
    <Formik initialValues={{ name: '', email: '', message: '' }} onSubmit={handleSubmit} validationSchema={validationSchema}>
      {({ handleChange, handleSubmit, values, errors }) => (
        <View style={styles.container}>
          <Input placeholder="Nombre" onChangeText={handleChange('name')} value={values.name} errorMessage={errors.name} />
          <Input placeholder="Correo electrónico" onChangeText={handleChange('email')} value={values.email} errorMessage={errors.email} />
          <Input placeholder="Mensaje" onChangeText={handleChange('message')} value={values.message} errorMessage={errors.message} multiline={true} />
          <Button title="Enviar" onPress={handleSubmit} />
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

export default ContactForm;
