import React from 'react';

import MessagingHistory from './messaging_history.js';
import MessagingEditor from './messaging_editor.js';

class MessagingView extends React.Component {
  constructor(props) {
    super(props);
    this.device = props.device || {};
  }

  render() {
    return (
      <div className="messaging">
        <MessagingHistory device={this.device}/>
        <MessagingEditor/>
      </div>
    );
  }
}

export default MessagingView;
