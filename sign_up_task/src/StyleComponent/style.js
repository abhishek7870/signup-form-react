import styled from 'styled-components';

export const HeaderDiv = styled.div`
  width: 100%;
  height: 100%;
  background-color: blue;
  .header1 {
    display: flex;
    margin-left: 200px;
    padding-top: 100px;
  }
  .left_side {
    width: 40%;
    height: 100vh;
    box-sizing: border-box;
    background-color: #0157db;
    display: flex;
    flex-direction: column;
  }
  .right_side {
    width: 40%;
    height: 100vh;
    background-color: white;
  }
  .left_side_content {
    display: flex;
    justify-content: column;
    margin-top: 80px;
    margin-left: 100px;
    justify-content: center;
  }
  .text h3 {
    color: #fff;
    padding-left: 15px;
    padding-bottom: 10px;
  }
  .text p {
    width: 400px;
    color: lightgray;
    padding-left: 15px;
  }
  .icon {
    color: #fff;
  }
  .right_side > h2 {
    padding-left: 80px;
    padding-top: 80px;
    font-size: 30px;
    font-weight: 600px;
  }
  .right_side > h3 {
    padding-left: 80px;
    padding-top: 5px;
    color: #0157db;
    font-size: 28px;
    font-weight: 500px;
    padding-bottom: 12px;
  }
  .right_side > p {
    border-bottom: 5px solid #f3eeee;
    margin-left: 80px;
    width: 40px;
    margin-bottom: 25px;
  }
  .lab_name,
  .mobile,
  .address {
    padding-left: 80px;
    width: 397px;
    margin-bottom: 17px;
  }
  .lab_name label,
  .mobile label,
  .address label {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
  }
  .lab_name input,
  .mobile input,
  .address input {
    margin-top: 8px;
    padding: 7px;
    border-radius: 3px;
    background-color: #f4f4f4;
    border: none;
  }
  .lab_name input:focus,
  textarea:focus,
  select:focus {
    outline: none;
  }
  .lab_name input::placeholder,
  .mobile input::placeholder,
  .address input::placeholder {
    font-size: 15px;
  }
  .first_input {
    display: flex;
    width: 400px;
    padding-left: 80px;
  }
  .first_input input::placeholder {
    font-size: 15px;
  }
  .first_input input:focus,
  textarea:focus,
  select:focus {
    outline: none;
  }
  .first_input input {
    margin-top: 8px;
    padding: 7px;
    border-radius: 3px;
    background-color: #f4f4f4;
    border: none;
  }
  .second_input input {
    margin-top: 8px;
    padding: 7px;
    border-radius: 3px;
    background-color: #f4f4f4;
    border: none;
  }
  .second_input {
    display: flex;
    width: 400px;
    padding-left: 80px;
    padding-top: 25px;
  }
  .first_input input:focus,
  textarea:focus,
  select:focus {
    border: 2px solid #b9d1fb;
  }
  .first_input input:focus,
  textarea:focus,
  select:focus {
    border: 2px solid #b9d1fb;
  }
  .second_input input:focus,
  textarea:focus,
  select:focus {
    border: 2px solid #b9d1fb;
  }
  .mobile input:focus,
  textarea:focus,
  select:focus {
    border: 2px solid #b9d1fb;
  }
  .address input:focus,
  textarea:focus,
  select:focus {
    border: 2px solid #b9d1fb;
  }
  .lab_name input:focus,
  textarea:focus,
  select:focus {
    border: 2px solid #b9d1fb;
  }
  .mobile input:focus,
  textarea:focus,
  select:focus {
    outline: none;
  }
  .address input:focus,
  textarea:focus,
  select:focus {
    outline: none;
  }
  .second_input input:focus,
  textarea:focus,
  select:focus {
    outline: none;
  }
  .second_input input::placeholder {
    font-size: 15px;
  }
  .mobile {
    padding-top: 12px;
  }
  .checkbox_head {
    display: flex;
    padding-top: 25px;
  }
  .checkbox {
    display: flex;
    padding-left: 80px;
    justify-content: center;
  }
  .checkbox > p {
    width: 264px;
    padding-left: 10px;
    font-size: 12px;
    boder:1px solid black;
  }
  .checkbox span {
    color: blue;
  }
  .checkbox_head button {
    margin-left: px;
    background: blue;
    width: 114px;
    color: #fff;
    padding: 10px;
    border-radius: 5px;
    border: none;
    outline: none;
    font-size: 17px;
  }
  .error{
    color:red
  }
  .error_checkbox span{
    color:red;
    padding-top:0px;
  }
`;
