﻿Application1.NewView = function (params) {

    var viewModel = {
        //  Put the binding properties here

        message: ko.observable('Hello ' + params.id + '!')
    };

    return viewModel;
};