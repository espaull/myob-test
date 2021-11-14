# Elliot Spaull - MYOB Tech Test

First of all, I know this was supposed to be a console application, but I decided to write a very basic web app (bootstrapped with create-react-app) instead as I thought it would be a better showcase of my skills. I really hope this is ok!

## Running the project

To run the project, please run the command `yarn && yarn start` at the root of the project. It will automatically open a browser where you can begin entering names and salaries.

## Testing the project

To run the tests, please run the command `yarn test` (after having already installed dependencies via the previous command).

## Why I built the solution the way I did

I chose the simplest method I could think of to get something up and running quickly, and decided to go for a more visual approach than a console application. I chose to use create react app as it handles a lot of boiler plate, such as setting up webpack and babel, and also sets up jest/react-testing-library, allowing me to easily write tests.

I am comfortable setting up React projects from scratch, creating a webpack config etc., but decided to use CRA to save some time.

## Design decisions

There weren't too many design decisions to take into account as the task is quite straight forward, but I made sure to split everything out as much as I felt was necessary. Each calculation sits in its own method, with the main 'calculate' method just grabbing values from each of them and returning the result.

The biggest design decision was to pass the tax brackets as a 'taxConfig' object to the 'calcIncomeTax' method. This allows me to very easily change the calculations that are being done, and also simplifies testing. If the method was pulling from some static set of tax brackets then any changes to those brackets would require re-doing the tests.

The front end is very basic, just a form that takes two inputs, does the calculation, and spits out the results. I split these into a couple of tiny components which just handle one thing each.

## Assumptions

I made a few assumptions, such as thinking that we probably won't be passing any junk data. There is some very basic validation to check that you're at least passing in a number, but I've assumed that we won't be dealing with any negative numbers. It won't error, but the calculations would obviously be weird...

I've also assumed that any money below the lower threshold of the first taxable bracket is always tax free, which is why in the code you can see I immediately subtract the lower threshold of the first taxable bracket from the base salary to get taxableSalary. This will still work just fine if the 0 to X bracket is added in the taxConfig with any tax rate.

One last assumption is that we are all ok with rounding the monetary values and not dealing with tiny fractions of pennies.

## Trade-offs

I didn't spend a lot of time on the UI, as I'm sure you can tell. It's functional, but it's certainly not pretty!

I also used a basic config for the tax brackets. It could be simplified by having the lower bound be pulled from the upper bound of the previous bracket, then perhaps have a separate 'taxFreeAllowance' property in there too.
