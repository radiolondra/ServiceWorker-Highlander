// --------------------------------------------------------------------------
// COMMONSCRIPT.JS
// --------------------------------------------------------------------------

var port;
const INTERNAL_TESTAWAKE_PORT = "CT_Internal_awake_test";

// ---------------------------------------------------------------------------
// Waking up the ServiceWorker
// ---------------------------------------------------------------------------
function awakeServiceWorker() {
    port = chrome.runtime.connect({name: INTERNAL_TESTAWAKE_PORT});
    
    port.onDisconnect.addListener( (port) => {
        console.log("Service Worker asked to disconnect");
    })

    port.onMessage.addListener( msg => {
        console.log(`Message from service worker: ${msg}`);
    });
}
// ---------------------------------------------------------------------------



