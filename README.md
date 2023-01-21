# ServiceWorker-Highlander
MV3 Extension: Service Worker awakened once stays alive forever.
  
### NOTE
For the version that produces the same result but **without any external intervention** see [**Service Worker Highlander-DNA**](https://github.com/radiolondra/ServiceWorker-Highlander-DNA).
  
### What is this?  
This is a Chromium extension to demonstrate how a service worker can be activated by a content script and manages to keep itself active forever (RUNNING state), without any other external intervention.  
  
The initial activation by a content script is necessary because Chromium-based browsers (and maybe other too), once started, put the service workers of installed extensions in inactive status (STOPPED).  
  
To activate the service worker of our extension forever, it will be enough to open at least one web page or click the extension's icon to open popup or open the extension's option page.  
The content script will create a connection with the service worker that will prepare the launch of the **Highlander** function and then disconnect from the content script.  
From this moment on, the service worker will always be active (RUNNING) even without any other intervention by the content scripts (that is, for example, no more web pages open), thanks to the still running Highlander function.  
  

### IMPORTANT  
> Remember to debug the Service Worker using **chrome://serviceworker-internals** only. Do not use Devtools page or your debug will be not reliable.