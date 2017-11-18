import React from 'react';

export default props => (
  <div className="form-check form-check-inline">
    <label className="form-check-label">
      <input className="form-check-input"
             ref={elt => this.checkBox = elt}
             onChange={() => props.onChange(this.checkBox.checked)}
             type="checkbox"/>
      <span>Don't show again</span>
    </label>
  </div>
);
