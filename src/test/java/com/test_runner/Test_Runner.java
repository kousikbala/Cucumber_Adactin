package com.test_runner;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;
import com.Cucumber_Adactin.Base_Class;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
	
		features = "src\\test\\java\\com\\feature_file_adactin\\Adactin_feature_file.feature",
		
		glue = "com.step_Definition",
		
		//tags = ("~@ad4"),
		
	    monochrome = true,
		
		dryRun = false,
		
		strict = true,
		
		plugin = {
				
				//"html:Cucumber_Repotrs/Rep",
				
				//"json:Cucumber_Repots/Jsonreport.json",
				
				"com.cucumber.listener.ExtentCucumberFormatter:Reports/Ext.html"
					
		}
		
		
		)

public class Test_Runner {
	
	public static WebDriver driver;
	
	@BeforeClass
	public static void set_Up() {
		
		 driver = Base_Class.browser_configuration("chrome");

	}
	
	@AfterClass
	public static void tear_Down() {
		
		driver.close();

		
	}
	
	

}
