import  welcomeScreen  from "../screens/welcomeScreen.js";
import  homeScreen  from "../screens/homeScreen.js";
import  mapScreen  from "../screens/mapScreen.js";

describe ('smoke test', () => {
    it('should be shown map webview', async () => {
        await welcomeScreen.skipToDashboard();
        expect(await homeScreen.headerLogo).toBeDisplayed();

    });
});



