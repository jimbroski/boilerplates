import React from 'react';
import AppHeader from 'AppHeader';
import FeatureForm from 'FeatureForm';
import FeatureItem from 'FeatureItem';

var AppRoot = React.createClass({
  getDefaultProps: function(){
    return {
      text: "No feature added yet",
      upvotes: 0
    };
  },
  getInitialState: function(){
    return {
      text: this.props.text,
      upvotes: this.props.upvotes
    }
  },
  handleNewFeature: function(feature){
    this.setState(feature);
  },
  render: function(){
    var feature_text = this.state.text,
        feature_upvotes = this.state.upvotes;

    return (
      <div>
        <AppHeader/>
        <FeatureItem feature_text={feature_text} feature_upvotes={feature_upvotes}/>
        <FeatureForm onNewFeature={this.handleNewFeature}/>
      </div>
    );
  }
});

export default AppRoot;
