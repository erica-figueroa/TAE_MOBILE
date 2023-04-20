import  welcomeScreen  from "../screens/welcomeScreen.js";
import  homeScreen  from "../screens/homeScreen.js";
import  mapScreen  from "../screens/mapScreen.js";

describe ("Skip to dashboard test", () => {
    it('Should display home view', async () => {
        await welcomeScreen.skipToDashboard();
        expect(await homeScreen.headerLogo).toBeDisplayed();
    });
});

describe("Category List Test", () => {
    it('Should be shown map webview', async () => {
        await mapScreen.doTapOnMapButton();
        expect(await mapScreen.mapContainer).toBeDisplayed();
    });

    it('Should be listed diferent categories to select', async () => {
        await mapScreen.doTapOnatractionTextButton();
        expect(await mapScreen.facilityTypeList).toBeDisplayed();
    });

    it('Attractions is default option', async () => {
        await mapScreen.doTapOnatractionTextButton();
        expect(await mapScreen.atractionTextButton).toHaveAttr('index', '0');
    });

    it('Hotels option should be available', async () => {
        await mapScreen.doTapOnMapButton();
        expect(await mapScreen.hotelTextButton).toBeEnabled;
    });

});









