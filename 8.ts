// To run, `yarn install` and `node --expose-gc -r ts-node/register ./8.ts`
const forceGarbageCollection = (): void => {
  if (global.gc) {
    console.log("Forcing garbage collection...");
    global.gc();
    console.log("Garbage collection complete.");
  } else {
    console.log("Garbage collection is not exposed");
  }
};

console.log("Before garbage collection");
forceGarbageCollection();
console.log("After garbage collection");
