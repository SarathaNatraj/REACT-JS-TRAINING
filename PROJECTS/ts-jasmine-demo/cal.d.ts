declare module Kinetic {
    export class Rect implements IRect {
        public x: number;
        public y: number;
        public width: number;
        public height: number;
        
    }
}
interface IShape {
    x: number;
    y: number;
    width: number;
    height: number;
}

interface IRect extends IShape {

}
