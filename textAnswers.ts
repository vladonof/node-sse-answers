//1. Explain why `{ a: 1 } === { a: 1 }` is `false` in JavaScript
//
//When we create an object like { a: 1 }, JavaScript allocates memory for this object and assigns it an address.
//The "===" operator, js checks wether the memory addresses are the same.
//In the given expression, two separate objects are created. So even though they have the same value, they occupy different places in memory, so they are different
//
//
//2. Describe the runtime difference(s) between `for await (const a  of [p1, p2, p3]) { ... }` vs `[p1, p2, p3].forEach(async (p) {  await p })`
//
//The main difference is in how they handle async execution and when promises are awaited.
//
// "for await (const a of [p1, p2, p3]) { ... }" waits for each promise to resolve before moving to next iteration. It's a seuqntial loop, processes one promise at a time. The loop doesn't start processing the next promise until the current one has been fully resolved.
// "[p1, p2, p3].forEach(async (p) => { await p })" the promises are executed concurrently, without waiting for one to complete before starting next. This is faster but without controlling the order in which they resolve.
//
//3. Explain the difference between nodejs and V8
//
//V8 is a Javascript engine that is a core component of Nodejs, it's responsible for compiling and executing JS code. It's also optimizing code execution, and manages memory usage.
//Nodejs is a runtime environment that allows you to execute javascript on the "server side". It also provides APIs to interact with the underlying operating system.
//
//4. Using typescript, what is the difference between an enum and an object?
//
//Both enums and objects are used to represent collections of related values, but they have different purposes, behaviors, and usage patterns.
//Enums are a TypeScript specific feature that provides a clear, type-safe way to work with a set of related constants, while objects are general-purpose structures used for a wide range of purposes.
//
//5. Write a typescript variable declaration for a variable `a` that  will guarantee that it is a property name or key of object `b`
//
type b = {
  name: string;
  age: number;
  isActive: boolean;
};

let a: keyof b; // a can only be "name", "age" or "isActive"
//
//6. Describe some drawbacks or common pitfalls when using typescript in large applications
//
//Integrating third-party libraries with inadequate or outdated type definitions can cause inconsistencies and errors.
//There's a temptation to overuse TypeScript's type system, which can lead to unnecessary cognitive complexity and reduced flexibility.
//TypeScript’s inference can sometimes lead to unexpected behaviors or require explicit type annotations, which might be cumbersome.
//No runtime type checking -  The need to include polyfills, type guards, or runtime validation code to handle situations TypeScript doesn’t cover natively can increase the size of the final JavaScript bundle.
