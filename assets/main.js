// let submitForm = document.getElementById("submitForm");

// submitForm.addEventListener("submit", (e) => {
//   e.preventDefault();

//   let name = document.getElementById("name");
//   let email = document.getElementById("email");
//   let handle = document.getElementById("handle");

//   if (name.value == "" || email.value == "") {
//     alert("Ensure you input a value in both fields!");
//   } else {
//     // perform operation with form input
//     alert("This form has been successfully submitted!");
//     console.log(
//       `This form has a name of ${name.value}, email of ${email.value} and handle of ${handle.value}`
//     );

//     name.value = "";
//     email.value = "";
//     handle.value = "";

//   }
// });

// const form = document.getElementById("submitForm");

// form.addEventListener("submit", onFormSubmit);

// function onFormSubmit(event) {
// 	event.preventDefault();
// 	const data = new FormData(event.target);

// 	const name = data.get("name");
// 	const email = data.get("email");
//     const handle = data.get("handle");
// 	console.log(`Name: ${name}, Email: ${email}, Handle: ${handle}`);
// }


// const submitForm = document.getElementById("submitForm");

// submitForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   console.log("Form has been submitted");
// });



function validForm() {
  //alert("Alert!");
  let name = document.submitForm.name;
  let email = document.submitForm.email;
  let handle = document.submitForm.handle;

  if(name.value == "") {
    name.nextElementSibling.style.display = "block";
    name.style.border = "1px solid #f00";
    return false;
  } else {
    name.nextElementSibling.style.display = "none";
    name.style.border = "1px solid transparent";
  }

  if(email.value == "") {
    email.nextElementSibling.style.display = "block";
    email.style.border = "1px solid #f00";
    return false;
  } else {
    email.nextElementSibling.style.display = "none";
    email.style.border = "1px solid transparent";
  }

  if(handle.value == "") {
    handle.nextElementSibling.style.display = "block";
    handle.style.border = "1px solid #f00";
    return false;
  } else {
    handle.nextElementSibling.style.display = "none";
    handle.style.border = "1px solid transparent";
  }
}

