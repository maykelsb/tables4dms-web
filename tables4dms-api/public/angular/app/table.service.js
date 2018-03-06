"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var mock_tables_1 = require("./mock-tables");
var TableService = (function () {
    function TableService() {
    }
    TableService.prototype.getTable = function (id) {
        return this.getTables()
            .then(function (tables) { return tables.find(function (table) { return table.id === id; }); });
    };
    TableService.prototype.getTables = function () {
        return Promise.resolve(mock_tables_1.TABLES);
    };
    TableService.prototype.getTablesSlowly = function () {
        var _this = this;
        return new Promise(function (resolve) {
            setTimeout(function () { return resolve(_this.getTables()); }, 1000);
        });
    };
    return TableService;
}());
TableService = __decorate([
    core_1.Injectable()
], TableService);
exports.TableService = TableService;
//# sourceMappingURL=table.service.js.map