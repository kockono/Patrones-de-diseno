import LiquidInk from "./LiquidInk";
import TonerInk from "./TonerInk";
import PowderInk from "./PowderInk";
import EpsonPrinter from "./EpsonPrinter";
import EnderPrinter from "./EnderPrinter";
import BlackAndWhite from "./BlackAndWhite";
import Colors from "./Colors";

//Ink
const liquidInk = new LiquidInk();
const tonerInk = new TonerInk();
const powderInk = new PowderInk();

//Color
const blackAndWhite = new BlackAndWhite();
const red = new Colors("red");
const blue = new Colors("blue");

//Printer
const liquidPrinter = new EpsonPrinter(liquidInk, red);
const tonerPrinter = new EpsonPrinter(tonerInk, blue);
const enderPrinter = new EnderPrinter(powderInk, blackAndWhite);

console.log(liquidPrinter.print());
//output Printer: Epson, Ink: acrylic-based and color is red
console.log(tonerPrinter.print());
//output Printer: Epson, Ink: laser-based and color is blue
console.log(enderPrinter.print());
//output Printer: Printer: Ender, Ink: nylon-based and color is black and white