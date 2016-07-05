import React from 'react';

class PopupMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  
  }

  render() {
    return (
      <div className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand">Push Me Around</a>
          </div>
          <ul className="nav navbar-nav">
            <li><a href="#"></a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default PopupMenu;
