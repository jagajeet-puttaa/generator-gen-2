'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {

    // prompting(){
    //     console.log("prompting-s");
    // }

    // initializing(){
    //     console.log("initializing-s");
    // }

    // configuring(){
    //     console.log("configuring-s");
    // }

    // writing(){
    //     console.log("writing-s");
    // }

    // conflicts(){
    //     console.log("conflicts-s");
    // }

    // install(){
    //     console.log("install-s");
    // }

    initializing(){
        console.log("Server created");
        this.brmaConfig = this.config.createProxy();
    }

    async prompting(){
      console.log("prompting");
  
      if(!this.brmaConfig.serverName){
        this.answers = await this.prompt([
          {
              type: "input",
              name: "serverName",
              message: "Enter the name of the server page : ",
              default: "helloworld"
          }
        ]);
  
        this.brmaConfig.serverName = this.answers.serverName;
  
      }
      else{
        console.log("Prompting Skipped");
  
        this.answers = [];
        this.answers.serverName = this.brmaConfig.serverName;
      }
    }
  
    writing(){
      this.fs.copyTpl(
        this.templatePath('serverfile.txt'),
        this.destinationPath('server/serverfile.txt'),
        { title: this.answers.serverName}
      )
    }



  // prompting() {
  //   // Have Yeoman greet the user.
  //   this.log(
  //     yosay(
  //       `Welcome to the riveting ${chalk.red('generator-gen-2')} generator!`
  //     )
  //   );

  //   const prompts = [
  //     {
  //       type: 'confirm',
  //       name: 'someAnswer',
  //       message: 'Would you like to enable this option?',
  //       default: true
  //     }
  //   ];

  //   return this.prompt(prompts).then(props => {
  //     // To access props later use this.props.someAnswer;
  //     this.props = props;
  //   });
  // }

  // writing() {
  //   this.fs.copy(
  //     this.templatePath('dummyfile.txt'),
  //     this.destinationPath('dummyfile.txt')
  //   );
  // }

  // install() {
  //   this.installDependencies();
  // }
};
