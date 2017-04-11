
# Tribute Page [![Build Status](https://travis-ci.org/arpitgo4/Tribute-Page.svg?branch=master)](https://travis-ci.org/arpitgo4/Tribute-Page)
Basic design challenge from freecodecamp.com for Front Developer Certification [Build a Tribute Page](https://www.freecodecamp.com/challenges/build-a-tribute-page).


## Project Structure 

```
	.
	├── src                     	#  Frontend source files
	|   ├── components          	#  React component's source
	|   ├── index.html          	#  Root HTML template
	|   ├── index.js            	#  Frontend source entry point
	|   └── style.css           	#  Global stylesheet
	├── .babelrc                	#  Babel configuration ( ES6, React, JSX )
	├── .eslintrc               	#  ESLint configuration
	├── devServer.js            	#  Hot loading server source ( development mode )                     
	├── dist                        #  Compiled files     
	├── .gitignore                  #  Ignored files from git commit
	├── server.js                   #  Express server configuration ( routes, middlewares, models )
	├── LICENSE                     #  License to use the project
	├── package.json                #  Frontend and backend dependencies
	├── README.md                   #  This file
	└── webpack.config.js           #  Webpack configuration for 'production' and 'development' 
 
```

## Quick Start
### Just to check everything is working
```
# Install the dependencies
npm install

# Build the client 
npm run build:production

# Start the project ( it will build the client, before starting the server )
npm start

# Open web browser at http://localhost:8080
```
