import React from 'react';

export default (props) => {
  const classNames = ['btn'];

  if (props.size) {
    classNames.push(props.size === 'small' ? 'btn-sm' : 'btn-lg');
  }

  switch (props.meaning) {
    case 'secondary':
      classNames.push(props.outline ? 'btn-outline-secondary' : 'btn-secondary');
      break;
    case 'success':
      classNames.push(props.outline ? 'btn-outline-success' : 'btn-success');
      break;
    case 'info':
      classNames.push(props.outline ? 'btn-outline-info' : 'btn-info');
      break;
    case 'warning':
      classNames.push(props.outline ? 'btn-outline-warning' : 'btn-warning');
      break;
    case 'danger':
      classNames.push(props.outline ? 'btn-outline-danger' : 'btn-danger');
      break;
    default:
      classNames.push(props.outline ? 'btn-outline-primary' : 'btn-primary');
  }

  return (
    <button type="button"
            className={classNames.join(' ')}
            onClick={props.onClick}>
      {props.text}
    </button>
  );
};
