const Generator = require("yeoman-generator");
// const chalk = require("chalk");
// const yosay = require("yosay");

module.exports = class extends Generator {
  async prompting() {
    console.log("prompting");

    if (!this.brmaConfig.projectName) {
      this.answers = await this.prompt([
        {
          type: "input",
          name: "projectName",
          message: "Enter your project name : ",
          default: "sampleProject"
        },
        // {
        //   type: "configuration",
        //   name: "confirmServer",
        //   message: "Do you want a server? : ",
        //   default: "no"
        // },
        // {
        //   type: "confirmation",
        //   name: "confirmClient",
        //   message: "Do you want client? : ",
        //   default: "no"
        // },
        {
          type: "confirmation",
          name: "confirmEx2",
          message: "Exercise 2 : ",
          default: "yes"
        }
      ]);

      this.brmaConfig.projectName = this.answers.projectName;
      // This.brmaConfig.confirmClient = this.answers.confirmClient;
      // this.brmaConfig.confirmServer = this.answers.confirmServer;
      this.brmaConfig.confirmEx2 = this.answers.confirmEx2;
    } else {
      console.log("Prompting Skipped");

      this.answers = [];
      // This.answers.confirmServer = this.brmaConfig.confirmServer;
      // this.answers.confirmClient = this.brmaConfig.confirmClient;
      this.answers.confirmEx2 = this.brmaConfig.confirmEx2;
    }
  }

  initializing() {
    console.log("initializing");

    this.brmaConfig = this.config.createProxy();
  }

  configuring() {
    console.log("configuring");

    if (this.answers.confirmServer == "yes") {
      this.composeWith(require.resolve("../server"), { preprocessor: "sass" });
    }

    if (this.answers.confirmClient == "yes") {
      this.composeWith(require.resolve("../client"), { preprocessor: "sass" });
    }

    if (this.answers.confirmEx2 == "yes") {
      this.composeWith(require.resolve("../ex2"), { preprocessor: "sass" });
    }
  }

  end() {
    console.log("end");
  }

  // Writing(){
  //   console.log("writing");
  // }

  // conflicts(){
  //   console.log("conflicts");
  // }

  // install(){
  //   console.log("install");
  // }

  // EXISTED CODE :

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
