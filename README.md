# Codelabs-Sheetsapi-Angular t

This is my attempt to follow the steps in the [Codelabs Google Sheets-API Tutorial](https://codelabs.developers.google.com/codelabs/sheets-api/#0).

## Usage

### To create a local copy:

Go to the parent directory where you want the code subdirectory to be created, for example the directory ~/local/dev

`cd ~/local/dev`

Create a copy of the code locally. It will create a new subdirectory called codelabs-sheetsapi-angular and pull in the code from the Github repository. (Git needs to be installed.)

`git clone https://github.com/davidgma/codelabs-sheetsapi-angular.git`

`cd codelabs-sheetsapi-angular`

### To test the local copy:
First bring in all the npm dependencies. If running this causes errors, try deleting the node_modules directory and trying again.

`npm install`

The [Angular cli](https://cli.angular.io/) needs to be installed. If it isn't already, install it with 

`npm install -g @angular/cli`

or follow instructions on the Angular cli website.

Then serve the program and open it in a web page:

`ng serve --open`

If you want to test it with the latest versions of all the dependencies, use [npm-check-updates](https://www.npmjs.com/package/npm-check-updates)

```
npm install -g npm-check-updates
ncu
ncu -u
npm update
```

## How I set up the Github Pages part.

Github Pages allows for the serving of the Angular files on the web. For example, this repository can be opened up with the address https://davidgma.github.io/codelabs-sheetsapi-angular.

It's tricky to set up, but fortunately there's a program that does almost everything for you: [angular-cli-ghpages](https://www.npmjs.com/package/angular-cli-ghpages). Leave the outputPath in the angular.json file set to dist (the default).

`npm install -g angular-cli-ghpages`

Once it's installed, the following commands, issued in the subdirectory that git created when you first cloned the code, will update the online repository and make sure that it is set to publish the web page.

```
ng build --base-href "https://davidgma.github.io/codelabs-sheetsapi-angular/"
git add *
git commit -a -m "Rebuild and publish."
git push
ngh
```

As a one-time set-up task, I had to point the Github Pages setting to the gh-pages branch that the ngh command set up and populated. This is done on Github, Code, Settings, Github Pages, Source, gh-pages branch.



