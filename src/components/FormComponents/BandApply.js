import React, {Component} from 'react';
import Header from '../Header';
import Footer from '../Footer';
import FormDatePicker from './FormDatePicker';
import {Formik, Field, Form, ErrorMessage} from 'formik';
import * as Yup from 'yup';





class BandApply extends Component{
    constructor(props){
        super(props)

        this.BandApplySchema = Yup.object().shape({
            name: Yup.string().required(),
            email: Yup.string()
                .email('Invalid Email')
                .required('Required'),
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
            accountType: Yup.string().required(),
        })

        this.state = {
            startDate: new Date(),
            // initValues:"",
        }
        this.handleDatePicker = this.handleDatePicker.bind(this)
    }

    handleDatePicker = (date)=> {
        console.log("Calling handle date picker")
        this.setState({
            startDate: date
        })
    }

    render(){
        return(
            <div>

                <Header />
                <Formik
                    initialValues = {this.state.initValues || {
                        name:"",
                        email: "",
                        password:"",
                        bandName:"",
                        bandGenre:"",
                        tentativeDateYouWillBeReady:"",
                        accountType:"Band",
                    }}
                    validationSchema = {this.BandApplySchema}

                    onSubmit={(values, { setSubmitting }) => {
                        console.log("Inside on submit")
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 400);
                    }}
                    render={props =>(
                        
                        <Form>
                            {/* {console.log(props)} */}
                            <Field name="name" placeholder="Enter your name"/>
                            <ErrorMessage name="name"/>
                            <Field type="email" name="email" placeholder="Email!"></Field>
                            <ErrorMessage name="email"/>
                            {/*props.touched.password && props.errors.password && <p>{props.errors.password}</p>*/}
                            <Field type="password" name="password" placeholder="Password"></Field>
                            <ErrorMessage name="password" />
                            <Field name="bandName" placeholder="What is your band name"/>
                            <ErrorMessage name="bandName"/>
                            <Field name="bandGenre" placeholder="What genre does your band play" />
                            <ErrorMessage name="bandGenre"/>
                            <Field name="tentativeDateYouWillBeReady" component={FormDatePicker} startDate={this.state.startDate} onChange={this.handleDatePicker}/>
                            
                            <ErrorMessage name="tentativeDateYouWillBeReady"/>
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
                            <button type="submit">Submit</button>
                        </Form>
                    )}
                />
                <Footer />
            </div>
        )
    }
}
        



// const BandApply = ({
//     //use componentwillmount to do the api call.
//     initValues
// }) => (
        
//             <div>

//                 <Header />
//                 <Formik
//                     initialValues = {initValues || {
//                         name:"",
//                         email: "",
//                         password:"",
//                         bandName:"",
//                         bandGenre:"",
//                         tentativeDateYouWillBeReady:"",
//                         accountType:"Band",
//                     }}
//                     validationSchema = {BandApplySchema}

//                     onSubmit= {(values, actions) =>{
//                         setTimeout(()=>{
//                             console.log(JSON.stringify(values, null, 2));
//                             actions.setSubmitting(false);
//                         }, 1000)
//                     }}
                    
//                     render={props =>(
                        
//                         <Form>
//                             <Field name="name" placeholder="Enter your name"/>
//                             <ErrorMessage name="name"/>
//                             <Field type="email" name="email" placeholder="Email!"></Field>
//                             <ErrorMessage name="email"/>
//                             {/*props.touched.password && props.errors.password && <p>{props.errors.password}</p>*/}
//                             <Field type="password" name="password" placeholder="Password"></Field>
//                             <ErrorMessage name="password" />
//                             <Field name="bandName" placeholder="What is your band name"/>
//                             <ErrorMessage name="bandName"/>
//                             <Field name="bandGenere" placeholder="What genre does your band play" />
//                             <Field name="tentativeDateYouWillBeReady" component={FormDatePicker}/>
//                             <ErrorMessage name="bandGenre"/>
//                             <ErrorMessage name="tentativeDateYouWillBeReady"/>
//                             <label>
//                                 Join our newsletter
//                                 <Field type="checkbox" name="newsLetter" checked={props.values.newsLetter} />
//                             </label>
//                             <label>
//                                 fdsa
//                                 <Field component="select" name="plan">
//                                     <option value="free">Free</option>
//                                     <option value="premium">Premium</option>
//                                 </Field>
//                             </label>
//                             <button>Submit</button>
//                         </Form>
//                     )}
//                 />
//                 <Footer />
//             </div>
// )




export default BandApply;