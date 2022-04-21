sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/m/MessageBox",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/Fragment"
], function (Controller, MessageToast, MessageBox, JSONModel, Fragment) {
    "use strict";
    return Controller.extend("lx.sapui5.demoapp.controller.App", {
        onInit : function () {
            var aUsers = [
                {name: "Dzmitry", age: 34},
                {name: "Vasili", age: 23},
                {name: "Aliaksei", age: 30}
            ];
            var oModel = new JSONModel({users: aUsers});

            this.getView().setModel(oModel);
        },
        onAddUserPress: function () {
            if (this._oDialog) {
                this._oDialog.open();
            } else {
                Fragment.load({
                    name: "lx.sapui5.demoapp.fragment.NewUserDialog",
                    controller: this
                }).then(function(oDialog){
                   this._oDialog = oDialog;
                   this.getView().addDependent(oDialog);
                   oDialog.open();
                }.bind(this));
            }           
        },
        onCancelPress: function () {
            this._oDialog.close();            
        },
        onCreateUserPress: function () {
            var oModel = this.getView().getModel();
            var sName = oModel.getProperty("/name");
            var sAge = oModel.getProperty("/age");

            if (sName && sAge) {
                var aUsers = oModel.getProperty("/users");

                aUsers.push({name: sName, age: sAge});
                oModel.setProperty("/users", aUsers);
                MessageToast.show(`New user ${sName} ${sAge} y.o. has been created`);
                this._oDialog.close();
            } else {
                MessageBox.error(
                    "Oops there was a problem, please check your input!"
                );
            }            
        },
        onAfterCloseDialog: function () {
            var oModel = this.getView().getModel();
            oModel.setProperty("/name", "");
            oModel.setProperty("/age", "");
        }
    });
});