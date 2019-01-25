import React, {Component, Fragment} from 'react';
import Header from '../Header';
import Footer from '../Footer';
import {Redirect} from 'react-router-dom';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';

class RecommendBeer extends Component{
    constructor(props){
        super(props)
        
        this.state ={
            formSubmitted:false,
        }
    }
    render(){
        if(this.state.isAuthenticated){
            return <Redirect to="/beer-garden"/>
        }

        return(
            <Fragment>
                <Header />
                <Formik
                    onSubmit={(values, {setSubmitting})=>{
                        console.log("Inisde the on submit method")
                        this.setState({
                            formSubmitted:true
                        })
                    }}

                    initialValues ={{
                        firstName:"",
                        lastName:"",
                        email:"",
                        isLocalBrewery:false,
                        beerName:"",
                        breweryName:""
                    }}

                    validationSchema={Yup.object().shape({
                        firstName: Yup.string().required(),
                        lastName: Yup.string().required(),
                        email: Yup.string().email().required(),
                        isLocalBrewery: Yup.boolean().required(),
                        breweryName: Yup.string(),
                        beerName: Yup.string().required(),                     
                    })}

                    render={props =>(
                        <div className="form-wrapper">
                            <Form className="form-style">
                                <h1>Recommend a Beer Form</h1>
                                <label className="form-input-field">
                                    First Name:
                                    <Field name="firstName" placeholder="First Name"/>
                                    <ErrorMessage name="firstName"/>
                                </label>
                                <label className="form-input-field">
                                    Last Name:
                                    <Field name="lastName" placeholder="Last Name"/>
                                    <ErrorMessage name="lastName"/>
                                </label>
                                <label className="form-input-field">
                                    Email Address:
                                    <Field name="email" placeholder="Email Address"/>
                                    <ErrorMessage name="email"/>
                                </label>
                                <label className="form-input-field">
                                    Is beer sold by a local brewery?:
                                    <Field type="checkbox" name="isLocalBrewery" checked="false"/>
                                    <ErrorMessage name="isLocalBrewery"/>
                                </label>
                                <label className="form-input-field">
                                    Brewery Name:
                                    <Field name="breweryName" placeholder="Brewery Name"/>
                                    <ErrorMessage name="breweryName"/>
                                </label>
                                <label className="form-input-field">
                                    Beer Name:
                                    <Field name="beerName" placeholder="Beer Name"/>
                                    <ErrorMessage name="beerName"/>
                                </label>
                            </Form>
                        </div>
                    )}
                />
                <Footer />
            </Fragment>
        )
    }
}


export default RecommendBeer;