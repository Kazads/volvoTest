
class AMillionMore {
    get volvoMainPageLink(){
        return $('a[data-autoid="nav:siteNavLogoSmall"]');
    }

    get aMillionMoreVideo(){
        return $('video[autoplay]')
    }

    get saftyFeatures(){
        return $$('div[data-autoid="iconCallouts:iconTextItem"]')
    }

    open() {
        return browser.url(`https://www.volvocars.com/intl/v/car-safety/a-million-more`);
    }
}

module.exports = new AMillionMore();
