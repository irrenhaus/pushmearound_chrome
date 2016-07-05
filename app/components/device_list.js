import React from 'react';

import DeviceListEntry from './device_list_entry.js';

class DeviceList extends React.Component {
  constructor(props) {
    super(props);
    this.devices = [];
  }

  componentDidMount() {
    // Load device list
  }

  render() {
    return (
      <ul className="device-list">
        <li>
          {this.devices.map(function(device) {
            <DeviceListEntry device={device}/>
          })}
        </li>
      </ul>
    );
  }
}

export default DeviceList;
