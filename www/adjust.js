function callCordova(action) {
    var args = Array.prototype.slice.call(arguments, 1);

    cordova.exec(
        function callback(data) { },
        function errorHandler(err) { },
        'Adjust',
        action,
        args
    );
}

function callCordovaStringify(action) {
    console.log(action);
    var args = Array.prototype.slice.call(arguments, 1);

    cordova.exec(
        function callback(data) { },
        function errorHandler(err) { },
        'Adjust',
        action,
        [JSON.stringify(args)]
    );
}

function callCordovaCallback(action, callback) {
    var args = Array.prototype.slice.call(arguments, 2);

    cordova.exec(
        callback,
        function errorHandler(err) { },
        'Adjust',
        action,
        args
    );
}

function callCordovaStringifyCallback(action, data, callback) {
    var args = Array.prototype.slice.call(arguments, 1);

    cordova.exec(
        callback,
        function errorHandler(err) { },
        'Adjust',
        action,
        [JSON.stringify(args)]
    );
}

var Adjust = {
    create: function(adjustConfig) {
        if (adjustConfig) {
            adjustConfig.sdkPrefix = this.getSdkPrefix();
        }

        if (adjustConfig.hasAttributionListener()) {
            callCordovaCallback('setAttributionCallback', adjustConfig.getAttributionCallback());
        }
        if (adjustConfig.hasEventTrackingSucceededListener()) {
            callCordovaCallback('setEventTrackingSucceededCallback', adjustConfig.getEventTrackingSucceededCallback());
        }
        if (adjustConfig.hasEventTrackingFailedListener()) {
            callCordovaCallback('setEventTrackingFailedCallback', adjustConfig.getEventTrackingFailedCallback());
        }
        if (adjustConfig.hasSessionTrackingSucceededListener()) {
            callCordovaCallback('setSessionTrackingSucceededCallback', adjustConfig.getSessionTrackingSucceededCallback());
        }
        if (adjustConfig.hasSessionTrackingFailedListener()) {
            callCordovaCallback('setSessionTrackingFailedCallback', adjustConfig.getSessionTrackingFailedCallback());
        }
        if (adjustConfig.hasDeferredDeeplinkCallbackListener()) {
            callCordovaCallback('setDeferredDeeplinkCallback', adjustConfig.getDeferredDeeplinkCallback());
        }
        if (adjustConfig.hasConversionValueUpdatedCallbackListener()) {
            callCordovaCallback('setConversionValueUpdatedCallback', adjustConfig.getConversionValueUpdatedCallback());
        }
        if (adjustConfig.hasSkad4ConversionValueUpdatedCallbackListener()) {
            callCordovaCallback('setSkad4ConversionValueUpdatedCallback', adjustConfig.getSkad4ConversionValueUpdatedCallback());
        }

        callCordovaStringify('create', adjustConfig);
    },

    trackEvent: function(adjustEvent) {
        callCordovaStringify('trackEvent', adjustEvent);
    },

    setOfflineMode: function(enabled) {
        callCordova('setOfflineMode', enabled);
    },

    appWillOpenUrl: function(url) {
        callCordova('appWillOpenUrl', url);
    },

    setEnabled: function(enabled) {
        callCordova('setEnabled', enabled);
    },

    setPushToken: function(pushToken) {
        callCordova('setPushToken', pushToken);
    },

    setReferrer: function(referrer) {
        callCordova('setReferrer', referrer);
    },

    isEnabled: function(callback) {
        callCordovaCallback('isEnabled', callback);
    },

    gdprForgetMe: function() {
        callCordova('gdprForgetMe');
    },

    disableThirdPartySharing: function() {
        callCordova('disableThirdPartySharing');
    },

    trackAdRevenue: function(source, payload = undefined) {
        if (payload === undefined) {
            // new API
            callCordovaStringify('trackAdRevenue', source);
        } else {
            // old API
            callCordova('trackAdRevenue', source, payload);
        }
    },

    trackAppStoreSubscription: function(subscription) {
        callCordovaStringify('trackAppStoreSubscription', subscription);
    },

    trackPlayStoreSubscription: function(subscription) {
        callCordovaStringify('trackPlayStoreSubscription', subscription);
    },

    verifyAppStorePurchase: function(purchase, callback) {
        callCordovaStringifyCallback('verifyAppStorePurchase', purchase, callback);
    },

    verifyPlayStorePurchase: function(purchase, callback) {
        callCordovaStringifyCallback('verifyPlayStorePurchase', purchase, callback);
    },

    getGoogleAdId: function(callback) {
        callCordovaCallback('getGoogleAdId', callback);
    },

    getAmazonAdId: function(callback) {
        callCordovaCallback('getAmazonAdId', callback);
    },

    getIdfa: function(callback) {
        callCordovaCallback('getIdfa', callback);
    },

    getAdid: function(callback) {
        callCordovaCallback('getAdid', callback);
    },

    getAttribution: function(callback) {
        callCordovaCallback('getAttribution', callback);
    },

    getSdkVersion: function(callback) {
        var sdkPrefix = this.getSdkPrefix();
        callCordovaCallback('getSdkVersion', function(sdkVersion) {
            callback(sdkPrefix + "@" + sdkVersion);
        });
    },

    getSdkPrefix: function () {
        return 'cordova4.38.1';
    },

    addSessionCallbackParameter: function(key, value) {
        callCordova('addSessionCallbackParameter', key, value);
    },

    removeSessionCallbackParameter: function(key) {
        callCordova('removeSessionCallbackParameter', key);
    },

    resetSessionCallbackParameters: function() {
        callCordova('resetSessionCallbackParameters');
    },

    addSessionPartnerParameter: function(key, value) {
        callCordova('addSessionPartnerParameter', key, value);
    },

    removeSessionPartnerParameter: function(key) {
        callCordova('removeSessionPartnerParameter', key);
    },

    resetSessionPartnerParameters: function() {
        callCordova('resetSessionPartnerParameters');
    },

    sendFirstPackages: function() {
        callCordova('sendFirstPackages');
    },

    requestTrackingAuthorizationWithCompletionHandler: function(callback) {
        callCordovaCallback('requestTrackingAuthorizationWithCompletionHandler', callback);
    },

    updateConversionValue: function(conversionValue) {
        callCordova('updateConversionValue', conversionValue);
    },

    updateConversionValueWithErrorCallback: function(callback, conversionValue) {
        callCordovaCallback('updateConversionValueWithErrorCallback', callback, conversionValue);
    },

    updateSkad4ConversionValueWithErrorCallback: function(callback, fineValue, coarseValue, lockWindow) {
        callCordovaCallback('updateSkad4ConversionValueWithErrorCallback', callback, fineValue, coarseValue, lockWindow);
    },

    getAppTrackingAuthorizationStatus: function(callback) {
        callCordovaCallback('getAppTrackingAuthorizationStatus', callback);
    },

    trackThirdPartySharing: function(adjustThirdPartySharing) {
        callCordovaStringify('trackThirdPartySharing', adjustThirdPartySharing);
    },

    trackMeasurementConsent: function(measurementConsent) {
        callCordova('trackMeasurementConsent', measurementConsent);
    },

    getLastDeeplink: function(callback) {
        callCordovaCallback('getLastDeeplink', callback);
    },

    getIdfv: function(callback) {
        callCordovaCallback('getIdfv', callback);
    },

    processDeeplink: function(deeplink, callback) {
        callCordovaCallback('processDeeplink', callback, deeplink);
    },

    setTestOptions: function(testOptions) {
        callCordova('setTestOptions', testOptions);
    },

    teardown: function(testParam) {
        if(testParam === null || testParam === undefined || testParam !== 'test') {
           return;
        }
        callCordova('teardown');
    },

    onResume: function(testParam) {
        if(testParam === null || testParam === undefined || testParam !== 'test') {
           return;
        }
        callCordova('onResume');
    },

    onPause: function(testParam) {
        if(testParam === null || testParam === undefined || testParam !== 'test') {
           return;
        }
        callCordova('onPause');
    },

    checkForNewAttStatus: function() {
        callCordova('checkForNewAttStatus');
    }
};

function onPause() {
    callCordova('onPause');
}

function onResume() {
    callCordova('onResume');
}

document.addEventListener('resume', onResume, false);
document.addEventListener('pause', onPause, false);

module.exports = Adjust;
