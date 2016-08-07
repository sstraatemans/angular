## installation instructions
Follow these instructions to get the bootstrap app to work.  
Make sure you have Git, Npm and Gulp installed globally.

Clone this repo
```
git clone https://github.com/sstraatemans/angular.git
```
Install Json-server globally   
```
$ npm install json-server -g
```
Install the Npm dependencies
```
$ npm i
```
run Json-server and keep it running.  
This will start the REST-API on `http://localhost:3000`
```
$ npm run json
```
run Gulp in a new window and keep it running
```
$ gulp
```
Now you can open the app on `http://localhost:4500`

If you want you can run the karma tests
```
$ npm run test
```
For PhantomCSS Visual Regression tests
```
$ npm run visualtest
```

Enjoy!
