
const {By,Key,Builder} = require("selenium-webdriver");
require("chromedriver");


async function addUser(){

    var Name = "User";
    var Address = "Tripoli";
    var Number = "70488250";

    let driver = await new Builder().forBrowser("chrome").build();

     await driver.get("http://localhost:3001/");
         
     await driver.findElement(By.name("name")).sendKeys(Name,Key.RETURN);
     await driver.findElement(By.name("address")).sendKeys(Address,Key.RETURN);
     await driver.findElement(By.name("phone_number")).sendKeys(Number,Key.RETURN);
     await driver.findElement(By.name("btn1")).click();
     console.log("done");

};

addUser();