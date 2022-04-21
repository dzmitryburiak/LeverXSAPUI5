sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/m/MessageBox",
    "sap/ui/model/json/JSONModel"
], function (Controller, MessageToast, MessageBox, JSONModel) {
    "use strict";
    return Controller.extend("lx.sapui5.demoapp.controller.App", {
        onInit : function () {
            var aUsers = [
                {name: "Dzmitry", age: 34},
                {name: "Vasili", age: 23},
                {name: "Aliaksei", age: 30}
            ]
            var oModel = new JSONModel({users: aUsers});

            this.getView().setModel(oModel);
        },
        onButtonPress: function () {
            var oModel = this.getView().getModel();
            var sName = oModel.getProperty("/name");
            var sAge = oModel.getProperty("/age");

            if (sName && sAge) {
                var aUsers = oModel.getProperty("/users");

                aUsers.push({name: sName, age: sAge});
                oModel.setProperty("/users", aUsers);
                MessageToast.show(`New user ${sName} ${sAge} y.o. has been created`);
            } else {
                MessageBox.error(
                    "Oops there was a problem, please check your input!"
                );
            }            
        }
    });
});