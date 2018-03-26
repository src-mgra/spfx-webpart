"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var sp_core_library_1 = require("@microsoft/sp-core-library");
var sp_webpart_base_1 = require("@microsoft/sp-webpart-base");
var sp_lodash_subset_1 = require("@microsoft/sp-lodash-subset");
var HelloWorldWebPart_module_scss_1 = require("./HelloWorldWebPart.module.scss");
var strings = require("HelloWorldWebPartStrings");
var HelloWorldWebPart = (function (_super) {
    __extends(HelloWorldWebPart, _super);
    function HelloWorldWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HelloWorldWebPart.prototype.render = function () {
        this.domElement.innerHTML = "\n      <div class=\"" + HelloWorldWebPart_module_scss_1.default.helloWorld + "\">\n        <div class=\"" + HelloWorldWebPart_module_scss_1.default.container + "\">\n          <div class=\"" + HelloWorldWebPart_module_scss_1.default.row + "\">\n            <div class=\"" + HelloWorldWebPart_module_scss_1.default.column + "\">\n              <span class=\"" + HelloWorldWebPart_module_scss_1.default.title + "\">Welcome to SharePoint!</span>\n              <p class=\"" + HelloWorldWebPart_module_scss_1.default.subTitle + "\">Customize SharePoint experiences using Web Parts.</p>\n              <p class=\"" + HelloWorldWebPart_module_scss_1.default.description + "\">" + sp_lodash_subset_1.escape(this.properties.description) + "</p>\n              \n              <p class=\"" + HelloWorldWebPart_module_scss_1.default.description + "\">" + sp_lodash_subset_1.escape(this.properties.test) + "</p>\n\n              <a href=\"https://aka.ms/spfx\" class=\"" + HelloWorldWebPart_module_scss_1.default.button + "\">\n                <span class=\"" + HelloWorldWebPart_module_scss_1.default.label + "\">Learn more</span>\n              </a>\n            </div>\n          </div>\n        </div>\n      </div>";
    };
    Object.defineProperty(HelloWorldWebPart.prototype, "dataVersion", {
        get: function () {
            return sp_core_library_1.Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    HelloWorldWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: strings.PropertyPaneDescription
                    },
                    groups: [
                        {
                            groupName: strings.BasicGroupName,
                            groupFields: [
                                sp_webpart_base_1.PropertyPaneTextField('description', {
                                    label: 'Description'
                                }),
                                sp_webpart_base_1.PropertyPaneTextField('test', {
                                    label: 'Multi-line Text Field',
                                    multiline: true
                                }),
                                sp_webpart_base_1.PropertyPaneCheckbox('test1', {
                                    text: 'Checkbox'
                                }),
                                sp_webpart_base_1.PropertyPaneDropdown('test2', {
                                    label: 'Dropdown',
                                    options: [
                                        { key: '1', text: 'One' },
                                        { key: '2', text: 'Two' },
                                        { key: '3', text: 'Three' },
                                        { key: '4', text: 'Four' }
                                    ]
                                }),
                                sp_webpart_base_1.PropertyPaneToggle('test3', {
                                    label: 'Toggle',
                                    onText: 'On',
                                    offText: 'Off'
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return HelloWorldWebPart;
}(sp_webpart_base_1.BaseClientSideWebPart));
exports.default = HelloWorldWebPart;

//# sourceMappingURL=HelloWorldWebPart.js.map
