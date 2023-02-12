class Coordinates {
  constructor(
    public readonly x: number,
    protected y: number,
    private z: number
  ) {
    // No body necessary
  }
}
const firstCoor = new Coordinates(1, 2, 3);
console.log(firstCoor.x); // 1
             
// Property 'z' is private and 
// only accessible within class 'Params'.
console.log(firstCoor.z);
