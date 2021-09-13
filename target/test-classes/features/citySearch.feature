Feature: City Search Validation

Scenario: Check whether city name is displayed in search results

Given user navigates to homepage
When user enters "Delhi" in search box
And clicks on search button
Then user is navigated to results page and verify if city name is present