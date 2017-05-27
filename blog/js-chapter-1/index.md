---
title: JavaScript Chapter 1
date: 5/5/2017
description: Understanding JavaScript 1
---

### [Case Douglas](https://www.youtube.com/watch?v=PxoghUpvLTE)
+ array (contiguous memory - linear storage) to hashmap conversions depending on array size
+ js numbers - double precision floating points
+ Double precision floating points require 53 bits
+ x86-48 uses 48 bits to memory references
+ 2^(64) - 2^(48) > 2^(53)
  * object references and float representation with the same 64 bit
  * Nan(Nun)-boxing : most significant 11 bits high for float numbers (viceversa)
+ [http://mrale.ph/](http://mrale.ph/)
+ [https://wingolog.org](https://wingolog.org/)

### [Yacheslav Egorov](https://www.youtube.com/watch?v=Z_q6iw3h48s)
```javascript
function Klass(proto)
{
    function ctor()
    {
        this.init.apply(this,arguments);
    }
    ctor.prototype = proto;
    return ctor;
}

var klass = new Klass(
{
    init : function(x,y,z)
    {
        this.x = x;
        this.y = y;
        this.z = z;
    }
});
```
+ `Float64Array`
+ can v8 hoist a.length ???
+

### [blog : thibaultlaurens.github.io](http://thibaultlaurens.github.io/javascript/2013/04/29/how-the-v8-engine-works/)
+ Js - prototype based language --  there are no classes and objects are created by using a cloning process
+ V8 creates hidden classes, at runtime, in order to have an internal representation of the type system and to improve the property access time.
+ Objects with same hidden class use same optimized code
+ HIdden class transitions
+ Monomorphic operations are operations which only work on objects with the same hidden class. Use them instead of polymorphism! Prefer monomorphic code to polymorphic code
+


### [Eric Elliott: Medium blog post](https://medium.com/javascript-scene/the-two-pillars-of-javascript-ee6f3281e7f3#.7tp3who9b)
+ Prototypal Inheritance : Objects Linking to Other Objects
+ lambdas with closures ??
+ Try to avoid causing GC to fire frequently -- less creation/Del;etion of memery objects by pre-allocating
+ stop the garbage collector from trashing your frame rate
+ If you return an arbitrary object from a constructor function, it will break your prototype links, and the `this` keyword will no longer be bound to the new object instance in the constructor. It’s also less flexible than a real factory function because you can’t use `this` at all in the factory; it just gets thrown away. ?????

### [Kevin Ennis : Medium blog](https://medium.com/@kevincennis)
+ differential inheritance
+ difference between Object.create and new ????
+ Js basics : higher order functions and closures
+ Inheritance -- are there any other methods ???
```Javascript
function Rectangle( width, height ) {
  this.width = width;
  this.height = height;
}
Rectangle.prototype.area = function() {
  return this.width * this.height;
};
function Square( length ) {
  Rectangle.call( this, length, length );
}
Square.prototype = Object.create( Rectangle.prototype );
var square = new Square( 4 );
square.area(); // 16
Square.prototype.area === Rectangle.prototype.area; // true
```
+ function `call` and `apply`
```javascript
function exclaim( value, fn ) {
  setTimeout(function() {
    fn( value + '!' );
  }, 100 );
}
function yell( value, fn ) {
  setTimeout(function() {
    fn( value.toUpperCase() );
  }, 100 );
}
shout( ‘hello’, function( shouted ) {
  console.log( shouted ); // ‘HELLO!’
});
//excercise func
function shout( value, fn ) {
  exclaim( value, function( exclaimed ) {
    yell( exclaimed, fn );
  });
}
```
+ Lacking intellectual curiosity is much harder to fix. (meeme)
+ Object.defineProperty ???
+ [js13k - competitve game programming](http://js13kgames.github.io/resources/)

### Js objects
+ explicit obj -- new Obj
+ implicit obj -- {},[],'',23 ...
+ difference between `[]` and `new Array()`
+ difference between `''` and `new String()`
+ Object.prototype Array.prototype String.prototype Number.prototype Date.prototype Function.prototype RegExp.prototype Boolean.prototype
+ getter will go through the prototypical chain to get the value of the property. setter will create new property if not available and not change the value in the prototypical chains
+ defineProperty

```javascript
function Book(name) {
  Object.defineProperty(this, "name", {
      get: function() {             //getter
        return "Book: " + name;       
      },        
      set: function(newName) {      //setter         
        name = newName;        
      },               
      configurable: false
   });
}
```
+ when new is not used for a constructor to create its object then the crated object becomes part of window object

```javascript
function Book(name, year) {
  console.log(this);
  this.name = name;
  this.year = year;
}

var myBook = Book("js book", 2014);  
console.log(myBook instanceof Book);  
console.log(window.name, window.year);

var myBook = new Book("js book", 2014);  
console.log(myBook instanceof Book);  
console.log(myBook.name, myBook.year);

// safe way to use constructors
function Book(name, year) {
  if (!(this instanceof Book)) {
    return new Book(name, year);
  }
  this.name = name;
  this.year = year;
}
```
+ prototype properties override corresponding property of the object

### Notes (misc)
+ Dynamic Name spacing by namespace injecting in self executing function (closure)
```javascript
var myApp = {};
(function(context) {
    var id = 0;

    context.next = function() {
        return id++;    
    };

    context.reset = function() {
        id = 0;     
    }
})(myApp);
```
+ explain this behaviour
```javascript
var myApp = {};
(function(context) {
    var id = 0;

    context.next = function() {
        return id++;    
    };

    context.reset = function() {
        id = 0;     
    }
})(this);
```
+ typeof null returns "object"
### [Js the right way](http://jstherightway.org/)
+ Anonymous functions are functions that are dynamically declared at runtime.
### Daniel Clifford
+ [youtube video](https://www.youtube.com/watch?v=UJPdhx5zTaw)
+ V8 can expose C++ to JavaScript
+ performance between `var a = [7,8,0.5,true]` and
```
var a = new Array();
a[0] = 7;
a[1] = 8;
a[2] = 0.5;
a[3] = true;
```
+ Inline caches - type dependant optimization ???
+ `hidden classses` and `class transitions`
### Random Code Snippets
+ random hex color code `'#'+Math.floor(Math.random()*16777215).toString(16);`
+ unique array Inline `Array.form(new Set(some_array))`
