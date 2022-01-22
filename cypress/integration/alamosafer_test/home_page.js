/// <reference types="cypress" />
import {HomePage} from "/Users/admin/cypress/almosafer/cypress/pages/home_pages"

const homePage = new HomePage()

describe('test almosafer homepage', () => {


    it('should have all homepage elements', () => {
        homePage.navigate('https://almosafer.com');

        //a. Default language is correct (AR)
        homePage.verifyCurrentUrllanguage('https://almosafer.com', 'ar')

        //b. Default currency is correct (SAR)
        homePage.verifyCurrencyDdlLabel('SAR ');

        //c. Contact numbers are correct (check yourself)
        homePage.verifyContactNumber('+966554400000');

        //d. Verify “qitaf” logo is displayed in footer
        homePage.scrollToFooter();
        homePage.verifyQitafLogo();
        homePage.scrollToHeader();

        //e. Hotels search tab is NOT selected by default
        homePage.verifyHotelsSearchButton();

        // f. Flight departure date is set to “today+1day” by default
        homePage.verifyFlightDeparturedate();

        // g. Flight return date is set to “today+2days” by default
        homePage.verifyFlightReturnedate();

        //h. Make any other assertions that you want to do (upto your testing mindset!)
        homePage.verifyTheFlightSection();
        homePage.verifyTheHotelSection();
    
    })

    it('should change the language correctlly', () => {
        homePage.navigate('https://almosafer.com');
        cy.wait(2000);
        //3. Use random method to change language (sometime keep AR, sometime change to EN)
        homePage.changelanguage();
    })

    it('should have the hotel tab, and the functions should be working probably', () => {
        homePage.navigate('https://almosafer.com');

        homePage.switchToHotelTab();

        homePage.addInputBasedOnLanguageAndClick();

        //5. Randomly select “1 room, 2 adults, 0 children” or “1 room, 1 adult, 0 children” option
        homePage.selectRoomOption();

        //6. Click on search hotels button
        homePage.clickOnSearchHotelBtn();

        //7. On new page (which is ‘search results page’)
        //a. Wait for loading to fully complete (wait for loading bar or API, up to you)
        homePage.waitUntillSearchLoaded();

        //b. *important*: do some assertions (which assertions to do ? identify yourself)
        //hotel label is inside the search result.
        homePage.SearchResultContainsHotels();

        //8. Apply sorting option by “LOWEST PRICE”
        homePage.applyLowestPrice();

    })
})