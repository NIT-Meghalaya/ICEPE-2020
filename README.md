# ICEPE IEEE International Conference Website    

This repository includes the files for the website made for the 3rd IEEE ICEPE Conference to be held at National Institute of Technology, Meghalaya on 4th-6th September, 2020 at the Institute Campus.  

The application is a simple static site made for the event by a small team of 3 members. The team members responsible for making and maintaining the website are:

- [Abhushan A . Joshi](https://github.com/abhu-A-J)
- [Davien M. Syiemlieh](https://github.com/CodeVague)
- [Damiki Laloo](https://github.com/Damiki)

 Few instructions to help you get started:  

- To install dependencies required:
  `npm install`
- To start the development version of the application:
  `npm run start`
- To simply watch the SaSS files compilation hit:
  `npm run watch:sass`
- To make the site ready for deployment hit:
  `npm run build:css`


Folder Structure for SaSS files:
7*1 CSS Architecture is used to manage CSS files:
The following folder are present inside SaSS folder 
- Abstract: include your variables and mixins there
- Base: include typography, base styles,ulitity classes and animations
- Components: put all independent components styling here
- Layout : include navbar and footer styling only for now.
- Pages: include section based styling for independent pages.


>Note: Try to follow BEM Methodology for naming classes as much as possible for easier understanding. Rest required files are in What's App group.

