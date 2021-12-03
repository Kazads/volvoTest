const AMillionMore = require('../pageobjects/aMillionMore.page');

describe('A Million More page ', async () => {
    it('should contain a link to Volvo´s homepage', async () => {
        AMillionMore.open();

        await expect(AMillionMore.volvoMainPageLink).toBeExisting();
    });
    it('should contain the "A Million More" video', async () => {
        AMillionMore.open();

        await expect(AMillionMore.aMillionMoreVideo).toBeExisting();
    })
    it('should contain four different new safety features', async () => {
        AMillionMore.open();

        await expect(AMillionMore.saftyFeatures).toBeElementsArrayOfSize(4);
    })
});


