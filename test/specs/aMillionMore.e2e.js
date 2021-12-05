const aMillionMore = require('../pageobjects/aMillionMore.page');

describe('A Million More page ', async () => {
    beforeEach(() => {
        aMillionMore.open();

    })
    it('should contain a link to Volvo´s homepage', async () => {  
        await expect(aMillionMore.volvoMainPageLink).toBeExisting();
    });
    it('should contain the "A Million More" video', async () => {
        await expect(aMillionMore.aMillionMoreVideo).toBeExisting();
    })
    it('should contain four different new safety features', async () => {
        await expect(aMillionMore.safetyFeatures).toBeElementsArrayOfSize(4);
    })
    it('should contain four testimonials', async () => {
        await expect(aMillionMore.testimonials).toBeElementsArrayOfSize(4);
    })
    it('should contain eight different car models', async () => {
        await expect(aMillionMore.carModels).toBeElementsArrayOfSize(8);
    })
    it('should contain a link to Volvo´s recharge page', async () => {
        await expect(aMillionMore.rechargeLink).toBeExisting();
    })
    it('should contain a link to Volvo´s mild hybrid cars page', async () => {
        await expect(aMillionMore.mildHybridCarsLink).toBeExisting();
    })
});


