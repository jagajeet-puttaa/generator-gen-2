'use strict';
const Generator = require('yeoman-generator');

module.exports = class extends Generator {

  initializing(){
    console.log("Ex2 being done");
  }

  writing(){
    this.fs.copyTpl(
      this.templatePath('index.html'),
      this.destinationPath('ex2/index.html'),
    )
  }

};
