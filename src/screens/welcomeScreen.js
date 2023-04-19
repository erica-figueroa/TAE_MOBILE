import  BaseScreen from "./baseScreen.js";

class WelcomeScreen extends BaseScreen {
    get getStartedButton(){ return $('android=new UiSelector().resourceIdMatches(".*permission_primary_btn")')};
    get getSkipTextView(){ return $('android=new UiSelector().resourceIdMatches(".*skip_text")')};
    get dismissBttn() {return $('android=new UiSelector().resourceIdMatches(".*dismiss-icon")')};
    
    async skipToDashboard(){
        await this.doTapOn(await this.getStartedButton);
        await this.doTapOn(await this.getSkipTextView);
        await this.doTapOn(await this.getSkipTextView);
        await this.doTapOn(await this.dismissBttn);
    } 
}

export default new WelcomeScreen();