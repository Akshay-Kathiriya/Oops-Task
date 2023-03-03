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
var Car = /** @class */ (function () {
    function Car() {
        this.model = 'model1';
        this.color = 'redblack';
        this.isElectric = true;
    }
    // public model:string;
    // public color:string;
    // public isElectric:boolean;
    // constructor(model:string, color:string, isElectric:boolean){
    //     this.model = model;
    //     this.color = color;
    //     this.isElectric = isElectric;
    // }
    Car.prototype.drive = function () {
        var engineStarted = this.startedEngine();
        console.log("Car drive.");
    };
    Car.prototype.startedEngine = function () {
        console.log("Engine started.");
        return true;
    };
    return Car;
}());
var tesla = new Car();
tesla.drive();
//1. Abstraction
// abstract class Character{
//     public name:string;
//     public damage:number;
//     public attackSpeed:number;
//     constructor(name:string, damage:number, speed:number){
//         this.name = name;
//         this.damage = damage;
//         this.attackSpeed = speed;
//     }
//     public abstract damagePerSecond():number;
// }
// class Goblin extends Character{
//     constructor(name:string, damage:number, speed:number){
//         super(name, damage, speed);
//     }
//     public damagePerSecond(): number {
//         return this.damage*this.attackSpeed;
//     }
// }
// const goblin1 = new Goblin('goblin1', 2, 2);
// console.log(goblin1.damagePerSecond()); 
// const character1 = new Character('character1',2,2);// Error.
// 2.Encapsulation
// class Character{
//     private _name:string;
//     constructor(name:string) {
//         this._name = name;
//     }
//     get name():string{
//         return this._name;
//     }
//     set name(value:string){
//         this._name = value;
//     }
// }
// const character2 = new Character('akshay');
// console.log(character2.name);
// console.log(character2);
// 3.Inheritance
// class Character{
//     public name:string;
//     public damage:number;
//     constructor(name:string, damage:number){
//         this.name = name;
//         this.damage = damage;
//     }
//     public talk():void{
//         console.log('Says something...');
//     }
// }
// class Ord extends Character{
//     public weapon:string
//     constructor(name:string, damage:number, weapon:string){
//         super(name, damage);
//         this.weapon = weapon;
//     }
//     public attack(): void{
//         console.log(`Attacks his target with his ${this.weapon}.`)
//     }
// }
// const char1 = new Character('aks', 23);
// char1.talk();
// // char1.attack() // Error.
// const Ord1 = new Ord('ord1',12,'hammer');
// Ord1.attack();
// Ord1.talk();
// 4.Polymorphism
// class Character {
//     public name: string;
//     public damage: number;
//     constructor(name: string, damage: number) {
//       this.name = name;
//       this.damage = damage;
//     }
//     public talk(): void {
//       console.log('Says something ...');
//     }
//     public attack(): void {
//       console.log(`Attacks his target with his fists.`);
//     }
//   }
//   class Orc extends Character {
//     public weapon: string;
//     constructor(name: string, damage: number, weapon: string) {
//       super(name, damage);
//       this.weapon = weapon;
//     }
//     public talk(): void {
//       console.log('Says something but in orcish ...');
//     }
//     public attack(): void {
//       console.log(`Attacks his target with his ${this.weapon}.`);
//     }
//   }
// const char1 = new Character('aks', 23);
// char1.talk();
// char1.attack();
// const Ord1 = new Orc('ord1',12,'hammer');
// Ord1.attack();
// Ord1.talk();
// INHERITANCE
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.eat = function () {
        console.log("What's for dinner?");
    };
    Person.prototype.speak = function () {
        console.log("My name is ".concat(this.name, " and I am ").concat(this.age, " years old."));
    };
    return Person;
}());
var Chef = /** @class */ (function (_super) {
    __extends(Chef, _super);
    function Chef(name, age, occupation) {
        var _this = _super.call(this, name, age) || this;
        _this.occupation = occupation;
        return _this;
    }
    Chef.prototype.speak = function () {
        _super.prototype.speak.call(this);
        console.log("I am a ".concat(this.occupation));
    };
    Chef.prototype.cook = function () {
        console.log('I am cooking.');
    };
    return Chef;
}(Person));
var chef1 = new Chef('aka', 21, 'chef');
// chef1.speak();
// chef1.cook();
// Sometimes, a subclass needs to follow a superclass’s implementation but not inherit its properties. 
// These cases require the implements keyword instead of the extends keyword.
// Extends vs Implements
// The extends keyword enables the subclass to benefit from inheritance, giving it access to the properties and methods of its superclass.
// The implements keyword, however, treats the superclass as an interface, ensuring that the subclass conforms to the shape of its superclass.
// An interface is a TypeScript structure that acts as a contract by enforcing a particular shape on a class or a specific type on a function or variable.
// Classes that “implement” another class must declare all the properties present in the class they implement.
var Human = /** @class */ (function () {
    function Human(name, gender) {
        this.name = name;
        this.gender = gender;
    }
    Human.prototype.speak = function () {
        return "I am speaking";
    };
    return Human;
}());
var Doctor = /** @class */ (function () {
    function Doctor(name, gender) {
        this.name = name;
        this.gender = gender;
    }
    Doctor.prototype.speak = function () {
        return 'I am a doctor';
    };
    Doctor.prototype.test = function () {
        return 'It\'s wroking';
    };
    return Doctor;
}());
var doc1 = new Doctor('doc1', 'male');
// console.log(doc1.speak());
// console.log(doc1.test())
// Intefaces can extends multiple classes and interface
// class can only extends single class
//Checks different combination
// 1.  class extends class // possible
// 2. class implements class // possible
// 3. class extends interface // not possible
// 4. class implements interface // possible (constructor incompitible.)
// 5. class implements interface,class // possible
// 6. interface implements class // not possible (interface can't have implements clause)
// 7. interface implements interface // not possible (same as 6.)
//8. interface extends class // possible
// 9. interface extends interface // possible
// 10. interface implements interface, class //not possible (same as 6.)
// 11. class extends interface, interface // not possible
// 12. interface extends class, interface // possible
//13. interface extends class, class // possible
// 14. class extends class,class // not possible
// 15. class extends class, interface // not possible
// 1.
// class A{
//   constructor(){
//     console.log("Class A constructor.");
//   }
//   method(){
//     console.log("Methods of class A.")
//   }
// }
// class B extends A{
//   constructor(){
//     super();
//     console.log("Class B constructor.");
//   }
//   method(){
//     console.log("Method of class B.")
//   }
// }
// const cB = new B();
// cB.method();
// 2.
// class A{
//   constructor(){
//     console.log("Class A constructor.");
//   }
//   method(){
//     console.log("Methods of class A.")
//   }
// }
// class B implements A{
//   constructor(){
//     console.log("Class B constructor.");
//   }
//   method(){
//     console.log("Method of class B.")
//   }
// }
// const cB = new B();
// cB.method();
// 3.
// interface A{
//   name:string
//   constructor():void
//   method():void
// }
// class B extends A{
//   name:string = 'B'
//   constructor(){
//     super();
//     console.log("Class B constructor.");
//   }
//   method(){
//     console.log("Method of class B.")
//   }
// }
// const cB = new B();
// cB.method();
// 4.
// interface A{
//   name:string
//   // constructor():void
//   method():void
// }
// class B implements A{
//   name:string = 'B';
//   constructor(){
//     console.log("Class B constructor.");
//   }
//   method(){
//     console.log("Method of class B.")
//   }
// }
// const cB = new B();
// cB.method();
// 5.
// interface A{
//   name:string
//   method():void
// }
// class B{
//     constructor(){
//       console.log("Class A constructor.");
//     }
//     method(){
//       console.log("Methods of class A.")
//     }
//   }
// class C implements A,B{
//     name:string = 'C'
//     constructor(){
//       console.log("Class B constructor.");
//     }
//     method(){
//       console.log("Method of class B.")
//     }
// }
// 6.
// class B{
//     constructor(){
//       console.log("Class A constructor.");
//     }
//     method(){
//       console.log("Methods of class A.")
//     }
//   }
// interface C implements B{
//     name:string;
//     constructor():void;
//     method() : void
// }
// // 7.
// interface A{
//   name:string
//   method():void
// }
// interface C implements A{
//     name:string = 'C'
//     method():void
//     temp():void
//   }
// 8.
// class B{
//     constructor(){
//       console.log("Class A constructor.");
//     }
//     method(){
//       console.log("Methods of class A.")
//     }
//   }
// interface C extends B{
//     name:string;
//     constructor():void;
//     method() : void
// }
// 9.
// interface A{
//     temp: string
//     constructor() : void
//     method() : void
//   }
// interface B extends A{
//     name:string;
//     constructor():void;
//     method() : void
// }
// 10.
// 11.
// interface A{
//   temp: string
//   method() : void
// }
// interface B {
//   name:string;
//   method() : void
// }
// class C extends A,B{
//   temp:string = 'Ctemp';
//   name:string = 'Btemp';
//   method(){console.log("Method of A and B interface in class C.")}  
// }
// 12.
// interface A{
//     temp: string
//     constructor() : void
//     method() : void
//   }
// class B{
//   temp:string = 'Ctemp';
//   name:string = 'Btemp';
//   method(){console.log(" class B.")}  
// }
// interface C extends A,B{
//     name:string;
//     constructor():void;
//     method() : void
// }
// 13.
// class A{
//     temp:string = 'Ctemp';
//     name:string = 'Btemp';
//     method(){console.log("Method of A and B interface in class C.")}  
//   }
// class B{
//     temp:string = 'Ctemp';
//     name:string = 'Btemp';
//     method(){console.log("Method of A and B interface in class C.")}  
//   }
// interface C extends A,B{
//     interc : string;
// }
// not need to check
// 14.
// 15.
