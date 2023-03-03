// 1.
// class A {
//     name:string = 'A';
//     show(){
//         console.log(`This is class ${this.name}`);
//     }
// }
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
// class A {
//         name:string = 'A';
//         constructor(){
//             console.log("A's constructor.")
//         }
//         show(){
//             console.log(`This is class ${this.name}`);
//         }
//         method(){
//             console.log("THis is method of A.")
//         }
// }
// class B extends A{
//     name:string = 'B';
//     constructor(){
//         super();
//         console.log("B's constructorr.")
//     }
//     show() :void{
//         console.log("Inside B");
//     };
// }
// class C extends B{
//     name:string='C' ;
//     constructor(){
//         super();
//         console.log("C's constructor.")
//     }
//     show() : void{
//         super.show();
//         console.log("Inside C.")
//     };
// }
// //Possible but super keyword can only be referenced in derived class.
// class D implements B,C{
//     name:string = 'Class D';
//     show(){
//         console.log(`${this.name}`);
//     }
//     method(){
//         console.log("This method is inside D.")
//     }
// }
// const d = new D()
// class MyClass {
//     name = "MyClass";
//     getName () {
//       return this.name;
//     };
// }
// const c = new MyClass();
// const obj = {
//   name : 'obj',
//   getName : c.getName};
// // Prints "MyClass" instead of crashing
// console.log(obj.getName());
// class A{
//     public puba:string = 'publicA';
//     protected proa:string = 'protectedA';
//     private pria:string = 'privateA';
//     constructor(){
//         console.log("Constructor of A.")
//     }
//     public publicA(){
//         console.log("****** Inside Public Method of A *********")
//         console.log(`public method of A & pulic member ${this.puba}`)
//         console.log(`public method of A & protected member ${this.proa}`)
//         console.log(`public method of A & private member ${this.pria}`)
//         this.protectedA();
//         this.privateA();
//         console.log('');
//     }
//     protected protectedA(){
//         console.log("****** Inside Protected Method of A *********")
//         console.log(`protected method of A & public member is ${this.puba}`)
//         console.log(`protected method of A & protected member is ${this.proa}`)
//         console.log(`protected method of A & private member is ${this.pria}`)
//         this.privateA();
//         console.log('');
//     }
//     private privateA(){
//         console.log("****** Inside Private Method of A *********")
//         console.log(`private method of A & public member is ${this.puba}`)
//         console.log(`private method of A & protected member is ${this.proa}`)
//         console.log(`private method of A & private member is ${this.pria}`)
//         console.log('')
//     }
// }
// // const a = new A()
// // a.publicA()
// // console.log(a.puba);
// class B extends A{
//     constructor( public pubb:string, protected prob:string, private prib:string){
//         super();
//         console.log("Constructor of B.")
//     }
//     public publicB(){
//         console.log("****** Inside Public Method of B *********")
//         console.log(`public method of B & pulic member is ${this.pubb}`)
//         console.log(`public method of B & protected member is ${this.prob}`)
//         console.log(`public method of B & private member is ${this.prib}`)
//         this.privateB()
//         this.protectedB();
//         console.log(`public method of B & pulic member of A is ${this.puba}`)
//         console.log(`public method of B & protected member of A is ${this.proa}`)
//         this.publicA();
//         this.protectedA();
//         console.log('')
//     }
//     protected protectedB(){
//         console.log("****** Inside Protected Method of B *********")
//         console.log(`protected method of B & public member is ${this.puba}`)
//         console.log(`protected method of B & protected member is ${this.prob}`)
//         console.log(`protected method of B & private member is ${this.prib}`)
//         this.privateB();
//         console.log(`protected method of B & pulic member of A is ${this.puba}`)
//         console.log(`protected method of B & protected member of A is ${this.proa}`)
//         this.publicA();
//         this.protectedA();
//         console.log('')
//     }
//     private privateB(){
//         console.log("****** Inside Private Method of B *********")
//         console.log(`private method of B & public member is ${this.pubb}`)
//         console.log(`private method of B & protected member is ${this.prob}`)
//         console.log(`private method of B & private member is ${this.prib}`)
//         console.log(`protected method of B & pulic member of A is ${this.puba}`)
//         console.log(`protected method of B & protected member of A is ${this.proa}`)
//         this.publicA();
//         this.protectedA();
//         console.log('')
//     }
// }
// // const b = new B('publicB', 'protectedB', 'privateB')
// // console.log(b.puba);
// // console.log(b.pubb);
// // b.publicA()
// // b.publicB();
// class C extends B{
//     constructor(public pubc:string = 'publicC',protected proc:string = 'protectedC',private pric:string = 'privateC'){
//         super('publicB', 'protectedB', 'privateB');
//         console.log("Constructor of C.")
//     }
//     public publicC(){
//         console.log("****** Inside Public Method of C *********")
//         console.log(`public method of C & pulic member ${this.pubc}`)
//         console.log(`public method of C & protected member ${this.proc}`)
//         console.log(`public method of C & private member ${this.pric}`)
//         this.protectedC();
//         this.privateC();
//         console.log(`public method of C & pulic member of A is ${this.puba}`)
//         console.log(`public method of C & protected member of A is ${this.proa}`)
//         this.publicA();
//         this.protectedA();
//         console.log(`public method of C & pulic member of B is ${this.pubb}`)
//         console.log(`public method of C & protected member of B is ${this.prob}`)
//         this.publicB();
//         this.protectedB();
//         console.log('');
//     }
//     protected protectedC(){
//         console.log("****** Inside Protected Method of C *********")
//         console.log(`protected method of C & public member is ${this.puba}`)
//         console.log(`protected method of C & protected member is ${this.proc}`)
//         console.log(`protected method of C & private member is ${this.pric}`)
//         this.privateC();
//         console.log(`protected method of C & pulic member of A is ${this.puba}`)
//         console.log(`protected method of C & protected member of A is ${this.proa}`)
//         this.publicA();
//         this.protectedA();
//         console.log(`protected method of C & pulic member of B is ${this.pubb}`)
//         console.log(`protected method of C & protected member of B is ${this.prob}`)
//         this.publicB();
//         this.protectedB();
//         console.log('')
//     }
//     private privateC(){
//         console.log("****** Inside Private Method of C *********")
//         console.log(`private method of C & public member is ${this.pubc}`)
//         console.log(`private method of C & protected member is ${this.proc}`)
//         console.log(`private method of C & private member is ${this.pric}`)
//         console.log(`protected method of C & pulic member of A is ${this.puba}`)
//         console.log(`protected method of C & protected member of A is ${this.proa}`)
//         this.publicA();
//         this.protectedA();
//         console.log(`protected method of C & pulic member of B is ${this.pubb}`)
//         console.log(`protected method of C & protected member of B is ${this.prob}`)
//         this.publicB();
//         this.protectedB();
//         console.log('');
//     }
// }
// const objC = new C();
// console.log(objC.puba);
// console.log(objC.proa); // won't work.
// console.log(objC.pria); // won't work.
// objC.publicA();
// objC.protectedA(); // won't work.
// objC.privateA(); //won't work
// console.log(objC.pubb);
// console.log(objC.prob); won't work.
// console.log(objC.prib); // won't work.
// objC.publicB();
// objC.protectedB(); //won't work
// objC.privateB(); //won't work
// console.log((objC.pubc));
// console.log((objC.proc)); //won't work
// console.log((objC.pric)); //won't work
// objC.publicC();
// objC.protectedC();//won't work
// objC.privateC();//won't work
