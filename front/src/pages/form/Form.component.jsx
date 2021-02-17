import React from "react";
import { Formik } from "formik";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import styles from "./Form.module.scss";

const BeerForm = ({inputChecker, submitHandler }) => {
  return(
  <div className={styles.form}>
    <h2>Add a beer</h2>
    <Formik
      initialValues={{ name: "", ibu: "" }}
      validate={inputChecker} 
      onSubmit={submitHandler}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting
      }) => (
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="name"
            placeholder="Beer name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            valid={!errors.name}
          />
          <span className={styles.errorMessage}>
            {errors.name && touched.name && errors.name}
          </span>
          <Input
            type="ibu"
            name="ibu"
            placeholder="IBU"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.ibu}
            valid={!errors.ibu}
          />
          <span className={styles.errorMessage}>
            {errors.ibu && touched.ibu && errors.ibu}
          </span>
          <div className={styles.submitButton}>
            <Button
              type="submit"
              disabled={errors.name || errors.ibu || isSubmitting}
              text="Create"
            />
          </div>
        </form>
      )}
    </Formik>
  </div>
);
}

export default BeerForm;
