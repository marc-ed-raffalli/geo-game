import React, {Component} from 'react';

import './_modal.css';

export default class Modal extends Component {

  constructor() {
    super();
    this.state = {animationStarted: false};
  }

  componentWillMount() {
    this.mounted = true;

    if (this.props.show === true) {
      this.setTimerAnimation();
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    const props = this.props,
      animationStarted = this.state.animationStarted,
      style = {display: 'block'},
      modalClasses = ['fade'];

    if (props.show !== true) {
      return null;
    }

    if (animationStarted) {
      modalClasses.push('show');
    }

    return (
      <div>
        <div className={['modal'].concat(modalClasses).join(' ')} style={style}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <div className="modal-title">{props.title}</div>
              </div>
              <div className="modal-body">
                {props.children('body')}
              </div>
              <div className="modal-footer">
                {props.children('footer')}
              </div>
            </div>
          </div>
        </div>
        <div className={['modal-backdrop'].concat(modalClasses).join(' ')} style={style}/>
      </div>
    );
  }

  setTimerAnimation() {
    this.setState({animationStarted: false});

    setTimeout(function () {
      if (!this.mounted) {
        return;
      }
      this.setState({animationStarted: true});
    }.bind(this), 250);
  }

}
