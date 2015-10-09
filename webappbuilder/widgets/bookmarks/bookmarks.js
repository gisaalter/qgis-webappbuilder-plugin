var goToBookmarkByName = function(name){
    for(var i=0; i<bookmarks.length; i++){
        if (bookmarks[i].name === name){
            map.getView().fit(bookmarks[i].extent, map.getSize());
        }
    }
};

var panToBookmark = function(i){
    var pan = ol.animation.pan({
        duration: 500,
        source: view.getCenter()
    });
    var zoom = ol.animation.zoom({
        duration: 500,
        resolution: view.getResolution(),
        source: view.getZoom()
    });
    map.beforeRender(pan,zoom);
    goToBookmark(i);

};

var goToBookmark = function(i){
    bookmark = bookmarks[i];
    if (bookmark){
        map.getView().fit(bookmark.extent, map.getSize());
    }
    else{
        map.getView().fit(originalExtent, map.getSize());
    }
};