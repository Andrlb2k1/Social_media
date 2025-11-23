import React from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";

function CreatePost() {
  return (
    <div className="CreatePostPage">
        <Formik initialValues={{}} onSubmit={{}} validationSchema={{}}>
            <Form>
                <Field />
            </Form>
        </Formik>
    </div>
  )
}

export default CreatePost