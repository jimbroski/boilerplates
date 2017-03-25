import React from 'react';

var AppHeader = React.createClass({
  getDefaultProps: function(){
    return {
      welcomeMessage: "Welcome."
    }
  },
  render: function(){
    var welcomeMessage = this.props.welcomeMessage;

    return(
    <header>
      <h1>{welcomeMessage}</h1>
      <p>Upvote any of the items below or add your own at the bottom.</p>
    </header>
  )}
});

export default AppHeader;
