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
                />
                <Footer />
            </Fragment>
        )
    }
}


export default RecommendBeer;