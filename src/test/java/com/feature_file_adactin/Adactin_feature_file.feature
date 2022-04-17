  Feature: Hotel Booking In Adactin Application

@ad1
Scenario Outline: Login page

Given user Launch The Application

When user Enter The "<username>" In Username Field

And user Enter the "<password>"  In Password Field

Then user Click On The Login Button And It Navigates to Search Hotel Page

Examples:
|username|password|
|Starc|1234|
|ABC|dhajbd|
|kousikbala|P5318Z|



@ad2
Scenario: Search Hotel Page

When user Select The "Sydney"

And user Select The Hotel

And user Select The Room Type

And user Select the No Of Rooms

And user Enter the Checkin Date

And user Enter The Checkout Date 

And user Select The No Of Adults

And user Select The No Of Children

Then user Click on the Search Button And It Navigate To Select Hotel Page


@ad3
Scenario: Hotel Select Page

When user Click on the Select radio Button

Then ususer Click on the Search Button And It Navigate To Book A Hotel Page


@ad4
Scenario: Book A Hotel Page

When user Enter the First Name

And user Enter the Last Name

And user Enter The Billing Address

And user Enter The Credit Card Detail

And user Select Card Type

And user Select Expiry Date And Year

And user Enter The CVV Number

Then ususer Click on the Booknow Button And It Navigate To Booking Confirmation page 

