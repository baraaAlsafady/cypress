const dayjs = require('dayjs');

export class HomePage{
    currency_label = '[data-testid="Header__CurrencySelector"]'
    contact_number = '.sc-ESoVU > strong'
    footer_image = '[data-testid="Footer__Logo"] > img'
    hotel_search_btn = '[data-testid="HotelSearchBox__SearchButton"]'
    departure_date = '[data-testid="FlightSearchBox__FromDateButton"] > span'
    return_date = '[data-testid="FlightSearchBox__ToDateButton"] > span'
    tomorrow_date = dayjs().date()+1
    after_tomorrow_date = dayjs().date()+2;
    hotel_tab = '#uncontrolled-tab-example-tab-hotels'

navigate(url){
    cy.visit(url)
}

verifyCurrentUrllanguage(url, language){
    let pageUrl = url;
    if (language == 'ar'){
        pageUrl = url +'/ar'
        assert.equal(pageUrl, 'https://almosafer.com/ar', 'the site is in English language');
    }
    else {
       pageUrl =  url +'/en';
       assert.equal(pageUrl, 'https://almosafer.com/en', 'the site is in English language');
     }
    }

verifyCurrencyDdlLabel(currency){
    cy.get(this.currency_label, {timeout: 6000}).should('have.text', currency);
}

verifyContactNumber(phoneNum) {
    cy.get(this.contact_number, {timeout: 6000}).should('have.text', phoneNum);
}

verifyQitafLogo() {
    cy.get(this.footer_image, {timeout: 6000})
    .should('be.visible')
}

scrollToFooter(){
    cy.scrollTo('bottom')
}

scrollToHeader(){
    cy.scrollTo('top')
}

verifyHotelsSearchButton(){
    cy.get(this.hotel_search_btn).should('not.exist')
}

verifyFlightDeparturedate(){
    cy.get(this.departure_date).eq(1)
    .then(($label) => {
        const txt = $label.text()
        expect(txt).to.equal(this.tomorrow_date.toString())
      })
}

verifyFlightReturnedate(){
    cy.get(this.return_date).eq(1)
    .then(($label) => {
        const txt = $label.text();
        expect(txt).to.equal(this.after_tomorrow_date.toString());
      })
}

verifyTheFlightSection(){
    cy.get('#uncontrolled-tab-example-tab-flights').should('be.visible');
}

verifyTheHotelSection(){
    cy.get('#uncontrolled-tab-example-tab-hotels').should('be.visible');
}

changelanguage() {
    var answers = ["arToAr","arToEn","EnToAr"];
    var index = Math.floor(Math.random() * answers.length);
    
    switch (answers[index]) {
        case "arToAr": {
            this.navigate('https://almosafer.com/ar');
            //a. Make assertion that language is updated as you chose
            cy.get('[data-testid="Header__SignInButton"]').should('have.text', 'تسجيل الدخول')
        } break;

        case "arToEn": {
            this.navigate('https://almosafer.com/ar');
            cy.get('[data-testid="Header__LanguageSwitch"]').click()
            //a. Make assertion that language is updated as you chose
            cy.get('[data-testid="Header__SignInButton"]').should('have.text', 'Sign in')
        } break;

        case "EnToAr": {
            this.navigate('https://almosafer.com/en');
            cy.get('[data-testid="Header__LanguageSwitch"]').click()
            //a. Make assertion that language is updated as you chose
            cy.get('[data-testid="Header__SignInButton"]').should('have.text', 'تسجيل الدخول')
        } break;
    }

}

switchToHotelTab(){
    cy.get(this.hotel_tab).click()
}

addInputBasedOnLanguageAndClick(){
    var currentUrl = cy.url();
    if (currentUrl = 'https://almosafer.com/ar') {
        //ii. If current-lang is AR, then randomly type from ( دبي , دةَّج( ِ
        cy.get('[data-testid="AutoCompleteInput"]').type('دبي، جده')

    }else if(currentUrl = 'https://almosafer.com/en') {
        //i. If current-lang is EN, then randomly type from (duba, jedda, riyadh)
        cy.get('[data-testid="AutoCompleteInput"]').type('duba, jedda, riyadh')
    }
    //b. Click on first result from autocomplete list
    cy.get('[data-testid="AutoCompleteResultItem0"]').click()
}

selectRoomOption() {
    cy.get('[data-testid="HotelSearchBox__ReservationSelect_Select"]').click
    cy.get('[data-testid="HotelSearchBox__ReservationSelect_Select"] > option').then(($elements) => {
    const randomOption = Math.floor(Math.random() * $elements.length);
  // select option from drop down
    cy.get('[data-testid="HotelSearchBox__ReservationSelect_Select"]').select(`${$elements[randomOption].innerText}`);
    cy.log(`random option selected is ${$elements[randomOption].innerText}}`);
  })
}

clickOnSearchHotelBtn() {
    cy.get('.sc-1vkdpp9-5').click();
}

waitUntillSearchLoaded() {
    cy.waitUntil(function() {
        return cy.get('.before', { timeout: 50000 }).should("not.be.visible");
    })       
}

SearchResultContainsHotels() {
    cy.get('[data-testid="HotelSearchResult__Hotel0__Card"] > .sc-jrIrqw > .sc-hjRWVT > .sc-fHxwqH > .sc-kXeGPI').should('be.visible')
}

applyLowestPrice() {
    cy.get('[data-testid="HotelSearchResult__sort__LOWEST_PRICE"]').click()
}

}