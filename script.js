const allFunc = () => {
    // Function to generate random numbers in left and right boxes
    const ex = () => {
      const randomNum = () => {
        var ranNum = Math.floor(Math.random() * 2);
        return ranNum;
      };
      for (let k = 0; k < 5; k++) {
        setInterval(() => {
          let left = document.getElementById("left");
          let left_currentText = left.textContent;
          let left_newText = left_currentText + randomNum() + " ";
          left.textContent = left_newText;
          left.scrollTop = left.scrollHeight;
          if (left.scrollWidth > left.clientWidth) {
            left.textContent = " ";
          }
        }, 10);
      }
  
      for (let j = 0; j < 5; j++) {
        setInterval(() => {
          randomNum();
          let right = document.getElementById("right");
          let currentText = right.textContent;
          let right_newText = currentText + randomNum() + " ";
          right.textContent = right_newText;
          right.scrollTop = right.scrollHeight;
          if (right.scrollWidth > right.clientWidth) {
            right.textContent = " ";
          }
        }, 10);
      }
  
      //center
      const runIt = () => {
        const username = document.getElementById("usernameInput").value;
        let a = [
          "Initialixing Hack tool",
          "Connecting to Facebook",
          "Connecting to server 1",
          "Connection failed. Retrying....",
          "Connecting to server 2",
          "Connected Successfully...",
          "Username " + username,
          "Trying Brute Force",
          "200k passwords tried...",
          "Match not found",
          "Another 200k passwords tried...",
          "Match not found",
          "Another 200k passwords tried...",
          "Match found",
          "Accessing Account",
          "Hack Successful",
        ];
  
        const sleep = (seconds) => {
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve(true);
            }, seconds * 1000);
          });
        };
  
        const showHack = async (messages) => {
          let center = document.getElementById("centre");
          for (let i = 0; i < messages.length; i++) {
            await sleep(2);
            center.innerHTML += messages[i].replace(
              "Username",
              "Username " + username
            ) + "<br>";
          }
          // show reset button after all messages have been shown
          let resetButton = document.createElement("button");
          resetButton.setAttribute("id", "resetButton");
          resetButton.innerText = "Reset";
          center.appendChild(resetButton);
          // stop generating random numbers in left and right boxes
          clearInterval(leftInterval);
          clearInterval(rightInterval);
          // hide input box and hack button
          usernameInput.style.display = "none";
          performAction.style.display = "none";
        };
  
        (async () => {
          await showHack(a);
        })();
      };
      // run the hacking simulation
      runIt();
    };
    ex();
  };
  
  const performAction = document.getElementById("performAction");
  performAction.addEventListener("click", () => {
    // call the function to generate random numbers and display the hack messages
    allFunc();
    // hide the input box and the button
    document.getElementById("usernameInput").style.display = "none";
    performAction.style.display = "none";
  });
  
  // reset button functionality
  document.addEventListener("click", (event) => {
    if (event.target.id === "resetButton") {
      // clear all div content
      document.getElementById("centre").innerHTML = "";
     
  let left = document.getElementById("left");
  let right = document.getElementById("right");
  left.textContent = "";
  right.textContent = "";
  // show input box and hack button
  usernameInput.style.display = "block";
  performAction.style.display = "block";
  };
  
  })