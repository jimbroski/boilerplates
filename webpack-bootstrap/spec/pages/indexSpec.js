describe("Hello World", function(){
  var index = require('../assets/js/pages/index');

  it("returns 'Hello World'", function(){
    expect(index).toEqual("Hello World");
  });
});
