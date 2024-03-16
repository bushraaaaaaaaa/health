import React from 'react';
import "../Styles/Forms.css";
import Formfield from '../Components/Formfield';

const Forms = () => {
  return (
    <div id='contactUs' className='background' >
      <div className="contact-form-container">
        <h3 className="dt-title">
          <span>Contact Us</span>
        </h3>
        <br/>
        <form className="form">
        <div className="form-row">
            <Formfield ques="What are some effective strategies for managing stress and promoting mental well-being?"/>
            <Formfield ques="What are some effective strategies for managing stress and promoting mental well-being?"/>
          </div>
          
          <div className="form-row">
          <Formfield ques="What are some effective strategies for managing stress and promoting mental well-being?"/>
          <Formfield ques="What are some effective strategies for managing stress and promoting mental well-being?"/>
          </div>
          <div className="form-row">
          <Formfield ques="What are some effective strategies for managing stress and promoting mental well-being?"/>
          <Formfield ques="What are some effective strategies for managing stress and promoting mental well-being?"/>
          </div>
          <div className="form-row">
          <Formfield ques="What are some effective strategies for managing stress and promoting mental well-being?"/>
          <Formfield ques="What are some effective strategies for managing stress and promoting mental well-being?"/>
          </div>
          <div className="form-row">
          <Formfield ques="What are some effective strategies for managing stress and promoting mental well-being?"/>
          <Formfield ques="What are some effective strategies for managing stress and promoting mental well-being?"/>
          </div>
          <div className="form-group">
            <button type="submit" className="form-button">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Forms;
