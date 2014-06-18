(function (global) {
    var app = global.app = global.app || {};

    document.addEventListener('deviceready', function () {
        navigator.splashscreen.hide();
         
        app.application = new kendo.mobile.Application(document.body, { transition: 'slide', layout: "tabstrip-layout", skin: "Flat" });
    	feedback.initialize('a7e30620-f640-11e3-88bc-6f003eb37c2c');
        
    }, false);
    
})(window);