(function() {
    if (window.CBM_SCRIPT_INJECTED === undefined) {
        window.CBM_SCRIPT_INJECTED = true;
        try {
            console.log('%c------ Custom Background Music by Effective Apps is Initializing ------', 'color: cyan');
            console.log('%c------ Contact us at support@effectify.co for help and questions about the app ------', 'color: cyan');
            if ('True' === 'True') {
                let handler = function(event) {
                    console.log('triggered');
                    const iframe = document.querySelector('iframe[src*="w-cbm-app.herokuapp.com/get_widget"]');
                    if (iframe === null) {
                        return;
                    }

                    const iframeWindow = iframe.contentWindow;
                    iframeWindow.postMessage('ACTIVATE_AUTOPLAY', 'https://w-cbm-app.herokuapp.com');
                };

                document.addEventListener('mouseup', handler, false);
                document.addEventListener('touchend', handler, false);
            }
        }
        catch(err) {

        }
    }
})();