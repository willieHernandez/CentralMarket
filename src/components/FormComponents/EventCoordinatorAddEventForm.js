import React, {Component, Fragment} from 'react';
import FormDatePicker from './FormDatePicker';






class EventCoordinatorAddEventForm extends Component{
    constructor(props){
        super(props)

        this.state = {
            startDate: new Date(),
            formIsSubmitted: false,
        }
        this.handleDatePicker = this.handleDatePicker.bind(this)
    }
    currentDate = React.createRef()

    handleDatePicker = (date)=> {
        console.log("Calling handle date picker")
        this.setState({
            startDate: date
        })

    }
    handleAddAnEvent = (values) =>{
        console.log(values)
        console.log("The props are")
        this.props.addEventHandler(values)
    }

    handleSubmit = (e) =>{
        console.log("At the base level")
        e.preventDefault()
        const event = {
            eventDate: this.eventDateRef.current.value,
            openingBand: this.openingBandRef.current.value,
            closingBand:this.closingBandRef.current.value,
            vendorsAttending: this.approvedVendorsRef.current.value,
            vendorsApplied: this.vendorsAppliedRef.current.value,
            foodTrucksAttending: this.approvedFoodTrucksRef.current.value,
            foodTrucksApplied: this.foodTrucksAppliedRef.current.value,
        }
        this.props.handleAddAnEvent(event)
        //Need to add the fish or add it to the database. 
    }

    eventDateRef = React.createRef();
    openingBandRef = React.createRef();
    closingBandRef = React.createRef();
    approvedVendorsRef = React.createRef();
    vendorsAppliedRef = React.createRef();
    approvedFoodTrucksRef = React.createRef();
    foodTrucksAppliedRef = React.createRef();


    render(){

        return(
            <form className="info-area-add-form" onSubmit={this.handleSubmit}>
                <h1 className="add-form-header">Add a new Event</h1>
                <div className="add-form-farleftside">
                    <label className="form-input-field">
                        Event Date:
                        {/* need to update this portion and change it from being a standard input to formdatepicker*/}
                        <input name="eventDate" ref={this.eventDateRef} type="date" placeholder="Event Date"/>   
                    </label>
                </div>
                <div className="add-form-leftside">
                    <label className="form-input-field">
                        Opening Band:
                        <input name="openingBand" ref={this.openingBandRef} type="text" placeholder="Opening Band"/>
                    </label>

                    <label className="form-input-field">
                    Closing Band:
                        <input name="closingBand" ref={this.closingBandRef} type="text" placeholder="Closing Band"/>
                    </label>
                </div>
                <div className="add-form-middle">
                    <label className="form-input-field">
                    Vendors Attending:
                        <input name="approvedVendors" ref={this.approvedVendorsRef} type="number" placeholder="Approved Vendors"/>
                    </label>

                    <label className="form-input-field">
                    Vendors Applied:
                        <input name="vendorsApplied" ref={this.vendorsAppliedRef} type="number" placeholder="Vendors Applied"/>
                </label>
                </div>

                <div className="add-form-rightside">
                    <label className="form-input-field">
                        Food Trucks Attending:
                        <input name="approvedFoodTrucks" ref={this.approvedFoodTrucksRef} type="number" placeholder="Approved Food Trucks"/>
                    </label>

                    <label className="form-input-field">
                    Food Trucks Applied:
                        <input name="foodTrucksApplied" ref={this.foodTrucksAppliedRef} type="number" placeholder="Food Trucks Applied"/>
                </label>  
                </div>                       
                <div className="add-form-buttonArea">
                    <button type="submit" className="form-button">Create Event</button>
                    <button type="button" onClick={this.handleCancelAddAnEvent}className="form-button">Cancel </button> 
                </div>
            </form>
        )
    }


//     render(){
//         // if(this.state.formIsSubmitted){
//         //     return <Redirect to="/login"/>
//         // }
//         return(
//             <Formik
                        
//                 onSubmit = {(values, { setSubmitting }) => {
                    
//                     console.log("inside on submit")
//                     console.log(values)
//                     this.setState({
//                         formIsSubmitted:true
//                     })
//                     setSubmitting(false)
                    
//                 }}

//                 initialValues = {{
//                     eventDate: "7",
//                     openingBand: "",
//                     closingBand: "",
//                     approvedVendors: "",
//                     vendorsApplied: "",
//                     foodTrucksApplied: "",
//                     approvedFoodTrucks: "",
//                 }}
                
//                 validationSchema = {Yup.object().shape({
//                     eventDate: Yup.date().min( new Date()),
//                     openingBand: Yup.string(),
//                     closingBand: Yup.string(),
//                     approvedVendors: Yup.number().integer().min(0).max(20),
//                     vendorsApplied: Yup.string(),
//                     foodTrucksApplied: Yup.number().integer().min(0).max(15),
//                     approvedFoodTrucks: Yup.number(),
//                 })}

// // #TODO: Change the classname and style of this form. 
                
//                 render={props =>(
//                     <div >
//                         <Form className="info-area-add-form">
//                             <h1 className="add-form-header">Add a new Event</h1>
//                             <div className="add-form-farleftside">
//                                 <label className="form-input-field">
//                                     Event Date:
//                                     <Field name="eventDate" component={FormDatePicker} startDate={this.state.startDate} onChange={this.handleDatePicker} ref={this.currentDate}/>
//                                     <ErrorMessage name="eventDate"/>    
//                                 </label>
//                             </div>
//                             <div className="add-form-leftside">
//                                 <label className="form-input-field">
//                                     Opening Band:
//                                     <Field name="openingBand" placeholder="Opening Band"/>
//                                     <ErrorMessage name="openingBand"/>
//                                 </label>

//                                 <label className="form-input-field">
//                                     Closing Band:
//                                     <Field name="closingBand" placeholder="Closing Band"/>
//                                     <ErrorMessage name="closingBand"/>
//                                 </label>
//                             </div>
//                             <div className="add-form-middle">
//                                 <label className="form-input-field">
//                                     Vendors Attending:
//                                     <Field name="approvedVendors" placeholder="Approved Vendors"/>
//                                     <ErrorMessage name="approvedVendors"/>
//                                 </label>

//                                 <label className="form-input-field">
//                                     Vendors Applied:
//                                     <Field name="vendorsApplied" placeholder="Vendors Applied"/>
//                                     <ErrorMessage name="vendorsApplied"/>
//                                 </label>
//                             </div>

//                             <div className="add-form-rightside">
//                                 <label className="form-input-field">
//                                     Food Trucks Attending:
//                                     <Field name="approvedFoodTrucks" placeholder="Approved Food Trucks"/>
//                                     <ErrorMessage name="approvedFoodTrucks" />
//                                 </label>

//                                 <label className="form-input-field">
//                                     Food Trucks Applied:
//                                     <Field name="foodTrucksApplied" placeholder="Food Trucks Applied"/>
//                                     <ErrorMessage name="foodTrucksApplied"/>
//                                 </label>  
//                             </div>                       
//                             <div className="add-form-buttonArea">
//                                 <button type="submit" className="form-button">Create Event</button>
//                                 <button type="button" onClick={this.handleCancelAddAnEvent}className="form-button">Cancel </button> 
//                             </div>
//                         </Form>
//                     </div>
//                     )}
//             />
//         )
//     }
}
        




export default EventCoordinatorAddEventForm;