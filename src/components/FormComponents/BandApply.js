import React, {Component} from 'react';
import Header from '../Header';
import Footer from '../Footer';
import FormDatePicker from './FormDatePicker';
import {Formik, Field, Form, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import {Redirect} from 'react-router-dom';






class BandApply extends Component{
    constructor(props){
        super(props)

        this.state = {
            startDate: new Date(),
            formIsSubmitted: false,
        }
        // this.handleDatePicker = this.handleDatePicker.bind(this)
    }

    currentDate = () => React.createRef()

    handleChange = (date)=> {
        // console.log(this)
        console.log("The props are")
        console.log(date)
        this.currentDate = date
        this.setState({
            startDate: date
            
        })
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
                        
                        onSubmit = {(values, { setSubmitting }) => {
                            
                            console.log("inside on submit")
                            console.log(values)
                            this.setState({
                                formIsSubmitted:true
                            })
                            
                        }}

                        initialValues = {{
                            firstName:"",
                            lastName:"",
                            email: "",
                            userName: "",
                            password:"",
                            bandName:"",
                            bandGenre:"",
                            numPeopleInBand:1,
                            tentativeDateYouWillBeReady:"4",
                            accountType:"Band",
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
                            bandName: Yup.string()
                                .required(),
                            numPeopleInBand: Yup.number()
                                .required(),
                            bandGenre: Yup.string(),
                            tentativeDateYouWillBeReady: Yup.date()
                                .min(new Date()),
                        })}

                        
                        render={props =>(
                            <div>
                                <Form className="form-style">
                                    <h1>Band Application Form</h1>
                                    <label className="form-input-field">
                                        First Name:
                                        <Field name="firstName" placeholder="First name"/>
                                        <ErrorMessage name="firstName"/>
                                    </label>

                                    <label className="form-input-field">
                                        Last Name:
                                        <Field name="lastName" placeholder="Last name"/>
                                        <ErrorMessage name="lastName"/>
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
                                        Band Name:
                                        <Field name="bandName" placeholder="Band Name"/>
                                        <ErrorMessage name="bandName"/>
                                    </label>

                                    <label className="form-input-field">
                                        Band Genre:
                                        <Field name="bandGenre" placeholder="Band Genre"/>
                                        <ErrorMessage name="bandGenre"/>
                                    </label>

                                    <label className="form-input-field">
                                        Number of People in Band:
                                        <Field name="numPeopleInBand" placeholder="Number of people"/>
                                        <ErrorMessage name="numPeopleInBand" />
                                    </label>

                                    <label className="form-input-field">
                                        Date you will be ready:
                                        <Field name="tentativeDateYouWillBeReady" component={FormDatePicker} 
                                        startDate={this.state.startDate} 
                                        onChange={this.handleChange}/>
                                        
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
        




export default BandApply;