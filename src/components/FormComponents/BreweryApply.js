import React, {Component, Fragment} from 'react';
import Header from '../Header';
import Footer from '../Footer';
import {Formik, Field, Form, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import {Redirect} from 'react-router-dom';
import FormDatePicker from './FormDatePicker';

class BreweryApply extends Component{
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
            <Fragment>
                <Header />
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
                        breweryName:"",
                        numBeersToOffer:"",
                        tentativeDateYouWillBeReady:"",
                        accountType:"Brewery",
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
                        breweryName: Yup.string()
                            .required(),
                        numBeersToOffer: Yup.number()
                            .required(),
                        tentativeDateYouWillBeReady: Yup.date()
                            .min(new Date()),
                    })}

                    render={props =>(
                        <div className="form-wrapper">
                            
                            <Form className="form-style">
                                <h1>Brewery Application Form</h1>
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
                                    Brewery Name:
                                    <Field name="breweryName" placeholder="Brewery Name"/>
                                    <ErrorMessage name="breweryName"/>
                                </label>

                                
                                <label className="form-input-field">
                                    Number of beers you want to offer:
                                    <Field name="numBeersToOffer" placeholder="Number of beers"/>
                                    <ErrorMessage name="numBeersToOffer" />
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
                <Footer />
            </Fragment>
        )
    }
}


export default BreweryApply;