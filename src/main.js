import "./css/index.css";

const ccBgColor1 = document.querySelector(".cc-bg svg > g g:nth-child(1) path");
const ccBgColor2 = document.querySelector(".cc-bg svg > g g:nth-child(2) path");
const ccLogo = document.querySelector(".cc-logo span:nth-child(2) img")

ccBgColor1.setAttribute("fill", "green");
ccBgColor2.setAttribute("fill", "blue");

const colors = {
  visa: ["#2D57F2", "#436D99"],
  mastercard: ["#C69347", "#DF6F29"],
  default: ["black", "gray"],
};

function setCardType(type) {
  const colors = {
    visa: ["#2D57F2", "#436D99"],
    mastercard: ["#C69347", "#DF6F29"],
    default: ["black", "gray"],
  };

  ccBgColor1.setAttribute("fill", colors[type][0]);
  ccBgColor2.setAttribute("fill", colors[type][1]);
  ccLogo.setAttribute("src", `cc-${type}.svg`)
}

setCardType("mastercard")

globalThis.setCardType = setCardType