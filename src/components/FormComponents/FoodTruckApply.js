import React, {Component} from 'react';
import Header from '../Header';
import Footer from '../Footer';
import {Formik, Field, Form, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import {Redirect} from 'react-router-dom';
import FormDatePicker from './FormDatePicker';

class FoodTruckApply extends Component{
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
                            foodTruckName:"",
                            typeOfFood:"",
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
                            foodTruckName: Yup.string()
                                .required(),
                            typeOfFood: Yup.string()
                                .required(),
                            tentativeDateYouWillBeReady: Yup.date()
                                .min(new Date()),
                        })}

                        render={props =>(
                            <div className="form-wrapper">
                                
                                <Form className="form-style">
                                    <h1>Food Truck Application Form</h1>
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
                                        Food Truck Name:
                                        <Field name="foodTruckName" placeholder="Food Truck Name"/>
                                        <ErrorMessage name="foodTruckName"/>
                                    </label>

                                    
                                    <label className="form-input-field">
                                        Type of food you sell:
                                        <Field name="typeOfFood" placeholder="Type of food"/>
                                        <ErrorMessage name="typeOfFood" />
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


export default FoodTruckApply;