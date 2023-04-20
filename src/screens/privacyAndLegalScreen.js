import  BaseScreen from "./baseScreen.js";

class PrivacyAndLegalScreen extends BaseScreen {
    get privacyAndLegalElements() {return $('android=new UiSelector().resourceIdMatches(".*privacy_and_legal_elements")')}
    
}

export default new PrivacyAndLegalScreen();