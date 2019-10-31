describe("Check visibility of Google logo,search input box,two search buttons",function(){

it("Should open google search engine website",function(){

  browser.ignoreSynchronization = true;

  //beforeEach(function() {

   // browser.sleep(3000);

 // });

    browser.driver.get("https://google.pl/");
    browser.driver.manage().window().setSize(900,900);
    browser.manage().timeouts().implicitlyWait(20000)
});

it("Should find if Google logo is visible",function(){

  //var googleLogo = element(by.id('hplogo'));

 // var EC = protractor.ExpectedConditions;

 // browser.wait(EC.visibilityOf(googleLogo), 5000);

  });

it("Should find if search input box is visible",function(){

var searchInputBox = element(by.css('#tsf > div:nth-child(2) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input'));

var EC = protractor.ExpectedConditions;

browser.wait(EC.visibilityOf(searchInputBox), 5000);

  });

it("Should find if two search buttons are visible",function(){

  var firstSearchButton = element(by.css("#tsf > div:nth-child(2) > div.A8SBwf > div.FPdoLc.VlcLAe > center > input.gNO89b"));

  var EC = protractor.ExpectedConditions;

  browser.wait(EC.visibilityOf(firstSearchButton), 5000);


  var secondSearchButton = element(by.css("#tsf > div:nth-child(2) > div.A8SBwf > div.FPdoLc.VlcLAe > center > input.RNmpXc"));

  var EC = protractor.ExpectedConditions;

  browser.wait(EC.visibilityOf(secondSearchButton), 5000);

});

it("Should find if firstSearchButton contains text Szukaj w Google",function(){


  	var firstSearchButton = element(by.css("#tsf > div:nth-child(2) > div.A8SBwf > div.FPdoLc.VlcLAe > center > input.gNO89b"));
  			
  	var EC = protractor.ExpectedConditions;
	browser.wait(EC.textToBePresentInElementValue(firstSearchButton, 'Szukaj w Google'), 5000);
 
});

it("Should find if firstSearchButton contains text Szczęśliwy traf",function(){


  var secondSearchButton = element(by.css("#tsf > div:nth-child(2) > div.A8SBwf > div.FPdoLc.VlcLAe > center > input.RNmpXc"));
  			
  	var EC = protractor.ExpectedConditions;
	browser.wait(EC.textToBePresentInElementValue(secondSearchButton, 'Szczęśliwy traf'), 5000);
 
});

it("Should get search results by speed test frase",function(){


var searchInputBox = element(by.css('#tsf > div:nth-child(2) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input'));

searchInputBox.sendKeys('speed test');


searchInputBox.submit();

});



it("Should fgtgttge",function(){

// element.all(by.css('li[role="presentation"]').getText().then(function(menus) {
//  expect(menus.length).toBe(100); 
 // console.log(menus);
//});

var searchInputBox = element(by.css('#tsf > div:nth-child(2) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input'));

searchInputBox.sendKeys('speed test');


element.all(by.css('li[role="presentation"]').then(function(items) {
  expect(items.length).toBe(11);
  expect(items[0].getText()).toBe('speeeed test');
});


});
















//it("Check if similar search section exists",function(){

//browser.actions().mouseMove(element(by.id('div[id=extrares]')).perform();

//div#extrares.med


//id=extrares
//});











it("Should find clickable title",function(){



element.all(by.tagName('span.st')).count().then(function(value){ 

console.log(value);
expect(value).toEqual(10);
});

element.all(by.tagName('div.r')).count().then(function(value){ 

console.log(value);

expect(value).toEqual(10);

});


it('Mouse Operations', function() {
		// set implicit time to 30 seconds
		//browser.manage().timeouts().implicitlyWait(30000);

	//	browser.get("https://chercher.tech/practice/popups")
		// mouse hover on a submenu
		browser.actions().mouseMove(element(by.css('div[id=extrares]'))).perform()
		
		//	browser.sleep(4000);

		var EC = protractor.ExpectedConditions;
// Waits for the element with id 'abc' to be present on the dom.
browser.wait(EC.presenceOf($('div[id=extrares]')), 5000);

	});


//





















});




  //it('should have a title', function() {
 //   browser.get('http://juliemr.github.io/protractor-demo/');

 //   expect(browser.getTitle()).toEqual('Super Calculator');
//  });



    //expect(firstSearchButton.getText()).toContain('Szukaj');

    //.isDisplayed().toBe(true);

    //var secondSearchButton = element(by.css('.RNmpXc'))

    //expect(secondSearchButton.isDisplayed()).toBe(false);


  //});

  //  var properTextValue = element(by.partialLinkText("w"));

  //  browser.sleep(3000);

  //  expect(properTextValue.getText()).toContain("w");

// Xpath=//span[text()='Google Search'] //google sarch

  //it("Should check if the buttons contain proper text value",function(){



  //  var properTextValue = element(by.partialLinkText("w"));

  //  browser.sleep(3000);

  //  expect(properTextValue.getText()).toContain("w");

// Xpath=//span[text()='Google Search'] //google sarch


///tytaj


  //it("Should put speed test query in search input box",function(){

  //var searchInputBox = element(by.css('#tsf > div:nth-child(2) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input'));

  //searchInputBox.sendKeys("speed test");
	
	//browser.sleep(2000);


// element.all(by.css('li[role="presentation"]').getText().then(function(menus) {
//    expect(menus.length).toBe(100); //true
//    console.log(menus);
//});
   
   
   
  //element.all(by.css('li[role="presentation"]')).each(function(element) {   //dziala biere

  //  element.getText().then(function(text) {  //dzial biere
   //    console.log(text);
   //});

//});














});

//	browser.sleep(2000);

	

	//browser.sleep(2000);
	//searchInputBox.sendKeys(protractor.Key.ARROW_DOWN);
	//searchInputBox.sendKeys(protractor.Key.ARROW_DOWN);
	//browser.sleep(2000);

	//expect(searchInputBox).toContain("speed test");
	
	
//	List<WebElement> lstGoogle = driver.findElement(By.xpath("//ul[@role='listbox']"))
//.findElements(By.xpath("//li[@role='presentation']"));
//	for (int i = 0; i < lstGoogle.size(); i++) {
//		System.out.println(lstGoogle.get(i).getText());
//	}
	
	
	//  #tsf > div:nth-child(2) > div.A8SBwf.emcav > div.UUbT9 > div.aajZCb > ul //listbox
	
	
	
	//#tsf > div:nth-child(2) > div.A8SBwf.emcav > div.UUbT9 > div.aajZCb > ul > li:nth-child(1)   //presentation
	
	
	
	
	//let list = element.all(by.css('#tsf > div:nth-child(2) > div.A8SBwf.emcav > div.UUbT9 > div.aajZCb > ul > li:nth-child(1)'));
	
	//searchInputBox = driver.switchTo().activeElement();

	

	//let list = element.all(by.css('#tsf > div:nth-child(2) > div.A8SBwf.emcav > div.UUbT9 > div.aajZCb > ul'));

	
	//expect(list.get(0).getText()).toBe('speed test');
//	expect(list.get(1).getText()).toBe('Speed test');

//	expect(list.get(2).getText()).toBe('Speed test');
//	expect(list.get(3).getText()).toBe('Speed test');
//	expect(list.get(4).getText()).toBe('Speed test');
//	expect(list.get(5).getText()).toBe('Speed test');
//	expect(list.get(6).getText()).toBe('Speed test');
//	expect(list.get(7).getText()).toBe('Speed test');
//	expect(list.get(8).getText()).toBe('Speed test');
//	expect(list.get(9).getText()).toBe('Speed test');

//var listbox =  "by.xpath ('ul[role="listbox"]');

//var sugesstions = "by.xpath ('li[role="presentation"]')";



//var listbox =  element(by.css('#tsf > div:nth-child(2) > div.A8SBwf.emcav > div.UUbT9 > div.aajZCb > ul'));

//var sugesstions = element(by.css('#tsf > div:nth-child(2) > div.A8SBwf.emcav > div.UUbT9 > div.aajZCb > ul > li:nth-child(1)'));


//var index = 10;

//element.all(by.css('#tsf > div:nth-child(2) > div.A8SBwf.emcav > div.UUbT9 > div.aajZCb > ul > li:nth-child(1)')).each(function(element, index) {
//element.all(by.xpath('//li[@role="presentation"]')).each(function(element, index) {  //dziala

//element.all(sugesstions).each(function(element) {

//element.all(by.css('li[role="presentation"]')).each(function(element) {   //dziala biere

//expect(text).toContain("speed test");


//expect(text).toContain("speed test");
//expect(element(by.css('li[role="presentation"]')).getText()).toContain('speed test');


   
  
   
   
   
   



////tutaj
//element.all(listbox).each(function(item)
//{

//item.getAttribute('span').then(function(value)  //invalid locator
//item.getText().then(function(text)

//listbox.get(0).getText().then(function(text)

//item.element(suggestions).getText().then(function(text)  //invalid locator

//{
//console.log(text);

//})

//});
////tutaj
//index is not defined

//element.all(by.css('some-css')).get(index).element(by.tagName('tag-within-css'));

	













//tutaj

//
 //expect(searchInputBox.toEqual(jasmine.objectContaining({
   //     bar: "speed test");
 
 //it("matches objects with the expect key/value pairs", function() {
     
    //  }));


//browser.sleep(3000);
//expect (searchInputBox.getAttribute('value')).toEqual('speed test');
//expect (searchInputBox.getAttribute('value')).textToBePresentInElementValue('speed test');

//expect (searchInputBox.getAttribute('value')).toCointain('speed test');

//// Waits for the element with id 'abc' to contain the text 'foo'.
//browser.wait(EC.textToBePresentInElement($(searchInputBox), 'speed test'), 5000);

//wait(EC.textToBePresentInElementValue

//expect(searchInputBox.getText()).toEqual('speed test');

//var searchInputBox = element(by.name('q'));
//searchInputBox.getText().then(function(value) {
  //console.log("to jest text"+value);
  //return value;
  
  
  
  
  
  
  
  
  


//console.log(searchInputBox.getText());
//#tsf > div:nth-child(2) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input

//var EC = protractor.ExpectedConditions;


//browser.wait(EC.textToBePresentInElement($('#tsf > div:nth-child(2) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input'), 'speed'), 7000);

//searchInputBox.sendKeys(protractor.Key.ARROW_DOWN);
//searchInputBox.sendKeys(protractor.Key.ARROW_DOWN);
//searchInputBox.sendKeys(protractor.Key.ARROW_DOWN);
// Waits for the element with id 'abc' to contain the text 'foo'.
//browser.wait(EC.textToBePresentInElement(by.name('q'), 'speed'), 5000);
//browser.wait(EC.textToBePresentInElement($('#tsf > div:nth-child(2) > div.A8SBwf.emcav > div.UUbT9 > div.aajZCb > ul > li:nth-child(2)'), 'speed'), 5000);



//browser.actions().sendKeys(protractor.Key.ARROW_DOWN).penform();

  //WebElement element = driver.switchTo().activeElement();
  //	element.sendKeys("Guru99");
  //	List<WebElement> lstGoogle = driver.findElement(By.xpath("//ul[@role='listbox']"))
//  .findElements(By.xpath("//li[@role='presentation']"));
  //	for (int i = 0; i < lstGoogle.size(); i++) {
//  		System.out.println(lstGoogle.get(i).getText());
//#tsf > div:nth-child(2) > div.A8SBwf.emcav > div.UUbT9 > div.aajZCb > ul > li:nth-child(4) > div

//var EC = protractor.ExpectedConditions;
// Waits for the element with id 'abc' to contain the text 'foo'.
//browser.wait(EC.textToBePresentInElement($('#tsf > div:nth-child(2) > div.A8SBwf.emcav > div.UUbT9 > div.aajZCb > ul > li:nth-child(2)'), 'speed'), 5000);




//searchInputBox.sendKeys.keyDown;
  //.Keys.ARROW_DOWN;

//cosdriver =

  //browser.sleep(4000);

//  searchInputBox.Keys.ARROW_DOWN;

//  browser.actions().keyDown(searchInputBox.Key.CONTROL).sendKeys('a').perform();

  //browser.actions().mouseMove(searchInputBox).keyDown(protractor.Key.CONTROL).click().perform();


  //searchInputBox.sendKeys(Keys.DOWN);
//searchInputBox.submit()

//browser.sleep(6000);


//it("Should check if Szukaj w Google button contain proper text value",function(){

//  var szukajWGoogleButton = element(by.css("#tsf > div:nth-child(2) > div.A8SBwf > div.FPdoLc.VlcLAe > center > input.gNO89b"));

//expect(szukajWGoogleButton.getAttribute('value')).toEqual('Szukaj w Google');


//});
//it("Should check if Szczesliwy traf button contain proper text value",function(){

//  var getLuckyButton = element(by.css("#tsf > div:nth-child(2) > div.A8SBwf > div.FPdoLc.VlcLAe > center > input.RNmpXc"));

//expect(getLuckyButton.getAttribute('value')).toEqual('Szczęśliwy traf');


//});









  //});
