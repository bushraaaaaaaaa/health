import React from 'react'

const Formfield = (props) => {
    const { ques } = props;
  return (
            <div className="form-group">
              <label htmlFor="input1" className="form-label">{ques}</label>
              <input type="text" id="input1" className="form-input" />
            </div>
  )
}

export default Formfield