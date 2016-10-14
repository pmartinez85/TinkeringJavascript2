require('./bootstrap');
require('./animal');

var Dog = function() {
    Animal.apply(this, arguments);
};
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.say = function() {
    console.log('bark');
};

var dog = new Dog();
dog.eat();
dog.say();
