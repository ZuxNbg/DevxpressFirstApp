Application1.home = function () {
        var viewModel = {
                message: ko.observable('Welcome!'),
            name: ko.observable(''),
           kaziCao: function () {
               this.message("Hello " + this.name() + '!');
           },
               greet: function()
               {
                   Application1.app.navigate("NewView/" + this.name());
               }
               
      };
    return viewModel;
};
