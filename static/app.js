var source = new EventSource('/stream');
source.onmessage = function (event) {
     // alert(event.data);
     $("#news").prepend("<p>" + event.data + "</p>");
};