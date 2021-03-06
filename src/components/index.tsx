import { Container } from "./Container";
import { NextChakraLink } from "./NextChakraLink";
import { Nav } from "./Nav";
import { DarkModeSwitch } from "./DarkModeSwitch";
import { Footer } from "./Footer";
import { Hero } from "./Hero";
import { Main } from "./Main";
// import { Queue } from "./Queue";
import { List } from "./List";
// import { Heading } from "./misc/Heading";

// can do
// export { Container } from './Container'
// without import (instead)
export * from "./misc";
export { Queue } from "./Queue";
export {
  Container,
  Nav,
  DarkModeSwitch,
  Footer,
  Hero,
  Main,
  List,
  NextChakraLink,
};
