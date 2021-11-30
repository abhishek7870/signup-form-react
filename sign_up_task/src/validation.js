const validation = (values) =>{
    let errors={};
    if(!values.labname){
        errors.labname="Labname is required"
    }
    if(!values.name){
        errors.name="Name is required"
    }
    if(!values.roll){
        errors.roll="Roll is required"
    }
    if(!values.pathologyreport){
        errors.pathologyreport="Pathologyreport is required"
    }
    if(!values.radiologyreport){
        errors.radiologyreport="Radiologyreport is required"
    }
    if(!values.mobile){
        errors.mobile="Mobile is required"
    }
    if(!values.address){
        errors.address="Address is required"
    }
    if(values.mobile?.length <= 9 || values.mobile?.length >11){
       errors.mobile="Enter correct mobile number"
    }
    if(!values.checkbox){
        errors.checkbox="Please Select Term and Condition"
    }
    return errors;
}
export default validation;