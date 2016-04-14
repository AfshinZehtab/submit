

# var myCenter = new google.maps.LatLng(48.151663,11.5769865);
# var myLocation = new google.maps.LatLng(48.151446,11.597964);


# function initialize()
# {
#   if (Modernizr.mq('(max-width: 767px)')) {
#   var mapProp = {
#     center:myCenter,
#     zoom:15,
#     mapTypeId:google.maps.MapTypeId.ROADMAP
#     };

#   var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);

#   var marker=new google.maps.Marker({
#     position:myCenter,
#     animation:google.maps.Animation.BOUNCE
#     });

#   marker.setMap(map);
#   } else {
#     var mapProp = {
#       center:myLocation,
#       zoom:14,
#       mapTypeId:google.maps.MapTypeId.ROADMAP
#       };

#     var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);

#     var marker=new google.maps.Marker({
#       position:myCenter,
#       animation:google.maps.Animation.BOUNCE
#       });

#     marker.setMap(map);
#   }
# }

# google.maps.event.addDomListener(window, 'load', initialize);



