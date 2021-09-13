package stepDefinition;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import pageObjects.LandingPage;
import resources.Base;

@SuppressWarnings("deprecation")
public class OurBrand_StepDefinition extends Base {

	public static Logger log = LogManager.getLogger(Base.class.getName());
	
	@Given("^user opens browser and enters url$")
	public void user_opens_browser_and_enters_url() throws Throwable {
	    driver = setupDriver();
	    log.info("Browser opened");
	}

	@When("^user clicks on our brands$")
	public void user_clicks_on_our_brands() throws Throwable {
		LandingPage lp = new LandingPage(driver);
		lp.ourBrandClick().click();
		log.info("Clicked on Our Brands");
	}

	@Then("^verify whether JW Marriot is displayed$")
	public void verify_whether_JW_Marriot_is_displayed() throws Throwable {
		LandingPage lp = new LandingPage(driver);
	    Assert.assertTrue(lp.jwMarriotElement().isDisplayed());
	    log.info("Validated element displayed or not");
		driver.close();
	}
	
}
