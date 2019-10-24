function check_alive(){
console.log('check_alive');
}

self.addEventListener('sync', function (event) {
    if(event.tag == 'myFirstSyns') {
        event.waitUntil(check_alive());
    }
});


