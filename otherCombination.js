// 1.
// class A {
//     name:string = 'A';
//     show(){
//         console.log(`This is class ${this.name}`);
//     }
// }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// class B{
//     name:string = 'B';
//     show(){
//         console.log(`This is class ${this.name}`);
//     }
// }
// class C extends A{
//     name:string = 'C';
//     show(){
//         console.log(`This is class ${this.name}`);
//     }
// }
// class D extends B{
//     name:string = 'D';
//     show(){
//         console.log(`This is class ${this.name}`);
//     }
// }
// Not possible (class can only extend single class)
// class E extends C,D{
//     name:string = 'E';
//     show(){
//         console.log(`This is class ${this.name}`);
//     }
// }
// 2.
// class A {
//     name:string = 'A';
//     show(){
//         console.log(`This is class ${this.name}`);
//     }
// }
// class B extends A{
//     name:string = 'B';
//     show(){
//         console.log(`This is class ${this.name}`);
//     }
// }
// class C extends A{
//     name:string = 'C';
//     show(){
//         console.log(`This is class ${this.name}`);
//     }
// }
// Not possible (class can only extend single class)
// class D extends B,C{
//     name:string = 'D';
//     show(){
//         console.log(`This is class ${this.name}`);
//     }
// }
// 4.
// class A {
//         name:string = 'A';
//         show(){
//             console.log(`This is class ${this.name}`);
//         }
//         method(){
//             console.log("THis is method of A.")
//         }
// }
// interface B extends A{
//     name:string;
//     show() :void;
// }
// interface C extends A{
//     name:string ;
//     show() : void;
// }
//Possible
// class D implements B,C{
//     name:string = 'Class D';
//     show(){
//         console.log(`${this.name}`);
//     }
//     method(){
//         console.log("This method is inside D.")
//     }
// }
// 5.
// class A {
//         name:string = 'A';
//         show(){
//             console.log(`This is class ${this.name}`);
//         }
//         method(){
//             console.log("THis is method of A.")
//         }
// }
// interface B extends A{
//     name:string;
//     show() :void;
// }
// class C extends A{
//     name:string='C' ;
//     show() : void{
//         console.log("Inside C.")
//     };
// }
// //Possible
// class D implements B,C{
//     name:string = 'Class D';
//     show(){
//         console.log(`${this.name}`);
//     }
//     method(){
//         console.log("This method is inside D.")
//     }
// }
// 6.
var A = /** @class */ (function () {
    function A() {
        this.name = 'A';
        console.log("A's constructor.");
    }
    A.prototype.show = function () {
        console.log("This is class ".concat(this.name));
    };
    A.prototype.method = function () {
        console.log("THis is method of A.");
    };
    return A;
}());
var B = /** @class */ (function (_super) {
    __extends(B, _super);
    function B() {
        var _this = _super.call(this) || this;
        _this.name = 'B';
        console.log("B's constructorr.");
        return _this;
    }
    B.prototype.show = function () {
        console.log("Inside B");
    };
    ;
    return B;
}(A));
var C = /** @class */ (function (_super) {
    __extends(C, _super);
    function C() {
        var _this = _super.call(this) || this;
        _this.name = 'C';
        console.log("C's constructor.");
        return _this;
    }
    C.prototype.show = function () {
        console.log("Inside C.");
    };
    ;
    return C;
}(B));
//Possible
var D = /** @class */ (function () {
    function D() {
        this.name = 'Class D';
    }
    D.prototype.show = function () {
        console.log("".concat(this.name));
    };
    D.prototype.method = function () {
        console.log("This method is inside D.");
    };
    return D;
}());
var d = new D();
d.show();
