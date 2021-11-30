import React, { useState } from 'react';
import './App.css';
import { HeaderDiv } from './StyleComponent/style';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import validation from './validation';
function App() {
  const [values, setValues] = useState({
    labname:"",
    name:"",
    roll:"",
    pathologyreport:"",
    radiologyreport:"",
    mobile:"",
    address:"",
    checkbox:""
  })
  const [errors, seterrors] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    seterrors(validation(values));
    console.log(values);

  };
 const handleChange = (e) =>{
   e.preventDefault();
   setValues({
     ...values,
     [e.target.name]:e.target.value,
   });

 }
  return (
    <HeaderDiv className="header">
      <div className="header1">
        <div className="left_side">
          <div className="left_side_content">
            <div className="icon">
              <HomeIcon />
            </div>
            <div className="text">
              <h3>Eiusmod tempor</h3>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
              </p>
            </div>
          </div>
          <div className="left_side_content">
            <div className="icon">
              <HomeIcon />
            </div>
            <div className="text">
              <h3>Eiusmod tempor</h3>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
              </p>
            </div>
          </div>
          <div className="left_side_content">
            <div className="icon">
              <HomeIcon />
            </div>
            <div className="text">
              <h3>Eiusmod tempor</h3>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
              </p>
            </div>
          </div>
        </div>
        <div className="right_side">
          <h2>Sign up as</h2>
          <h3>Diagonistic Lab</h3>
          <p></p>
          <div className="lab_name">
            <label>
              Lab Name
              <input
                type="text"
                placeholder="Enter your laboratory name"
                name="labname"
                onChange={handleChange}
              />
              {errors.labname && <p className="error">{errors.labname}</p>}
            </label>
          </div>
          <div className="first_input">
            <label>
              You Name
              <input
                type="text"
                placeholder="Enter your name"
                name="name"
                onChange={handleChange}
              />
              {errors.name && <p className="error">{errors.name}</p>}
            </label>
            <label>
              You role
              <input
                type="text"
                placeholder="Enter your role in lab"
                name="roll"
                onChange={handleChange}
              />
              {errors.roll && <p className="error">{errors.roll}</p>}
            </label>
          </div>
          <div className="second_input">
            <label>
              Daily pathology report
              <input
                type="number"
                placeholder="Number of report"
                name="pathologyreport"
                onChange={handleChange}
              />
              {errors.pathologyreport && <p className="error">{errors.pathologyreport}</p>}
            </label>
            <label>
              Daily radiology report
              <input
                type="number"
                placeholder="Number of report"
                name="radiologyreport"
                onChange={handleChange}
              />
              {errors.radiologyreport && <p className="error">{errors.radiologyreport}</p>}
            </label>
          </div>
          <div className="mobile">
            <label>
              Mobile Number
              <input
                type="number"
                placeholder="Enter your mobile number"
                name="mobile"
                onChange={handleChange}
              />
              {errors.mobile && <p className="error">{errors.mobile}</p>}
            </label>
          </div>
          <div className="address">
            <label>
              Address
              <input
                type="text"
                placeholder="Enter lab address"
                name="address"
                onChange={handleChange}
              />
              {errors.address && <p className="error">{errors.address}</p>}
            </label>
          </div>
          <div className="checkbox_head">
            <div className="checkbox">
              <input type="checkbox" name="checkbox" onChange={handleChange}/>
              {errors.checkbox && <p className="error_checkbox ">{errors.checkbox}</p>}
              <p>
                I agree with all<span> Terms and Conditions</span> and{' '}
                <span>Privacy Policies</span> of evolko.
              </p>
            </div>
            <button onClick={handleSubmit}>Sign up</button>
          </div>
        </div>
      </div>
    </HeaderDiv>
  );
}

export default App;
