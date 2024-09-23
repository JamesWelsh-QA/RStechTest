Hello and thankyou for the oppurtunity. I'm new to PlayWright so bare with

Ive not used playwright before so bare with, ive used selenium in the past,
apologies if carried over any practises from there that are not usually seen
with playwright.

Test Notes
    -- Scenario 1 and 2 are done on the same demo site, however realised after 
    starting that it didnt contain a search feature.

    So, Scenario 3 is done on my current works PLT site
    Thought of this as a oppurtunity to display folder structure and reusing
    the invokeBrowser function in differnt tests with the same file.

    -- Have followed the Page Object Model (POM) to split code per page for reusability
    -- POMS splits into folders per page / feature of each website
    -- Browser manager in its old folder to take in URL required for desired test (url declared at the top of test files)
    -- test files only consisting of function calls and assertions
    -- have tried to make everything as reusable as possible but understand there still areas for improvement in my implementation

    -- tests are currently set to run in parallel
    -- to run all in chrome, firefox and webkit headless type into console:
            npx playwright test
    -- to run in specific browser type into console (change project name to chromium, firefox or webkit)
            npx playwright test --project=firefox


Issues Faced

    Scenario 1

        - Found myself having to use alot of explicit. When writing the script in one
        file I had no issues however after splitng into POMs the test started breaking
        mainly on button clicks so had to use a hacky was and explicitly wait. Apolgies 
        for the mess. I think thins is due to the javascript of the button not loading as
        the script tries to click.

        To improve this I would either find a better wait of using waits for waiting for
        elements to load before clicking

        if the waits were to stay then I would suggest to myself to make the explicit was
        a reusable function rather than write it multiple times (could do this in the config file)
        or just as a fuction in browserSetup

        - the website I used i found after starting the assignment was flaky when running tests
        will avoid these dummy sites in future and 

    Scenario 2

        - after submitting the form, the only success message was a browser alert
        there was no recognition of success on the page itself
        - to get around this ive asserted the text from the alert and also asserted
        that the pop out for the contact us form is hidden after submit

    Scenario 3

        - no search bar on website used for scenario 1 and 2
        - the last step of the scenario asked for me to handle no products being 
        returned from search. Although not implemented my solution to this would be 
        to send the search terms as a array of different search terms, starting from 1 
        or a random number in the array, it would search and and if no resutls round
        loop and search for another value from the array.
        Would suggest setting this to a max of X amount of tries since it could potentially
        be a huge array of elements.
        #

Happy to talk through this in more detail
Thankyou again :)