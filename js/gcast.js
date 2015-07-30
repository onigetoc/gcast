// http://podcast.armadamusic.com/asot/podcast.xml
// http://feeds.feedburner.com/tiestos_club_life

function gcast(url, target) {

    var limit = 20;
    var podtojp = [];

    $.getJSON('//ajax.googleapis.com/ajax/services/feed/load?v=2.0&callback=?&q=' + url + '&output=json_xml&num=' + limit + '&sort=publishedDate', function (data) {

        var feeds = data.responseData.feed;
        var xmldata = data.responseData.xmlString;

        //console.log(feeds);

        var xml = getXMLDocument(xmldata);
        //console.log(xml);
        var xmlEntries = xml.getElementsByTagName('item');

        var xmlChannel = xml.getElementsByTagName('channel');

        if (xmlChannel.length > 0) {
            var xmlAuthor = xmlChannel[0].getElementsByTagName('author')[0].innerHTML;
            //var xmlImage = xmlChannel[0].getElementsByTagName('link')[0].getAttribute("href");

            var checkimage = xmlChannel[0].getElementsByTagName('image');
            var checkimage2 = xmlChannel[0].getElementsByTagName('link');

            if (checkimage.length > 0) {

                var xmlImage = checkimage[0].getAttribute("href");

            } else if (checkimage2.length > 0) {
                var xmlImage = checkimage2[6].getAttribute("href");
            }

            //$('.tracks').append('<li>' + xmlAuthor + '</li>');
            //$('.tracks').append('<li>' + xmlImage + '</li>');

        }

        for (var i = 0; i < feeds.entries.length; i++) {

            var entry = feeds.entries[i];

            if (xmlEntries.length > 0) {
                var xmlMedia = xmlEntries[i].getElementsByTagName('enclosure');
                if (xmlMedia.length > 0) {
                    /*
            for (var m = 0; m < xmlMedia.length; m++) {
                var xmlUrl = xmlMedia[m].getAttribute("url");
                var xmlType = xmlMedia[m].getAttribute("type");
                var xmlSize = xmlMedia[m].getAttribute("length");

                //$(xmlUrl).appendTo('.tracks');
                // $('.tracks').append(xmlUrl);
            }
            */
                    var mediaURL = xmlMedia[0].getAttribute("url");

                    var extension = mediaURL.split('.').pop();

                    // if no extension
                    var allowEXT = ["mp3", "mp4", "m4a", "ogg", "m4v"]; // 0 = match -1 =
                    var extMatch = allowEXT.indexOf(extension);
                    if (extMatch == -1) {
                        extension = 'mp3' //alert('match');
                    }

                    var ext = getExt(extension);
                    /**************************/

                }

            }

            var author = entry.author;

            if (author != '') author = entry.author;
            else author = xmlAuthor;

            var title = entry.title;
            var media = entry.media;

            var item = {};
            item.artist = author;
            item[ext] = mediaURL;
            item.download = mediaURL;
            item.poster = xmlImage;
            item.title = title;

            podtojp.push(item);

        }
        target.setPlaylist(podtojp);
        //return JSON.stringify(podtojp);
        //console.log(JSON.stringify(podtojp));

    });

}


function getXMLDocument(string) {
    var browser = navigator.appName;
    var xml;
    if (browser == 'Microsoft Internet Explorer') {
        xml = new ActiveXObject('Microsoft.XMLDOM');
        xml.async = 'false'
        xml.loadXML(string);
    } else {
        xml = (new DOMParser()).parseFromString(string, 'text/xml');
    }
    return xml;
}

function getExt(ext) {

    if (ext == "mp4" || ext == "m4a") ext = "m4v";
    if (ext == "ogg") ext = "oga";
    if (ext == "") ext = "mp3";

    return ext;
}