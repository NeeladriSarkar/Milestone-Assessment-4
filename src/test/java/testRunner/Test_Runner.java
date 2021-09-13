package testRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/java/features",
				 glue = {"stepDefinition"},
				 plugin = {"json:target/cucumber.json", "pretty",
					        "html:target/cucumber-reports"}
				)
public class Test_Runner {

}
