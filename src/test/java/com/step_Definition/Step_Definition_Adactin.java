package com.step_Definition;

import org.openqa.selenium.WebDriver;

import com.Cucumber_Adactin.Base_Class;
import com.pom_Manager.Page_Object_Manager_Adactin;
import com.test_runner.Test_Runner;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Step_Definition_Adactin extends Base_Class {
	
	public static WebDriver driver = Test_Runner.driver;
	
	public static Page_Object_Manager_Adactin pom = new Page_Object_Manager_Adactin(driver);
	
	@Given("^user Launch The Application$")
	public void user_Launch_The_Application() throws Throwable {
     
		String url = com.configurstion_Helper.File_Reader_Manager_Adactin.get_instance_FRM().get_instance_CR().get_config_url();
		geturl(url);

	}

	
	
	@When("^user Enter The \"([^\"]*)\" In Username Field$")
	public void user_Enter_The_In_Username_Field(String username) throws Throwable {
		
		userinput(pom.get_Instance_Lp().getUsername(), username);
		
	}
	
	
	@When("^user Enter the \"([^\"]*)\"  In Password Field$")
	public void user_Enter_the_In_Password_Field(String password) throws Throwable {
		
		
		userinput(pom.get_Instance_Lp().getPassword(), password);

	}

	@Then("^user Click On The Login Button And It Navigates to Search Hotel Page$")
	public void user_Click_On_The_Login_Button_And_It_Navigates_to_Search_Hotel_Page() throws Throwable {
		
		
		clickonElement(pom.get_Instance_Lp().getLogin());
		
		sleepmethod(3000);

	}
	

//	@When("^user Select The Hotel Location$")
//	public void user_Select_The_Hotel_Location() throws Throwable {
//	
//		   dropdown("byText", pom.get_Instance_Hp().getLocaion(), "London");
//		
//
//	}
	
	@When("^user Select The \"([^\"]*)\"$")
	public void user_Select_The(String location) throws Throwable {
		
		dropdown("byText", pom.get_Instance_Hp().getLocaion(), location);
		
	}

	@When("^user Select The Hotel$")
	public void user_Select_The_Hotel() throws Throwable {

		
	}

	@When("^user Select The Room Type$")
	public void user_Select_The_Room_Type() throws Throwable {
		
		dropdown("byIndex", pom.get_Instance_Hp().getRoomtype(), "3");

	}

	@When("^user Select the No Of Rooms$")
	public void user_Select_the_No_Of_Rooms() throws Throwable {
		
		dropdown("byIndex",pom.get_Instance_Hp().getNoof_room(), "4");

	}

	@When("^user Enter the Checkin Date$")
	public void user_Enter_the_Checkin_Date() throws Throwable {
		
		clearelement(pom.get_Instance_Hp().getCheckin());
		
		userinput(pom.get_Instance_Hp().getCheckin(), particular_Data("C:\\Users\\hp\\eclipse-workspace\\Cucumber_Adactin\\Adactin Test case.xlsx", 7, 5));
		

	}

	@When("^user Enter The Checkout Date$")
	public void user_Enter_The_Checkout_Date() throws Throwable {
		
		clearelement(pom.get_Instance_Hp().getCheckout());
		
		userinput(pom.get_Instance_Hp().getCheckout(), particular_Data("C:\\\\Users\\\\hp\\\\eclipse-workspace\\\\Cucumber_Adactin\\\\Adactin Test case.xlsx", 8, 5));

	}

	@When("^user Select The No Of Adults$")
	public void user_Select_The_No_Of_Adults() throws Throwable {
		
		dropdown("byIndex", pom.get_Instance_Hp().getAdults(),"3");

	}

	@When("^user Select The No Of Children$")
	public void user_Select_The_No_Of_Children() throws Throwable {
		
		dropdown("byIndex", pom.get_Instance_Hp().getChild(), "1");
		
		sleepmethod(3000);

	}

	@Then("^user Click on the Search Button And It Navigate To Select Hotel Page$")
	public void user_Click_on_the_Search_Button_And_It_Navigate_To_Select_Hotel_Page() throws Throwable {
		
		clickonElement(pom.get_Instance_Hp().getSearch());

	}
//
//	@When("^User Click on the Select radio Button$")
//	public void user_Click_on_the_Select_radio_Button() throws Throwable {
//		
//		clickonElement(pom.get_Instance_Hs().getSelect1());
//
//	}
//
//	@Then("^ususer Click on the Search Button And It Navigate To Book AHotel Page$")
//	public void ususer_Click_on_the_Search_Button_And_It_Navigate_To_Book_AHotel_Page() throws Throwable {
//		
//		clickonElement(pom.get_Instance_Hs().getContinue1());
//		
//	}
	
	@When("^user Click on the Select radio Button$")
	public void user_Click_on_the_Select_radio_Button() throws Throwable {
		
		clickonElement(pom.get_Instance_Hs().getSelect1());
	   
	}

	@Then("^ususer Click on the Search Button And It Navigate To Book A Hotel Page$")
	public void ususer_Click_on_the_Search_Button_And_It_Navigate_To_Book_A_Hotel_Page() throws Throwable {
	
		clickonElement(pom.get_Instance_Hs().getContinue1());
	}



	@When("^user Enter the First Name$")
	public void user_Enter_the_First_Name() throws Throwable {
		
		userinput(pom.get_Instance_Bk().getFirstname(), particular_Data("C:\\Users\\hp\\eclipse-workspace\\Cucumber_Adactin\\Adactin Test case.xlsx", 14, 5));
		
	}

	@When("^user Enter the Last Name$")
	public void user_Enter_the_Last_Name() throws Throwable {

		userinput(pom.get_Instance_Bk().getLastname(), particular_Data("C:\\Users\\hp\\eclipse-workspace\\Cucumber_Adactin\\Adactin Test case.xlsx", 15, 5));
		
	}

	@When("^user Enter The Billing Address$")
	public void user_Enter_The_Billing_Address() throws Throwable {
		
		userinput(pom.get_Instance_Bk().getBiladd(), particular_Data("C:\\Users\\hp\\eclipse-workspace\\Cucumber_Adactin\\Adactin Test case.xlsx", 16, 5));

	}

	@When("^user Enter The Credit Card Detail$")
	public void user_Enter_The_Credit_Card_Detail() throws Throwable {
		
		userinput(pom.get_Instance_Bk().getCardno(), particular_Data("C:\\Users\\hp\\eclipse-workspace\\Cucumber_Adactin\\Adactin Test case.xlsx", 17, 5));

	}

	@When("^user Select Card Type$")
	public void user_Select_Card_Type() throws Throwable {
		
		dropdown("byIndex", pom.get_Instance_Bk().getCardtype(), "3");

	}

	@When("^user Select Expiry Date And Year$")
	public void user_Select_Expiry_Date_And_Year() throws Throwable {
		
		dropdown("ByText", pom.get_Instance_Bk().getExpairmth(), "June");
		
		dropdown("byText", pom.get_Instance_Bk().getExpairyr(), "2022");

	}

	@When("^user Enter The CVV Number$")
	public void user_Enter_The_CVV_Number() throws Throwable {
		
		userinput(pom.get_Instance_Bk().getCvv(), particular_Data("C:\\Users\\hp\\eclipse-workspace\\Cucumber_Adactin\\Adactin Test case.xlsx", 20, 5));
		
		sleepmethod(9000);
		
	}

	@Then("^ususer Click on the Booknow Button And It Navigate To Booking Confirmation page$")
	public void ususer_Click_on_the_Booknow_Button_And_It_Navigate_To_Booking_Confirmation_page() throws Throwable {
		
		clickonElement(pom.get_Instance_Bk().getBooknow());
	}



}
