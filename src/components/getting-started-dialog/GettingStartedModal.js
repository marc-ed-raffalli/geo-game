import React from 'react';

import Modal from '../common/modal/Modal';

import GettingStartedHelp from './content/GettingStartedHelp';
import RememberCheckbox from '../remember-checkbox/RememberCheckbox';

export default props => {
  let showHelpOnGameStart = true;

  return (
    <Modal show={props.show} title={'Getting Started'}>
      {section => (
        section === 'body'
          ? <GettingStartedHelp/>
          : <div>
            <RememberCheckbox onChange={val => showHelpOnGameStart = !val}/>
            <button type="button"
                    className="btn btn-primary ml-2"
                    onClick={() => props.onPlayClick(showHelpOnGameStart)}>
              Play
            </button>
          </div>
      )}
    </Modal>
  );
};
