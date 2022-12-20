chrome.storage.sync.get(/* String or Array */["video_list"], function(items){
    //  items = [ { "yourBody": "myBody" } ]
    let list = items["video_list"];
    let elm_ul = document.getElementById("ul-list");
    let elm_li;
    for (let i = 0; i < items["video_list"].length; i++) {
        console.log("Pegando a lista...", items["video_list"][i]);
        elm_li = document.createElement("li");
        elm_li.innerText = items["video_list"][i];
        elm_ul.appendChild(elm_li);
        //document.getElementById("notify-containers").innerText = items["video_list"][i];
    }
    document.getElementById("list-count").innerText = items["video_list"].length;
//    document.getElementById("notify-containers").innerText = "asdadasdasdasd asda";
    console.log(document.getElementById("notify-containers"));

});


