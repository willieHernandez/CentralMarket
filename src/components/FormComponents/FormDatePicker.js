import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


class FormDatePicker extends Component{
    constructor(field, form, ...props){
        super(field, form, props)
        // console.log("The field is" )
        console.log(field.field)
    }
    handleChange =  (value) =>{
        console.log("In form date picker handle change the value is ")
        console.log(this.props.field.value)
        this.props.field.value = value
        
        this.props.onChange(value)


    }

    render(){
        return(
            <div className="date-picker-input">
                {/* {console.log("The props are:\n")}
                {console.log(this.props)} */}
                <DatePicker selected={this.props.startDate} {...this.props} onChange={this.handleChange}/>
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