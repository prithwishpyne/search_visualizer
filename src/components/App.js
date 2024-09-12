import { useState } from "react";
import NavBar from "./NavBar";
import Main from "./Main";

export default function App() {
  const [arr, setArr] = useState([]);
  const [message, setMessage] = useState("Generate an array");
  const [isVisualizing, setIsVisualizing] = useState(false);

  function generateRandomNumber() {
    return Math.floor(Math.random() * 99 + 1);
  }

  function handleGenerate() {
    setMessage("Select an Algorithm to visualize");
    const t = document.querySelector(".boxes");

    const y = t.childNodes;
    for (let i = 0; i < y.length; i++) {
      y[i].style.backgroundColor = "";
    }
    const arrToSet = [];
    while (arrToSet.length < 10) {
      const num = generateRandomNumber();
      if (!arrToSet.includes(num))
        arrToSet.push(num < 10 ? Number(`0${num}`) : num);
    }
    setArr(arrToSet.sort((a, b) => a - b));
  }

  function handleLinearSearch() {
    const numToSearch = arr[Math.floor(Math.random() * arr.length)];
    setMessage(`Searching for the number ${numToSearch} using Linear Search`);
    setIsVisualizing(true);

    const x = document.querySelector(".boxes");

    for (let i = 0; i < arr.length; i++) {
      const el = x.children[i];
      const check = +el.getAttribute("data-key") === numToSearch;
      console.log(check);
      setTimeout(() => {
        el.style.backgroundColor = "#38a3a5";
        setTimeout(() => {
          el.style.backgroundColor = check ? "#38b000" : "#c1121f";
        }, 1100);
        if (check)
          setTimeout(() => {
            setMessage(`Number ${numToSearch} found!`);
            setIsVisualizing(false);
          }, 1100);
      }, 1500 * (i + 1));
      if (check) {
        break;
      }
    }
  }

  function handleBinarySearch() {
    const numToSearch = arr[Math.floor(Math.random() * arr.length)];
    setMessage(`Searching for the number ${numToSearch} using Binary Search`);
    setIsVisualizing(true);

    const x = document.querySelector(".boxes");

    let left = 0;
    let right = arr.length - 1;
    let mid;
    let i = 0;

    while (left <= right) {
      let toColor = [];
      i += 1;
      mid = Math.floor((left + right) / 2);
      const el = x.children[mid];
      const check = +el.getAttribute("data-key") === numToSearch;
      let j = 0;

      setTimeout(() => {
        j += 1;
        el.style.backgroundColor = "#38a3a5";
        setTimeout(() => {
          el.style.backgroundColor = check ? "#38b000" : "#c1121f";
          toColor.forEach((num) => {
            x.children[num].style.backgroundColor = "#c1121f";
          });
        }, 1200 * j + 1);
        if (check)
          setTimeout(() => {
            setMessage(`Number ${numToSearch} found!`);
            setIsVisualizing(false);
          }, 1200);
      }, 1800 * i + 1);

      if (arr[mid] === numToSearch) {
        break;
      } else if (arr[mid] < numToSearch) {
        for (let n = mid; n >= left; n--) {
          toColor.push(n);
        }
        left = mid + 1;
      } else {
        for (let n = mid; n <= right; n++) {
          toColor.push(n);
        }
        right = mid - 1;
      }
      i++;
    }
  }

  return (
    <>
      <NavBar
        onGenerate={handleGenerate}
        onLinearSearch={handleLinearSearch}
        onBinarySearch={handleBinarySearch}
        arr={arr}
        isVisualizing={isVisualizing}
        message={message}
      />
      <Main arr={arr} message={message} />
    </>
  );
}
