import React, {Component, Fragment} from 'react';
import Header from '../Header';
import Footer from '../Footer';
import {Formik, Field, Form, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import {Redirect} from 'react-router-dom';
import FormDatePicker from './FormDatePicker';

class VendorApply extends Component{
    constructor(props){
        super(props)

        this.state = {
            startDate: new Date(),
            formIsSubmitted:false,
        }
    }

    render(){
        if(this.state.formIsSubmitted){
            return <Redirect to="/login"/>
        }
        return(
            <div className="container">
                <Header />
                <div className="body-portion">
                    <Formik
                        onSubmit = {(values, {setSubmitting}) =>{
                            console.log("Inside of submit")
                            console.log(values)
                            this.setState({
                                formIsSubmitted:true
                            })
                        }}

                        intitialValues ={{
                            firstName:"",
                            lastName:"",
                            email:"",
                            username:"",
                            password:"",
                            vendorStoreName:"",
                            itemsStoreSells:"",
                            tentativeDateYouWillBeReady:"",
                            accountType:"vendor",
                        }}

                        validationSchema = {Yup.object().shape({
                            firstName: Yup.string().required(),
                            lastName: Yup.string().required(),
                            email: Yup.string()
                                .email('Invalid Email')
                                .required('Required'),
                            userName: Yup.string().required(),
                            password: Yup.string()
                                .min(3)
                                .required(),
                            vendorStoreName: Yup.string()
                                .required(),
                            itemsStoreSells: Yup.string()
                                .required(),
                            tentativeDateYouWillBeReady: Yup.date()
                                .min(new Date()),
                        })}

                        render={props =>(
                            <div className="form-wrapper">
                                
                                <Form className="form-style">
                                    <h1>Vendor Application Form</h1>
                                    <label className="form-input-field">
                                        First Name:
                                        <Field name="firstName" placeholder="First Name"/>
                                        <ErrorMessage name="firstName"/>
                                    </label>

                                    <label className="form-input-field">
                                        Last Name:
                                        <Field name='lastName' placeholder='Last Name'/>
                                        <ErrorMessage name='lastName'/>
                                    </label>

                                    <label className="form-input-field">
                                        Email:
                                        <Field type="email" name="email" placeholder="Email!"/>
                                        <ErrorMessage name="email"/>
                                    </label>
                                    
                                    <label className="form-input-field">
                                        Username:
                                        <Field name="userName" placeholder="Username"/>
                                        <ErrorMessage name="userName"/>
                                    </label>
                                    
                                    <label className="form-input-field">
                                        Password:
                                        <Field type="password" name="password" placeholder="Password"/>
                                        <ErrorMessage name="password" />
                                    </label>
                                    
                                    <label className="form-input-field">
                                        Vendor Store Name:
                                        <Field name="vendorStoreName" placeholder="Vendor Store Name"/>
                                        <ErrorMessage name="vendorStoreName"/>
                                    </label>

                                    
                                    <label className="form-input-field">
                                        Type of items store sells:
                                        <Field name="itemsStoreSells" placeholder="Type of items"/>
                                        <ErrorMessage name="itemsStoreSells" />
                                    </label>
                                    
                                    <label className="form-input-field">
                                        Date you will be ready:
                                        <Field name="tentativeDateYouWillBeReady" component={FormDatePicker} startDate={this.state.startDate} onChange={this.handleDatePicker}/>
                                        <ErrorMessage name="tentativeDateYouWillBeReady"/>    
                                    </label>

                                    <button type="submit" className="form-button">Submit</button>
                                </Form>
                            </div>
                        )}
                    />
                </div>
                <Footer />
            </div>
        )
    }
}


export default VendorApply;