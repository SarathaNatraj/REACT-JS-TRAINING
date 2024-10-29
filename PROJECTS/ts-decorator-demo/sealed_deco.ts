function sealed(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
  }
  
  @sealed
  class Tree {
    location = "Vienna";
    height: number;
    public getLocation() {
      return this.location;
    }
    constructor(height: number) {
      this.height = height;
    }
  }
  
  const tree = new Tree(12);