import React, {Component} from 'react';
import {Field, ErrorMessage} from 'formik';
import DatePicker from 'react-datepicker';


class FormDatePicker extends Component{
    constructor(...props){
        super(...props)
        // this.form = {touched, errors};
        // this.field = field;
        
    }


    render(){
        return(
            <div>
                {/* {console.log("The props are:\n")}
                {console.log(this.props)} */}
                <DatePicker selected={this.props.startDate} {...this.props}/>
                {/* <Field {...this.field} {...this.props} /> */}
            </div>
        )
    }
}

// const FormDatePicker = ({
//     field,
//     // form:{touched, errors},
//     ...props
// }) =>(
//     <div>
//             <p>Inside form date picker</p>
//             {console.log(field)}
//             <Field {...field} {...props} />
//             <ErrorMessage name={field.name} />
//         </div>
// )


export default FormDatePicker;