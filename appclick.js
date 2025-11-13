const button = document.querySelector("button");
const username = document.querySelector("username");
const password = document.querySelector("password");






      button.addEventListener("click", function() {
        if (this.username === "appclickict" && this.password === "appclick1234") {
          alert("User Login");
        } else {
          alert("Invalid username or password!");
        }
      })
