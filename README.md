Gcast - jQuery plugin podcast parser for jPlayer
========

Gcast jQuery Podcast parser for jPlayer ( XML RSS media )

=================

+ Play all podcast XML RSS with media (audio|video) : ogg, mp3, m4a, m4v, mp4, 
+ Show podcast poster.
+ You can load any playlist with jQuery.
+ Use Google Feed Api.

Demo
-----------
+ Demo: http://scripts.toolurl.com/audio/Podcast-parser-for-jPlayer/demo.html

How to use
---------------

basic loading podcast in jPlayer playlist.
```
$.gcast({
    player: myPlaylist
    url: 'http://feeds.feedburner.com/tiestos_club_life',
    limit: '10'
});
```

Load playlist with Drop down
```
<select id="drop-playlist">
	<option value="">Select Podcast</option>
    <option value="http://feeds.twit.tv/twit" selected>This Week in Tech</option>
    <option value="http://downloads.bbc.co.uk/podcasts/worldservice/globalnews/rss.xml">BBC News</option>
</select>
```

Drop down playlist example.
```
$("#drop-playlist").change(function () {
    $.gcast({url: this.value, player: myPlaylist});
});
```
More way to load podcast width jQuery in the demo file.

Quick start
-----------

Clone the repo, `git clone git://github.com/onigetoc/Podcast-parser-for-jPlayer.git`.


Bug tracker
-----------

Have a bug? Please create an issue here on GitHub.

https://github.com/onigetoc/Podcast-parser-for-jPlayer/issues


Contributing
------------

Please submit all pull requests against *-wip branches. If your unit test contains javascript patches or features, you must include relevant unit tests. Thanks!


Authors
-------

**Gino Cote**

+ http://twitter.com/ginocote
+ http://github.com/onigetoc



Copyright and license
---------------------


The MIT License is simple and easy to understand and it places almost no restrictions on what you can do with Podcast parser for jPlayer.

  http://opensource.org/licenses/mit-license.php
