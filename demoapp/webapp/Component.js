sap.ui.define([
    "sap/ui/core/UIComponent",    
    "sap/ui/model/json/JSONModel"
],
function (UIComponent, JSONModel) {
    "use strict";

    return UIComponent.extend("lx.sapui5.demoapp.Component", {
        metadata: {
            manifest: "json"
        },

        init: function () {
            // call the base component's init function
            UIComponent.prototype.init.apply(this, arguments);

            
            var aUsers = [
                { name: "Dzmitry", age: 34, contry: "Turkey" , city: "Alanya"},
                { name: "Vasili", age: 23, country: "Lithuania", city: "Vilnius" },
                { name: "Aliaksei", age: 30, conuntry: "USA", city: "New York" }
            ];
            var oDataModel = new JSONModel({ users: aUsers });
            this.setModel(oDataModel);
            
            // enable routing
            this.getRouter().initialize();
        }
    });
}
);