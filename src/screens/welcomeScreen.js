import  BaseScreen from "./baseScreen.js";

class WelcomeScreen extends BaseScreen {
    get startedButton(){ return $('android=new UiSelector().resourceIdMatches(".*permission_primary_btn")')};
    get skipTextView(){ return $('android=new UiSelector().resourceIdMatches(".*skip_text")')};
    get dismissButton() {return $('android=new UiSelector().resourceIdMatches(".*dismiss-icon")')};
    
    async skipToDashboard(){
        await this.doTapOn(await this.startedButton);
        await this.doTapOn(await this.skipTextView);
        await this.doTapOn(await this.skipTextView);
        //await this.waitForDisplayed(await this.dismissButton);
        await this.doTapOnCustom(await this.dismissButton);
    } 
}

export default new WelcomeScreen();