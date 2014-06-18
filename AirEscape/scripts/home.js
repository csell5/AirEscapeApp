(function (global) {
    var HomeViewModel,
        app = global.app = global.app || {};

    HomeViewModel = kendo.data.ObservableObject.extend({
       
        sendMessage: function () {
            console.log("SendMessage func was called");     
        }
    });

    app.homeService = {
		viewModel: new HomeViewModel()
    };
}
)(window);