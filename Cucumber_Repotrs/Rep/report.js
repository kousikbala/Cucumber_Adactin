$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/feature_file_adactin/Adactin_feature_file.feature");
formatter.feature({
  "line": 1,
  "name": "Hotel Booking In Adactin Application",
  "description": "",
  "id": "hotel-booking-in-adactin-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Login page",
  "description": "",
  "id": "hotel-booking-in-adactin-application;login-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@ad1"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user Launch The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user Enter The \"\u003cusername\u003e\" In Username Field",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user Enter the \"\u003cpassword\u003e\"  In Password Field",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user Click On The Login Button And It Navigates to Search Hotel Page",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "hotel-booking-in-adactin-application;login-page;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 15,
      "id": "hotel-booking-in-adactin-application;login-page;;1"
    },
    {
      "cells": [
        "Starc",
        "1234"
      ],
      "line": 16,
      "id": "hotel-booking-in-adactin-application;login-page;;2"
    },
    {
      "cells": [
        "ABC",
        "dhajbd"
      ],
      "line": 17,
      "id": "hotel-booking-in-adactin-application;login-page;;3"
    },
    {
      "cells": [
        "kousikbala",
        "P5318Z"
      ],
      "line": 18,
      "id": "hotel-booking-in-adactin-application;login-page;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 16,
  "name": "Login page",
  "description": "",
  "id": "hotel-booking-in-adactin-application;login-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@ad1"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user Launch The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user Enter The \"Starc\" In Username Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user Enter the \"1234\"  In Password Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user Click On The Login Button And It Navigates to Search Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition_Adactin.user_Launch_The_Application()"
});
formatter.result({
  "duration": 88200588000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Starc",
      "offset": 16
    }
  ],
  "location": "Step_Definition_Adactin.user_Enter_The_In_Username_Field(String)"
});
formatter.result({
  "duration": 381746200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234",
      "offset": 16
    }
  ],
  "location": "Step_Definition_Adactin.user_Enter_the_In_Password_Field(String)"
});
formatter.result({
  "duration": 185915600,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Adactin.user_Click_On_The_Login_Button_And_It_Navigates_to_Search_Hotel_Page()"
});
formatter.result({
  "duration": 4435512400,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Login page",
  "description": "",
  "id": "hotel-booking-in-adactin-application;login-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@ad1"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user Launch The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user Enter The \"ABC\" In Username Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user Enter the \"dhajbd\"  In Password Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user Click On The Login Button And It Navigates to Search Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition_Adactin.user_Launch_The_Application()"
});
formatter.result({
  "duration": 1050918800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ABC",
      "offset": 16
    }
  ],
  "location": "Step_Definition_Adactin.user_Enter_The_In_Username_Field(String)"
});
formatter.result({
  "duration": 190685500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dhajbd",
      "offset": 16
    }
  ],
  "location": "Step_Definition_Adactin.user_Enter_the_In_Password_Field(String)"
});
formatter.result({
  "duration": 194696500,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Adactin.user_Click_On_The_Login_Button_And_It_Navigates_to_Search_Hotel_Page()"
});
formatter.result({
  "duration": 3618632000,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Login page",
  "description": "",
  "id": "hotel-booking-in-adactin-application;login-page;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@ad1"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user Launch The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user Enter The \"kousikbala\" In Username Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user Enter the \"P5318Z\"  In Password Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user Click On The Login Button And It Navigates to Search Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition_Adactin.user_Launch_The_Application()"
});
formatter.result({
  "duration": 524430000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kousikbala",
      "offset": 16
    }
  ],
  "location": "Step_Definition_Adactin.user_Enter_The_In_Username_Field(String)"
});
formatter.result({
  "duration": 244912000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "P5318Z",
      "offset": 16
    }
  ],
  "location": "Step_Definition_Adactin.user_Enter_the_In_Password_Field(String)"
});
formatter.result({
  "duration": 190001200,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Adactin.user_Click_On_The_Login_Button_And_It_Navigates_to_Search_Hotel_Page()"
});
formatter.result({
  "duration": 4547031200,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Search Hotel Page",
  "description": "",
  "id": "hotel-booking-in-adactin-application;search-hotel-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 22,
      "name": "@ad2"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "user Select The \"Sydney\"",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "user Select The Hotel",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "user Select The Room Type",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "user Select the No Of Rooms",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "user Enter the Checkin Date",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "user Enter The Checkout Date",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "user Select The No Of Adults",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "user Select The No Of Children",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "user Click on the Search Button And It Navigate To Select Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Sydney",
      "offset": 17
    }
  ],
  "location": "Step_Definition_Adactin.user_Select_The(String)"
});
formatter.result({
  "duration": 310317800,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Adactin.user_Select_The_Hotel()"
});
formatter.result({
  "duration": 52500,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Adactin.user_Select_The_Room_Type()"
});
formatter.result({
  "duration": 377078900,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Adactin.user_Select_the_No_Of_Rooms()"
});
formatter.result({
  "duration": 400319200,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Adactin.user_Enter_the_Checkin_Date()"
});
formatter.result({
  "duration": 3457629200,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Adactin.user_Enter_The_Checkout_Date()"
});
formatter.result({
  "duration": 701830900,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Adactin.user_Select_The_No_Of_Adults()"
});
formatter.result({
  "duration": 340369200,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Adactin.user_Select_The_No_Of_Children()"
});
formatter.result({
  "duration": 3388931900,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Adactin.user_Click_on_the_Search_Button_And_It_Navigate_To_Select_Hotel_Page()"
});
formatter.result({
  "duration": 1733737000,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "Hotel Select Page",
  "description": "",
  "id": "hotel-booking-in-adactin-application;hotel-select-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 44,
      "name": "@ad3"
    }
  ]
});
formatter.step({
  "line": 47,
  "name": "User Click on the Select radio Button",
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "ususer Click on the Search Button And It Navigate To Book AHotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition_Adactin.user_Click_on_the_Select_radio_Button()"
});
formatter.result({
  "duration": 169647200,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Adactin.ususer_Click_on_the_Search_Button_And_It_Navigate_To_Book_AHotel_Page()"
});
formatter.result({
  "duration": 1009299900,
  "status": "passed"
});
formatter.scenario({
  "line": 53,
  "name": "Book A Hotel Page",
  "description": "",
  "id": "hotel-booking-in-adactin-application;book-a-hotel-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 52,
      "name": "@ad4"
    }
  ]
});
formatter.step({
  "line": 55,
  "name": "user Enter the First Name",
  "keyword": "When "
});
formatter.step({
  "line": 57,
  "name": "user Enter the Last Name",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "user Enter The Billing Address",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "user Enter The Credit Card Detail",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "user Select Card Type",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "user Select Expiry Date And Year",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "user Enter The CVV Number",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "ususer Click on the Booknow Button And It Navigate To Booking Confirmation page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition_Adactin.user_Enter_the_First_Name()"
});
formatter.result({
  "duration": 666736500,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Adactin.user_Enter_the_Last_Name()"
});
formatter.result({
  "duration": 496726200,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Adactin.user_Enter_The_Billing_Address()"
});
formatter.result({
  "duration": 421430300,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Adactin.user_Enter_The_Credit_Card_Detail()"
});
formatter.result({
  "duration": 516342400,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Adactin.user_Select_Card_Type()"
});
formatter.result({
  "duration": 331269000,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Adactin.user_Select_Expiry_Date_And_Year()"
});
formatter.result({
  "duration": 492930000,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Adactin.user_Enter_The_CVV_Number()"
});
formatter.result({
  "duration": 9424863900,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Adactin.ususer_Click_on_the_Booknow_Button_And_It_Navigate_To_Booking_Confirmation_page()"
});
formatter.result({
  "duration": 142920800,
  "status": "passed"
});
});