if(window.devicePixelRatio === 2){
  var images = document.querySelectorAll('img[src="images/jsonp-ok.png"]');
  for(var i = 0; i < images.length; i++){
    var image = images.item(i);
    // fix size so image doesn't just get bigger
    image.height = image.height;
    image.width = image.width;
    // replace with @2x version
    image.src = image.src.replace(/\.\w+$/, function(match) { return "@2x" + match; }); 
  }
}