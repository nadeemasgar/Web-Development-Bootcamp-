$("#user_title, #user_amount, #user_email").bind("keyup", function () {
  if (allFilled()) $("#register").removeAttr("disabled");
});

function allFilled() {
  var filled = true;
  $("body input").each(function () {
    if ($(this).val() == "") filled = false;
  });
  return filled;
}

function validateform() {
  let name = document.myform.name.value;
  let amount = document.myform.amount.value;
  let email = document.myform.email.value;

  /* Title Validation */
  let name_regex = /^[a-zA-Z]+$/;
  let isValidName = name_regex.test(name);
  if (name == "null" || name == "" || !isValidName) {
    $("#user_title").css("border-color", "red");
    // alert("");
    document.getElementById("nameError").innerHTML =
      "Title can't be blank or format is wrong";
    return false;
  } else {
    $("#user_title").css("border-color", "");
    document.getElementById("nameError").innerHTML = "";
  }

  /* Number Validation */
  let regex_numbers = /^[0-9]+$/;
  let isValidNumber = regex_numbers.test(amount);
  if (amount == "null" || amount == "" || !isValidNumber) {
    $("#user_amount").css("border-color", "red");
    // alert("");
    document.getElementById("amountError").innerHTML =
      "Amount should only contain number ";
    return false;
  } else {
    $("#user_amount").css("border-color", "");
    document.getElementById("amountError").innerHTML = "";
  }

  /* Email Validation */
  let regex_email = new RegExp(
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
  );
  let isValidEmail = regex_email.test(email);
  if (email == "null" || email == "" || !isValidEmail) {
    $("#user_email").css("border-color", "red");
    // alert("");
    document.getElementById("emailError").innerHTML = "Email format is wrong ";
    return false;
  } else {
    $("#user_email").css("border-color", "");
    document.getElementById("emailError").innerHTML = "";
  }
}
