package pageObjects;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class LandingPage {
	
	public WebDriver driver;
	
	public LandingPage(WebDriver d) {
		this.driver = d;
	}
	
	By ourBrand = By.className("t-font-weight-bold");
	public WebElement ourBrandClick() {
		List<WebElement> l = driver.findElements(ourBrand);
		return l.get(3);
		
	}
	
	By jwMarriot = By.cssSelector("a[href*='jw-marriot']");
	public WebElement jwMarriotElement() {
		return driver.findElement(jwMarriot);
	}
	
	By memberBenefits = By.cssSelector("a[title*='Member Benefits']");
	public WebElement clickMemberBenefits() {
		return driver.findElement(memberBenefits);
	}
	
	By input = By.cssSelector("input[id*='search-location']");
	public WebElement inputCity() {
		return driver.findElement(input);
	}
	
	By search = By.cssSelector("button[class*='analytics-click']");
	public WebElement clickSearch() {
		return driver.findElement(search);
	}
	
}
