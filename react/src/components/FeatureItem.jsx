import React from 'react';

var FeatureItem = React.createClass({
  render: function(){
    var text = this.props.feature_text,
        upvotes = this.props.feature_upvotes;

    return (
      <div>
        <div><strong>{upvotes}</strong></div>
        <div>
          <p>{text}</p>
        </div>
      </div>
    );
  }
});

export default FeatureItem;
