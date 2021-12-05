
class AMillionMore {
    get volvoMainPageLink(){
        return $('a[data-autoid="nav:siteNavLogoSmall"]');
    }

    get aMillionMoreVideo(){
        return $('video[autoplay]')
    }

    get safetyFeatures(){
        return $$('div[data-autoid="iconCallouts:iconTextItem"]')
    }

    get testimonials(){
        return $$('div[data-autoid="videoTestimonials:container"]')
    }

    get imageWithText(){
        return $('div[data-autoid="ImageWithText-1"]')
    }

    get carModels(){
        return $$('div[data-autoid="springCarouselPane:carouselItem"]')
    }

    get rechargeLink(){
        return $('a[href="/intl/v/cars/recharge"]')
    }

    get mildHybridCarsLink(){
        return $('a[href="/intl/v/cars/other-powertrains"]')
    }

    open() {
        return browser.url(`https://www.volvocars.com/intl/v/car-safety/a-million-more`);
    }
}

module.exports = new AMillionMore();
