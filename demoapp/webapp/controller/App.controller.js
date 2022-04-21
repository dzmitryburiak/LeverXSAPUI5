sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";
    return Controller.extend("lx.sapui5.demoapp.controller.App", {
        onButtonPress: function () {
            var name = this.getView().byId("nameInput").getValue() || "Stranger";
            alert(`Hello ${name}!`);
        }
    });
});