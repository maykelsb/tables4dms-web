"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var table_1 = require("./table");
var TableDetailComponent = (function () {
    function TableDetailComponent() {
    }
    return TableDetailComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", table_1.Table)
], TableDetailComponent.prototype, "table", void 0);
TableDetailComponent = __decorate([
    core_1.Component({
        selector: 'table-detail',
        template: "\n<div *ngIf=\"table\">\n  <h2>Tabela: {{table.name}}</h2>\n  <div><label>id: </label>{{table.id}}</div>\n  <div>\n    <label>name: </label>\n    <input [(ngModel)]=\"table.name\" placeholder=\"name\">\n  </div>\n</div>\n  ",
    })
], TableDetailComponent);
exports.TableDetailComponent = TableDetailComponent;
//# sourceMappingURL=table-detail.component.js.map