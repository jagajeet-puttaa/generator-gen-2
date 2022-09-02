const Generator = require("yeoman-generator");
// const chalk = require("chalk");
// const yosay = require("yosay");

module.exports = class extends Generator {
  // Prompting(){
  //   console.log("prompting-c");
  // }

  // initializing(){
  //   console.log("initializing-c");
  // }

  // configuring(){
  //   console.log("configuring-c");
  // }

  // writing(){
  //   console.log("writing-c");
  // }

  // conflicts(){
  //   console.log("conflicts-c");
  // }

  // install(){
  //   console.log("install-c");
  // }

  initializing() {
    console.log("Client created");
    this.brmaConfig = this.config.createProxy();
  }

  async prompting() {
    console.log("prompting");

    if (!this.brmaConfig.pageName) {
      this.answers = await this.prompt([
        {
          type: "input",
          name: "pageName",
          message: "Enter the name of the page : ",
          default: "Profile"
        },
        {
          type: "input",
          name: "confirmLoginModule",
          message: "Do you want login module : ",
          default: true
        }
      ]);

      this.brmaConfig.pageName = this.answers.pageName;

      // This.brmaConfig.confirmLoginModule = this.answers.confirmLoginModule;

      // if(this.answers.confirmLoginModule){

      //   this.answers = await this.prompt([
      //     {
      //         type: "input",
      //         name: "username",
      //         message: "Enter the username : ",
      //         default: "johndoe"
      //     },
      //     {
      //         type: "input",
      //         name: "password",
      //         message: "Enter the password : ",
      //         default: "janedoe"
      //     }
      //   ]);

      //   this.brmaConfig.loginModule = {
      //     username : this.answers.username,
      //     password : this.answers.password
      //   };
      //   // this.brmaConfig.loginModule.username = this.answers.username;
      //   // this.brmaConfig.loginModule.password = this.answers.password;
      // }
    } else {
      console.log("Prompting Skipped");

      this.answers = [];
      this.answers.pageName = this.brmaConfig.pageName;
      // This.answers.confirmLoginModule = this.brmaConfig.confirmLoginModule;

      // if(this.answers.confirmLoginModule){
      //   this.answers.username = this.brmaConfig.loginModule.username;
      //   this.answers.loginModule = this.brmaConfig.loginModule.password;
      // }
    }
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath("index.html"),
      this.destinationPath("client/index.html"),
      { title: this.answers.pageName }
    );
  }

  // Prompting() {
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
