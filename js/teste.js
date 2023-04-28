function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                //observer.disconnect();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}
// title -  document.getElementById ("above-the-fold").childNodes[1].childNodes[7].innerText
var timer1 = false;
var adList = [];
function stayWatching() {
    waitForElm('.ytp-ad-preview-slot').then((elm) => {
        setTimeout(function () {
            console.log("propaganda com timeout");
            clearTimeout(this);
        }, 1000);
    });
    //ytp-ad-preview-container countdown-next-to-thumbnail
    waitForElm('.ytp-ad-skip-button').then((elm) => {
        if (timer1 == true) { 
            console.log("já clicou");
            return;
        }
        timer1 = true;
        console.log('Element is ready');
        console.log("1", elm);
        setTimeout(function () {
            console.log("Chamou o timeout 1");
            console.log(elm);
            elm.click();
            stayWatching();
            clearTimeout(this);
            timer1 = false;
            try {
                adList.push(document.getElementById ("above-the-fold").childNodes[1].childNodes[7].innerText);
                console.log("Adicionando a lista", adList);
                chrome.storage.sync.set({ "video_list": adList });
            } catch (error) {
                console.error("Not possible add to list", error);
            }
        }, 1000);
    });
    /*
    //ytp-ad-preview-container countdown-next-to-thumbnail
    waitForElm('.ytp-button').then((elm) => {
        console.log('Element is ready');
        console.log("Chamou o timeout 2");
        console.log(elm);
        setTimeout(function () {
            console.log(elm);
            elm.click();
            stayWatching();
            clearTimeout(this);
        }, 1000);
    });
    */
}

stayWatching();
