# Homework_03
Repo. for third homework assignment, Random Password Generator.

## Purpose
This Random Password Generator will prompt the user to define a series of parameters, from which it will generate a conformant randomized password. By utilizing this application, the user can create a virtually infinite number of passwords on the fly, and include or exclude character types as necessary.

## Requirements
1. Prompt user for password length.
2. Receive user confirmation as to which of the following character types are to be included in the password: lowercase, uppercase, numbers, special characters.
3. If a character type is selected, ensure that at least one such character type is in password.
4. Ensure that no characters from excluded character types are present.
5. Generate password that is compliant with above conditions.
6. Write this password to screen, or display via an alert.

## Results
Final version achieves all of the above requirements, including guaranteeing compliance by forcing user to stay within defined parameters. On top of this, it works repeatedly without refreshing/reloading the browser by resetting array lengths as part of the function. This took me a loooooonnnnnngggg time to figure out, but I think it makes for a much more elegant solution than hitting refresh every time.

--Everything below this was part of my documenting my thought process, and is offered for reference but does not require review--

## Hypotheses
I think that I can use the confirmation of variables to enable/disable properties in an object type that includes all potential character types, and then run a function directed by a for statement (password length), to build the complete password.

I also need to ensure at least one character, so I may need to force write the inclusion at the point of confirm (and decrement the password length value accordingly for any subsequent function calls.)

At the end, once I have enough characters of the appropriate type, perhaps I need to run a randomizing function of some sort to mix them up?

## To Research
1. Confirm whether or not I can turn properties on/off, make char sets active/inactive using confirms. YES
2. See if there is a command to randomize a string once assembled. YES
3. 2/4/2020- Figure out how to make the damn push or concat function work. Simplify code, break into smaller bits. USE CONSOLE LOG TO CONFIRM VALUES ARE BEING PASSED ON per Tim.

### Commit History
1. Initial commit: Generation of repo. and creation of base Readme.md
2. Getting started: Uploading source files (unworked), this Readme, and .jpeg of pseudo code notes
NOT MODIFYING THIS ANYMORE. IT'S ALL CONTAINED IN THE REPO MAKING THIS A REDUNDANT EXERCISE.
