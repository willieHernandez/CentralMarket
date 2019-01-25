import React, {Component, Fragment} from 'react';
import Header from './Header';
import Footer from './Footer';
import {Formik, Field, Form, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import {Redirect} from 'react-router-dom';


class Login extends Component{
    constructor(props){
        super(props)
        this.state = {
            isAuthenticated:false,
            userName:"",
        }
    }

    
    render(){
        if(this.state.isAuthenticated){
            let userPath= "/user-profile/" + this.state.userName
            console.log(userPath)
            return <Redirect to={userPath} />
        }
        return(
            <Fragment>
                <Header />
                
                <Formik 
                    onSubmit={(values, {setSubmitting})=>{
                        console.log("Inside handle authentication")
                        this.setState({
                            isAuthenticated: true,
                            userName: values.userName,
                        })
                    }}

                    initialValues ={{
                        userName:"",
                        password:"",
                    }}

                    validationSchema ={Yup.object().shape({
                            userName: Yup.string().required(),
                            password: Yup.string().required(),
                        })
                    }

                    render={props =>(
                        <div className='form-wrapper'>
                            <Form className="form-style">
                                <h1>Login</h1>
                                <label className='form-input-field'>
                                    Username:
                                    <Field name="userName" placeholder="username"/>
                                    <ErrorMessage name="userName" />
                                </label>
                                <label className='form-input-field'>
                                    Password:
                                    <Field type="password" name="password" placeholder="Passowrd"/>
                                    <ErrorMessage name="password"/>
                                </label>
                                <button className='form-button'>Submit</button>
                            </Form>
                        </div>
                    )}

                />

                <Footer />
            </Fragment>

        )
    }
}


export default Login;