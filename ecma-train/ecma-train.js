const obj = {
    foo: 'foo',
    bar: () => ({})
}

// or destructing
const {foo} = obj;

function show(obj) {
    if (!obj) throw new  Error();
    console.log(obj.foo);
}

function show({ foo }) {
    console.log(foo);
}

show(obj);