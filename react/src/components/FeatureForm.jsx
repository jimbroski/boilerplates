import React from 'react';

var FeatureForm = React.createClass({
  onFormSubmit: function(e){
    e.preventDefault();
    var changes = {},
        textRef = this.refs.text,
        upvotesRef = this.refs.upvotes;

    if(textRef.value.length > 0){
      changes.text = textRef.value;
      textRef.value = '';
    }
    if(upvotesRef.value > 0){
      changes.upvotes = upvotesRef.value;
    }
    console.log(changes)
    this.props.onNewFeature(changes);
  },
  render: function(){ return (
    <form onSubmit={this.onFormSubmit}>
      <input type="number" ref="upvotes"/>
      <input type="text" placeholder="Your suggestion..." ref="text"/>
      <button>Submit.</button>
    </form>
  )}
})

export default FeatureForm;
