export { TestingHome, Testing } from "./Testing";

export function multiply(a: number, b: number): Promise<number> {
  return Promise.resolve(a * b);
}

export function helloNpmModule(name: string): void {
  console.log('welcome to testing npm package jouney ' + name)
}


