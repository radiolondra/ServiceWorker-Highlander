# ServiceWorker-Highlander
MV3 Extension: Service Worker awakened once stays alive forever.
  
### What is this?  
This is Chromium extension to demonstrate how a service worker can be activated by a script once, and manages to keep itself active forever (RUNNING state), without any other external intervention.  
The initial activation by a content script is only necessary because Chromium-based browsers, once started, do not activate the service workers of installed extensions, e.g., after booting or restarting the PC.  
To activate the service worker of our extension, it will be enough to open, for example in Chrome, any web page. The content script will provide a connection with the service worker that will prepare the launch of the Highlander function and disconnect from the content script. From this moment on, the service worker will always be active (RUNNING) without any other intervention by the content script, thanks to the Highlander function.

