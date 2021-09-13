package stepDefinition;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import pageObjects.BenefitsPage;
import pageObjects.LandingPage;
import resources.Base;

@SuppressWarnings("deprecation")
public class MemberBenefits_StepDefinition extends Base {

	public static Logger log = LogManager.getLogger(Base.class.getName());
	
	@Given("^user opens browser and enters the url$")
	public void user_opens_browser_and_enters_url() throws Throwable {
	    driver = setupDriver();
	    log.info("Browser opened");
	}
	
	@When("^user clicks on Member Benefits$")
	public void user_clicks_on_Member_Benefits() throws Throwable {
	    LandingPage lp = new LandingPage(driver);
	    lp.clickMemberBenefits().click();
	    log.info("Clicked on member benefits");
	}

	@Then("^user is navigated to benefits page and verify if text is displayed$")
	public void user_is_navigated_to_benefits_page_and_verify_if_text_is_displayed() throws Throwable {
	    BenefitsPage bp = new BenefitsPage(driver);
	    Assert.assertTrue(bp.validateText().isDisplayed());
	    log.info("Validated text");
	    driver.close();
	}
	
}
