# ServiceWorker-Highlander
MV3 Extension: Service Worker awakened once stays alive forever.
  
### What is this?  
This is a Chromium extension to demonstrate how a service worker can be activated by a content script and manages to keep itself active forever (RUNNING state), even without any other external intervention.  
  
The initial activation by a content script is necessary because Chromium-based browsers (and maybe other too), once started, put the service workers of installed extensions in inactive status (STOPPED).  
  
To activate the service worker of our extension forever, it will be enough to open at least one web page, for example using Chrome. 
The content script will create a connection with the service worker that will prepare the launch of the **Highlander** function and then disconnect from the content script. 
From this moment on, the service worker will always be active (RUNNING) even without any other intervention by the content script (that is, no more web pages open), thanks to the still running Highlander function.

