const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// Event handler for the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    const isAppInstalled = localStorage.getItem('isAppInstalled');
    if (isAppInstalled) {
        butInstall.classList.toggle('hidden', true);
    }});

// Click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;

    if (!promptEvent) {
     return;
    }
    // Show the install prompt
    promptEvent.prompt();
    
    window.deferredPrompt = null;
    // Toggles the 'hidden' class on for the install button container
    butInstall.classList.toggle('hidden', true);});

// Handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('Jate was installed.', event);
    // Toggles the 'hidden' class on for the install button container
    butInstall.classList.toggle('hidden', true);
    window.deferredPrompt = null;});
