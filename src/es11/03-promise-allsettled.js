const promise1 = new Promise(() => PromiseRejectionEvent("Reject"));
const promise2 = new Promise((resolve, reject) => resolve("resolve"));
const promise3 = new Promise((resolve, reject)=> resolve(Resolve2))