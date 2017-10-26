# codepush_Demo
1. First step is to install Code Push globally with this command below <br />
       npm install -g code-push-cli

  2. Next register with code-push as a developer account with below command <br />
     code-push register

3. Then add the app to code-push followed with app name with respect to the platform you wanted (Android/iOS) <br />
      Android <br />
      code-push app add react-native-todo  android react-native <br />
      iOS <br />
     code-push app add react-native-todo  ios react-native <br />
  
4. Once you add, you will get two KEYS, <br /> 1. Staging 2. Production , ( For Example Staging - CpQDErWbnnOtd_Cud1pvG5VUiITd6096dc3f-993d-4385-b39d-65e9bf838c67 , Production - P3xLHMtFf14EfzoyHTJfQhbmk91U6096dc3f-993d-4385-b39d-65e9bf838c67 )

To see the keys<br />
code-push deployment list  react-native-todo -k


5.  For IOS you need to open AppDelegate.m put #import "CodePush.h" in top and didFinishLaunchingWithOptions inside need put <br />
#ifdef DEBUG<br />
    jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index.ios" fallbackResource:nil];<br />
  #else<br />
    jsCodeLocation = [CodePush bundleURL];<br />
  #endif<br />
when you building time for ios if it is a release build javascript bundle fetch from code push .<br />

6. Deploymentkey in info.plist need to update

7. same step need to do for Android

8. npm install react-native-code-push and react-native link <br />
9. app starting  component need to add<br />
componentDidMount()<br />
    {<br />
        codePush.sync({ updateDialog: true, installMode: codePush.InstallMode.IMMEDIATE });<br />
    }<br />
 10. if any hot bug fix you want reflect in app then first relese to staging and then promote production<br />
 code-push release-react react-native-todo  ios<br />
 then  promote to production<br />
 code-push promote react-native-todo Staging Production<br />
 11. in app restart you will see a popup that you want to update or cancel . if update it update in the app to latest.(there are versioning you do with jsbundle for some user you want to send update if any case)
