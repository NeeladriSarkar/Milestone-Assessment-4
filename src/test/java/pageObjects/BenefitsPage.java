package pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class BenefitsPage {
	
	public WebDriver driver;
	
	public BenefitsPage(WebDriver d) {
		this.driver = d;
	}
	
	By pageText = By.cssSelector("h3[class*='l-margin-top']");
	public WebElement validateText() {
		return driver.findElement(pageText);
	}
	
}
