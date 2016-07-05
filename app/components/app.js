import React from 'react';

import PopupMenu from './popup_menu.js';
import DeviceList from './device_list.js';
import MessagingView from './messaging_view.js';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  
  }

  render() {
    return (
        <div>
          <PopupMenu/>
          <div>
            <DeviceList/>
            <MessagingView/>
          </div>
        </div>
    );
  }
}

export default App;
