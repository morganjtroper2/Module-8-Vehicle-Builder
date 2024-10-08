# Module 8 Vehicle Builder

## Overview

This vehicle builder/editor is a simple tool accessible from a user's command line interface. It allows users to create new vehicles--either a truck, car, or motorbike--each with their own unique features.

## Installation

Install requisite dev tools. When using .ts source files, specify "rootDir" and "outDir" in accompanying tsconfig.json file. Bash npx tsc to compile the .ts files, which will appear as .js files in the output directory. Using terminal commands, cd into the root directory then run the npm start command, and the application will execute.

## Usage

When you start the app, you will see this prompt, giving you the option to create a new vehicle or select from a list of existing vehicles:

![Application screenshot 1](https://github.com/morganjtroper2/module-8/blob/main/vbss1.png)

The existing vehicles list will include vehicles you've already made:

![Application screenshot 2](https://github.com/morganjtroper2/module-8/blob/main/vbss2.png)

When you are creating a new vehicle, you will first have to select the vehicle type:

![Application screenshot 3](https://github.com/morganjtroper2/module-8/blob/main/vbss3.png)

You can customize the vehicle in a number of ways. 

![Application screenshot 4](https://github.com/morganjtroper2/module-8/blob/main/vbss4.png)

Different vehicles have their own unique characteristics--trucks have a "towing capacity" category, and motorcycles have wheel brand and diameter categories.

Once you select your vehicle, you can select from a list of "actions," some of which only apply to specific vehicle categories.

![Application screenshot 5](https://github.com/morganjtroper2/module-8/blob/main/vbss5.png)

These actions are documented in the console log. You can return to the vehicle selection screen or exit the application from this menue.

![Application screenshot 6](https://github.com/morganjtroper2/module-8/blob/main/vbss6.png)

## Credits and License

By Morgan Troper. Includes code obtained using chatGPT, who was especially helpful at troubleshooting .ts errors. 

[MIT](https://choosealicense.com/licenses/mit/)


