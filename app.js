const UserFirstName = document.querySelector("#userFirstName").value;

const UserOtherName = document.querySelector("#userSOtherName");
const userEmailForSignUp = document.querySelector("#userEmailForSignUp").value;
const UserNumberForSignUp = document.querySelector("#userNumberForSignUp");
const userPassForSignUp = document.querySelector("#userPasswordForSignUp");
const signininputfo = document.getElementById("signininputfo").value;

const signinpassfo = document.getElementById("signinpassfo");

const dispshow = document.querySelector("#signup");
const hideshow = document.querySelector(".sign-in");
const oksignshow = document.querySelector(".sign-up");
const signUp = document.querySelector("#btn2");
function checkCookies() {
  if (!document.cookie) {
    return;
  }
  window.location.href = "./okdashboard/dashboard.html";
}
checkCookies();
// signUp.addEventListener("click", () => {
//   hideshow.style.display = "none";
// });
// const signsubmited = (e) => {
//   // alert("sign up clicked");
//   // dispshow.style.display = "block";
//   // hideshow.style.display = "none";
//   e.preventDefault();
// };

// let serverUrl = "https://server.mastershadow01.repl.co/lmao";

// fetch(serverUrl, {
//   method: "post",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     name: "huh",
//     email: "ok@gmail.com",
//   }),
// })
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

document.getElementById("myForm").addEventListener("submit", submitForm);

async function submitForm(event) {
  event.preventDefault();

  const name = document.getElementById("userFirstName").value;
  const email = document.getElementById("userEmailForSignUp").value;
  const number = document.getElementById("userNumberForSignUp").value;
  const password = document.getElementById("userPassForSignUp").value;
  // const formData = {
  //   name: name,
  //   email: email,
  //   number: number,
  //   password: password,
  // };
  const fromDatag = async (formData) => {
    try {
      const response = await fetch(
        "https://server.mastershadow01.repl.co/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const responseData = await response.json();
      const deta = responseData;
      // localStorage.setItem("uId", deta);
      // const storageKey = localStorage.getItem("uId");
      // console.log(storageKey);
      function setcookie(name, value, expMont) {
        const date = new Date();
        date.setTime(date.getTime() + expMont * 30 * 24 * 60 * 60 * 1000);
        const expires = "expires=" + date.toUTCString();
        document.cookie = name + "=" + value + ";" + expires;
      }
      setcookie("userId", deta, 2);
      if (response.ok) {
        // alert(deta);

        // document.cookie = `idbyServer=${data}`;
        // cook(document.cookie);
        window.location.href = "./okdashboard/dashboard.html";
        // hideshow.style.display = "none";
        // oksignshow.style.display = "none";
        // console.log(responseData);
      } else if (response.status == 409) {
        alert("your email already exist");
      } else {
        alert("fuck off");
      }
      // .then((response) => response.json())
      // .then((data) => {
      //   console.log(data);
      //   if () {
      //     alert("Error! Please try again later.");
      //   }
      //   console.log(data.status);
      //   if (data.ok) {
      //     // window.location.href = "./okdashboard/dashboard.html";
      //     handleForm();
      //   } else {
      //     alert("fuck you bruh");
      //   }
      //   // Handle success or display a success message to the user
      // })
      // .catch((error) => {
      //   console.error(error);
      //   // Handle error or display an error message to the user
      // });
    } catch (error) {
      console.log(`Something went wrong ${error}`);
    }
  };
  const formData = {
    name: name,
    email: email,
    number: number,
    password: password,
  };
  fromDatag(formData);
}
async function cook(cooki) {
  try {
    const resp = await fetch("https://server.mastershadow01.repl.co/cookies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cooki),
    })
      .then(resp.json())
      .then(console.log(resp));
  } catch (error) {
    console.log(error);
  }
}

const signinsubmitted = () => {
  console.log("signed in");
  // window.open("dashbord.html");
};
if (window.location === "dashbord.html") {
  hideshow.style.display = "none";
  oksignshow.style.display = "none";
}
function handleForm(event) {
  event.preventDefault();
  hideshow.style.display = "none";
  oksignshow.style.display = "block";
}
// dispshow.addEventListener("submit", handleForm);
