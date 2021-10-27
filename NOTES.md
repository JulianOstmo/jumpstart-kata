# Create a kata Jumpstart using BDD

# US1 
is gh installed?
# US2 
install gh :slightly_smiling_face:
  ## US2.1 
  is brew installed?
  ## US2.2 
  install brew

## Pomodoro 1

- ✅ Install Cucumber
npm i @cucumber/cucumber --save-dev
- ✅ Set up the Cucumber watcher
  - ✅ "bdd": "cucumber-js || true",
  - ✅ "bdd:watch": "nodemon --quiet --ext js --watch ./ --exec npm run bdd --delay 2",
- ✅ Create the feature for when gh is installed
  - ✅ create the features directory
  - ✅ create the package.feature
  - ✅ Define the Given, When, Then
- ✅ Create the step definition for when gh is installed
  - ✅ create the features/step_definitions directory
  - ✅ create the package_steps.js
  - ✅ Define the steps for Given, When, Then
- Create the feature for when gh is not installed
- Create the step definition for when gh is not installed

## Pomdoro 2

- ✅ TDD approach for when gh is installed, jumpstart() returns true
- ✅ update BDD test to pass
- 🚧 Create a wrapper script to check that gh is installed
- Create the function to assert that gh is installed locally
- Create the feature for when gh is not installed
- Create the step definition for when gh is not installed

## Pomodoro 3

- ✅ Create a wrapper script to check that gh is installed
- Create the function to assert that gh is installed locally
- Create the feature for when gh is not installed
- Create the step definition for when gh is not installed

## Pomodoro 4

- ✅ Create the feature for when gh is not installed
- Create the step definition for when gh is not installed
- Refactor when for script is called

## Pomodoro 5
- package_steps.js:
  - ✅ clean it up
  - ✅ fix: When('jumpstart --check-only is called
    - ✅ add dummy implementation of flag being received
- Create: Unit test - should return false if GH is not installed
- 