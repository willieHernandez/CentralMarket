import React, {Component, Fragment} from 'react';
import Header from '../Header';
import Footer from '../Footer';
// import {Formik, Field, Form, ErrorMessage} from 'formix';
import Yup from 'yup';


class BandApply extends Component{

    render(){
        const user= {
            id: "123",
            email: "123@gmail.com",
            social: {
              facebook: "123Facebook",
              twitter: "123Twitter",
            }
         }
        return(
            <div>
                <Header />
                
                <Footer />
            </div>

        )
    }
}


export default BandApply;