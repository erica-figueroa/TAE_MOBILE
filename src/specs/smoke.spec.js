import  welcomeScreen  from "../screens/welcomeScreen.js";
import  homeScreen  from "../screens/homeScreen.js";
import  mapScreen  from "../screens/mapScreen.js";
import  menuScreen  from "../screens/menuScreen.js";
import  privacyAndLegalScreen from "../screens/privacyAndLegalScreen.js"

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

describe("Privacy & Legal test", () => {
    it('Should be shown a menu button view', async () => {
        await menuScreen.openMenuScreen();
        expect(await menuScreen.menuRecyclerView).toBeDisplayed();
    });

    it('Should be shown profile category', async () => {
        await menuScreen.scrollManuPage;
        expect(await menuScreen.myProfileCategory).toBeDisplayed();
    });

    it('Should be listed property rules category', async () => {
        await menuScreen.scrollManuPage;
        expect(await menuScreen.propertyRulesCategory).toBeDisplayed();
    });

    it('Should be listed link account category', async () => {
        await menuScreen.scrollManuPage;
        expect(await menuScreen.linkAccountCategory).toBeDisplayed();
    });

    it('Should be listed help category', async () => {
        await menuScreen.scrollManuPage;
        expect(await menuScreen.helpCategory).toBeDisplayed();
    });

    it('Should be listed privacy legal category', async () => {
        await menuScreen.scrollManuPage;
        expect(await menuScreen.privacyLegalCategory).toBeDisplayed();
    });

    it('Should be shown privacy legal screen with elements', async () => {
        await menuScreen.openPrivacyLegalScreen();
        expect(await privacyAndLegalScreen.privacyAndLegalElements).toBeDisplayed();
    });
});

   









