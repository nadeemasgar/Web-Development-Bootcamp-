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
  let email = document.myform.email.value;
  var regex = /^[a-zA-Z]+$/;
  var isValid = regex.test(name);
  if (name == "null" || name == "" || !isValid) {
    $("#user_title").css("border-color", "red");
    // alert("");
    document.getElementById("usernameError").innerHTML =
      "Title can't be blank or format is wrong";
    return false;
  } else {
    $("#user_title").css("border-color", "");
  }
}
