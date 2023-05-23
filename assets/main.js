let submitForm = document.getElementById("submitForm");

submitForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let handle = document.getElementById("handle");

  if (name.value == "" || email.value == "") {
    alert("Ensure you input a value in both fields!");
  } else {
    // perform operation with form input
    alert("This form has been successfully submitted!");
    console.log(
      `This form has a name of ${name.value}, email of ${email.value} and handle of ${handle.value}`
    );

    name.value = "";
    email.value = "";
    handle.value = "";

  }
});

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
