sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function (Controller, MessageToast) {
    "use strict";
    return Controller.extend("lx.sapui5.demoapp.controller.App", {
        onButtonPress: function () {
            var name = this.getView().byId("nameInput").getValue() || "Stranger";
            MessageToast.show(`Hello ${name}!`);
        }
    });
});