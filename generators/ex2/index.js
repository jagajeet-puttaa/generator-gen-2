"use strict";
const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  initializing() {
    console.log("Ex2 being done");
    this.brmaConfig = this.config.createProxy();
  }

  async prompting() {
    console.log("Prompting");

    this.responses = await this.prompt([
      {
        type: "input",
        name: "title",
        message: "Enter the title of the page : ",
        default: "Hugh Jackman"
      },
      {
        type: "url",
        name: "img1",
        message: "Enter the URL of the image : ",
        default:
          "https://pbs.twimg.com/profile_images/1302962150302982146/NTb6iGpC_400x400.jpg"
      },
      {
        type: "input",
        name: "list1",
        message: "Enter the roles : ",
        default: "Singer Producer Actor"
      },
      {
        type: "input",
        name: "socialmedia",
        message: "Enter the social media available : ",
        default: "Instagram "
      },
      {
        type: "input",
        name: "profileLink",
        message: "Enter the link : ",
        default: "https://www.instagram.com/thehughjackman/?hl=en"
      },
      {
        type: "checkbox",
        name: "genres",
        message: "Select Genres",
        choices: ["Sci-fi", "Action", "Comedy", "Romance", "Biography"]
      },
      {
        type: "list",
        name: "row1",
        message: "Rate the movie (1)",
        choices: ["Intestellar", "Inception", "Gravity", "Top Gun"],
        default: "Inception"
      },
      {
        type: "list",
        name: "row2",
        message: "Rate the movie (2)",
        choices: ["Intestellar", "Inception", "Gravity", "Top Gun"],
        default: "Intestellar"
      },
      {
        type: "list",
        name: "row3",
        message: "Rate the movie (3)",
        choices: ["Intestellar", "Inception", "Gravity", "Top Gun"],
        default: "Gravity"
      },
      {
        type: "confirm",
        name: "confirmFooter",
        message: "Do you want footer : "
      }
    ]);

    this.brmaConfig.xtitle = this.responses.title;
    this.brmaConfig.ximg1 = this.responses.img1;
    this.brmaConfig.socialmedia = this.responses.socialmedia;
    this.brmaConfig.xlist1 = this.responses.list1.split(" ");
    this.brmaConfig.profileLink = this.responses.profileLink;
    this.brmaConfig.genres = this.responses.genres;
    this.brmaConfig.confirmFooter = this.responses.confirmFooter;
    this.brmaConfig.xratings = {
      1: this.responses.row1,
      2: this.responses.row2,
      3: this.responses.row3
    };
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath("index.html"),
      this.destinationPath("xapp/index.html"),
      {
        title: this.responses.title,
        img1: this.responses.img1,
        list1: this.brmaConfig.xlist1,
        socialmedia: this.brmaConfig.socialmedia,
        profileLink: this.brmaConfig.profileLink,
        ratings: this.brmaConfig.xratings,
        genres: this.responses.genres,
        confirmFooter: this.responses.confirmFooter
      }
    );
  }
};
