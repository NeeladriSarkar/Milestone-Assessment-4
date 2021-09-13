package stepDefinition;

import java.util.concurrent.TimeUnit;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.openqa.selenium.Keys;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import pageObjects.LandingPage;
import pageObjects.ResultsPage;
import resources.Base;

@SuppressWarnings("deprecation")
public class Search_StepDefinition extends Base {

	public static Logger log = LogManager.getLogger(Base.class.getName());
	
	@Given("^user navigates to homepage$")
	public void user_navigates_to_homepage() throws Throwable {
	    driver = setupDriver();
	    log.info("Browser opened");
	}

	@When("^user enters \"([^\"]*)\" in search box$")
	public void user_enters_in_search_box(String arg1) throws Throwable {
	    LandingPage lp = new LandingPage(driver);
	    lp.inputCity().sendKeys(arg1);
	    driver.manage().timeouts().implicitlyWait(2, TimeUnit.SECONDS);
	    lp.inputCity().sendKeys(Keys.ENTER);
	    log.info("Entered search query");
	}

	@When("^clicks on search button$")
	public void clicks_on_search_button() throws Throwable {
		LandingPage lp = new LandingPage(driver);
		lp.clickSearch().click();
		log.info("Clicked on search button");
	}

	@Then("^user is navigated to results page and verify if city name is present$")
	public void user_is_navigated_to_results_page_and_verify_if_city_name_is_present() throws Throwable {
	    ResultsPage rp = new ResultsPage(driver);
	    Assert.assertTrue(rp.resultDisplay().getText().contains("Delhi"));
	    log.info("Validated whether first result contains entered city");
	    driver.close();
	}
	
}
