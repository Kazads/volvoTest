
/**
 * sub page containing specific selectors and methods for a specific page
 */
class AMillionMore {
    /**
     * define selectors using getter methods
     */
    get volvoMainPageLink(){
        return $('a[data-autoid="nav:siteNavLogoSmall"]');
    }

    get aMillionMoreVideo(){
        return $('video[autoplay]')
    }

    get saftyFeatures(){
        return $$('div[data-autoid="iconCallouts:iconTextItem"]')
    }
    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return browser.url(`https://www.volvocars.com/intl/v/car-safety/a-million-more`);
    }
}

module.exports = new AMillionMore();
