'use strict';
function Foo(){
    if(Foo.a){
        console.log('foo has exist');
        return Foo.a;
    }
    console.log('init foo');
    Foo.a=this;
}



var f1=new Foo();
var f2=new Foo();