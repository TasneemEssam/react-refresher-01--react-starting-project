import React from 'react';

import './MainHeader.css';
// props.childern will always refer to the things you pass between your opening and closing tags
const MainHeader = props => {
  return <header className="main-header">{props.children}</header>;
};

export default MainHeader;