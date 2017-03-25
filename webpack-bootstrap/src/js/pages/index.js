export function index(){
  var init = function(){
    bindFunctions();
  };

  var bindFunctions = function(){
    $('#page_index button').on('click', sayHello);
  };

  // Methods

  var sayHello = function(){
    alert("Hello World");
  };

  return {
    init: init
  };
};
