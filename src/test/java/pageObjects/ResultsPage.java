package pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class ResultsPage {

	public WebDriver driver;
	
	public ResultsPage(WebDriver d) {
		this.driver = d;
	}
	
	By result = By.cssSelector("//span[contains(text(),'ITC Maurya, a Luxury Collection Hotel, New Delhi')]");
	public WebElement resultDisplay() {
		return driver.findElement(result);
	}
	
}
