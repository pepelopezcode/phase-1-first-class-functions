

function receivesAFunction(func){
    func()
}
function returnsANamedFunction(){
    return function sayHi(){
        console.log('hi')
    }
}
function returnsAnAnonymousFunction(){
    return function(){
        console.log('hello')
    }
}