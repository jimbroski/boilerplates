import {showCookieBanner} from './app_support/misc';

class Layout {
  constructor(){
    // this.bindFunctions();
    this.startup();
  }

  bindFunctions(){}

  startup(){
    console.log("Hello World");
    showCookieBanner();
  }
}

export default new Layout();
