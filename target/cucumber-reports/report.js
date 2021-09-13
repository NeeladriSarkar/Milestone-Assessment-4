$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("citySearch.feature");
formatter.feature({
  "line": 1,
  "name": "City Search Validation",
  "description": "",
  "id": "city-search-validation",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Check whether city name is displayed in search results",
  "description": "",
  "id": "city-search-validation;check-whether-city-name-is-displayed-in-search-results",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user navigates to homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enters \"Delhi\" in search box",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "clicks on search button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user is navigated to results page and verify if city name is present",
  "keyword": "Then "
});
formatter.match({
  "location": "Search_StepDefinition.user_navigates_to_homepage()"
});
formatter.result({
  "duration": 25985561300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Delhi",
      "offset": 13
    }
  ],
  "location": "Search_StepDefinition.user_enters_in_search_box(String)"
});
formatter.result({
  "duration": 3998167400,
  "status": "passed"
});
formatter.match({
  "location": "Search_StepDefinition.clicks_on_search_button()"
});
formatter.result({
  "duration": 9670260600,
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d93.0.4577.63)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027NEELADRI\u0027, ip: \u0027192.168.0.119\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 93.0.4577.63, chrome: {chromedriverVersion: 92.0.4515.43 (8c61b7e2989f2..., userDataDir: C:\\Users\\KIIT\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:5437}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 25ee4897fe2f40d10ae80dbe94b09d71\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat stepDefinition.Search_StepDefinition.clicks_on_search_button(Search_StepDefinition.java:40)\r\n\tat ✽.And clicks on search button(citySearch.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Search_StepDefinition.user_is_navigated_to_results_page_and_verify_if_city_name_is_present()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("memberBenefits.feature");
formatter.feature({
  "line": 1,
  "name": "Member Benefits Validation",
  "description": "",
  "id": "member-benefits-validation",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Verify whether text is displayed in benefits page",
  "description": "",
  "id": "member-benefits-validation;verify-whether-text-is-displayed-in-benefits-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user opens browser and enters the url",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user clicks on Member Benefits",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user is navigated to benefits page and verify if text is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "MemberBenefits_StepDefinition.user_opens_browser_and_enters_url()"
});
formatter.result({
  "duration": 19186363000,
  "status": "passed"
});
formatter.match({
  "location": "MemberBenefits_StepDefinition.user_clicks_on_Member_Benefits()"
});
formatter.result({
  "duration": 6097145100,
  "status": "passed"
});
formatter.match({
  "location": "MemberBenefits_StepDefinition.user_is_navigated_to_benefits_page_and_verify_if_text_is_displayed()"
});
formatter.result({
  "duration": 4188049100,
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:55)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:22)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:31)\r\n\tat stepDefinition.MemberBenefits_StepDefinition.user_is_navigated_to_benefits_page_and_verify_if_text_is_displayed(MemberBenefits_StepDefinition.java:35)\r\n\tat ✽.Then user is navigated to benefits page and verify if text is displayed(memberBenefits.feature:7)\r\n",
  "status": "failed"
});
formatter.uri("ourBrand.feature");
formatter.feature({
  "line": 1,
  "name": "Our Brand verification",
  "description": "",
  "id": "our-brand-verification",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Verify whether JW Marriot is displayed in our brands",
  "description": "",
  "id": "our-brand-verification;verify-whether-jw-marriot-is-displayed-in-our-brands",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user opens browser and enters url",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user clicks on our brands",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "verify whether JW Marriot is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "OurBrand_StepDefinition.user_opens_browser_and_enters_url()"
});
formatter.result({
  "duration": 27131577600,
  "status": "passed"
});
formatter.match({
  "location": "OurBrand_StepDefinition.user_clicks_on_our_brands()"
});
formatter.result({
  "duration": 10379895600,
  "status": "passed"
});
formatter.match({
  "location": "OurBrand_StepDefinition.verify_whether_JW_Marriot_is_displayed()"
});
formatter.result({
  "duration": 2551614100,
  "status": "passed"
});
});