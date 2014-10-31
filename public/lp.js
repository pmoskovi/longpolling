var SERVER_URL = "http://localhost:3000";

var longPoll = function() {
    $.ajax({ url: SERVER_URL, success: function(data){
        $('#stock').html(data);
        longPoll();
        // As soon as the response arrives, send a new request
    }, dataType: "html"});
};
