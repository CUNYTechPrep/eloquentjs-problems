# Eloquent JavaScript Problem Set

This repository contains tests for the problems in chapters 4, 5, and 13 of the [Eloquent JavaScript](http://eloquentjavascript.net/index.html) book. The tests are written using the [Jest](https://facebook.github.io/jest/) testing framework.

## Submission Instructions

1. Fork this repository

2. Clone your own repository

`git clone https://github.com/MY_USERNAME/eloquentjs-problems.git`

3. Open the repo in your Text Editor

4. On the command line, run:

`cd eloquentjs-problems`

`npm install`

> It is recommended that you are using Node 6 or 8. If you followed my instructions during orientation, then you should have at least one of these installed. If not follow the NVM instructions [here](https://github.com/CUNYTechPrep/ctp2017/blob/master/lecture-notes/orientation-dev-setup.md#nvm-and-node).

5. Run the tests with one of the following

`npm test` - will run all tests once, you may prefer the following:

`npm test -- --watch` - this will run the tests and will continue watching your files for modifications and will automatically rerun your tests.

6. Add your solutions to the files: `chapter04.js`, `chapter05.js`, and `chapter13.js`. You do not have to modify the test files `chapter04.test.js`, `chapter05.test.js`, and `chapter13.test.js`.

7. Commit and Push your changes.

8. Create a Pull Request to notify us of your submission.

9. DONE!

## About the tests

Testing is an important aspect of developing software. It ensures that we meet our initial specifications, and ensures future changes and/or optimizations do not break our software.

There are many testing frameworks available for JavaScript, all with their own merits. Here we opted for the Jest framework as it is commonly used with React, a library we will be using in this program.

To learn more about the Jest library you can start here:

[Jest - Getting Started](https://facebook.github.io/jest/docs/en/getting-started.html)

and here:

[Jest - Using matchers](https://facebook.github.io/jest/docs/en/using-matchers.html#content)

and finally I recommend you go over the tests I wrote for these problems. The tests check a couple of cases for each function, but they can certainly be improved by checking more edge cases.

**BONUS POINTS:** If you come up with more tests, write them and create a Pull Request so we can improve this test suite together!
