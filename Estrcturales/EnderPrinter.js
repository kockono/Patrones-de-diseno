import Printer from "./Printer";

//Subclase

class EnderPrinter extends Printer {
  print() {
    return `Printer: Ender, Ink: ${this.ink.type} and color is ${
      this.color.type
    }`;
  }
}

export default EnderPrinter;