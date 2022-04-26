sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";
    return Controller.extend("lx.sapui5.demoapp.controller.UserDetails", {
        onInit: function () {
            this.getOwnerComponent().getRouter().getRoute("userDetails").attachPatternMatched(this._onPatternMatched, this);
        },
        _onPatternMatched: function (oEvent) {
            var sId =  oEvent.getParameter("arguments").id;
            this.getView().bindElement(`/users/${sId}`);
        }
    });
});