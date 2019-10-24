function check_alive(){
    var a;
    $.ajax({
        url: '/ping',
        type: 'GET',
        async: false,
        success: function(data){
            //Ready for MySQL insertion.
            console.log("MySQL is UP");
            a=0;
        },
        error: function(data) {
            //Go in the indexDB
            a=1;
        }
    });
    return a;
}

self.addEventListener('sync', function (event) {
    if(event.tag == 'myFirstSyns') {
        event.waitUntil(check_alive());
    }
});
