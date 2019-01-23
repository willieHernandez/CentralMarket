import React, {Component, Fragment} from 'react';
import {render} from 'react-dom';
import Header from '../Header';
import Footer from '../Footer';
import {Formik, Field, Form, ErrorMessage} from 'formik';
import * as Yup from 'yup';


const BandApplySchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid Email')
        .required('Required'),
    password: Yup.string()
        .min(3)
        .required(),

})

const BandApply = ({
    values,
    handleChange,
}) => (
            <div>
                <Header />
                <Formik
                    initialValues={{
                        email: "Enter your email address",
                        password:"",
                        newsLetter:true,
                        plan:"free",
                    }}
                    validationSchema = {BandApplySchema}

                    onSubmit= {(values, actions) =>{
                        setTimeout(()=>{
                            console.log(JSON.stringify(values, null, 2));
                            actions.setSubmitting(false);
                        }, 1000)
                    }}
                    
                    render={props =>(
                        <Form>
                            <Field type="email" name="email" placeHolder="Email!"></Field>
                            <ErrorMessage name="email"/>
                            {props.touched.password && props.errors.password && <p>{props.errors.password}</p>}
                            <Field type="password" name="password" placeHolder="Password"></Field>
                            

                            {/* <ErrorMessage name="password" /> */}
                            <label>
                                Join our newsletter
                                <Field type="checkbox" name="newsLetter" checked={props.values.newsLetter} />
                            </label>
                            <label>
                                fdsa
                                <Field component="select" name="plan">
                                    <option value="free">Free</option>
                                    <option value="premium">Premium</option>
                                </Field>
                            </label>
                            <button>Submit</button>
                        </Form>
                    )}
                    
                    
                    
                    
                />
                <Footer />
            </div>
)

// const FormikBandApply = withFormik({
//     mapPropsToValues({email, password, newsLetter }) {
//         return {
//             email: email || "",
//             password: password || "",
//             newsLetter: newsLetter || true,
//         }
//     },
//     handleSubmit(values){
//         console.log(values)
//     }
// })(BandApply)



export default BandApply;