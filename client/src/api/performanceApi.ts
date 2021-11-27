import halfPeople from "../images/halfPeople.png";
import store from "../images/store.png";
import shoppingNonResponsive from "../images/shoppingNonResponsive.png";
import bootstrap from "../images/bootstrap.png";

interface PerformanceProps {
  id: string;
  name: string;
  responsive: string;
  libraries: string[];
  link: string;
  pic?: string;
}

export const Performance: PerformanceProps[] = [
  {
    id: "01",
    name: "เว็ปไซต์คนละครึ่ง",
    responsive: "y",
    libraries: [
      "React",
      "mobx",
      "mobx-react",
      "material-ui",
      "framer-motion",
      "react-icons",
      "axios",
    ],
    link: "https://github.com/nutthanonn/half-people-2020",
    pic: halfPeople,
  },
  {
    id: "02",
    name: "เว็ปไซต์ผลงานง่ายๆ",
    responsive: "y",
    libraries: [
      "React",
      "mobx",
      "mobx-react",
      "material-ui",
      "framer-motion",
      "react-icons",
      "react-intersection-observer",
    ],
    link: "https://github.com/nutthanonn/react-typescript",
    pic: store,
  },
  {
    id: "03",
    name: "เว็ปไซต์ผลงาน",
    responsive: "n",
    libraries: ["Bootstrap"],
    link: "https://github.com/nutthanonn/bootstrap",
    pic: bootstrap,
  },
  {
    id: "04",
    name: "เว็ปไซต์ขายของออนไลน์เบื้องต้น",
    responsive: "n",
    libraries: [
      "React",
      "mobx",
      "mobx-react",
      "material-ui",
      "framer-motion",
      "react-icons",
    ],
    link: "https://github.com/nutthanonn/react-ts-ecommerce",
    pic: shoppingNonResponsive,
  },
];
