import React from 'react';

import classNames from 'classnames';

class DeviceListEntry extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let iconClasses = classNames('icon', 'device-icon', this.props.device.type);

    return (
      <div className="device-list entry">
        <i className={iconClasses}/>
        <span className="device-name">{this.props.device.name}</span>
      </div>
    );
  }
}

export default DeviceListEntry;
