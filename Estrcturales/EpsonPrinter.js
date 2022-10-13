import Printer from "./Printer";
class EpsonPrinter extends Printer {
  print() {
    return `Printer: Epson, Ink: ${this.ink.type} and color is ${
      this.color.type
    }`;
  }
}

export default EpsonPrinter;