const a = "md";
const b = [4,3,1];
const c = "swaley";

//default means while we import b array any name we can give and it will execute
//this is known as default export
export default b;

//but without default keyword while importing give same name as what we pass ig:-a and c.
//this is known as name export
export {a};
export {c};
