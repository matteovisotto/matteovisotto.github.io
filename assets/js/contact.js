function initContactPage() {
  var sendMailButton = document.getElementById("sendFormBtn");
  sendMailButton.addEventListener("click", function () {
    var name = document.getElementById("from-name");
    var email = document.getElementById("from-email");
    var content = document.getElementById("form-content");
    var result = sendMail(name.value, email.value, content.value);

    var alertContainer = document.getElementById("alert-container");
    if(result){
      alertContainer.className = "alert alert-success";
      alertContainer.innerText = "E-Mail successfully sent";
    } else {
      alertContainer.className = "alert alert-danger";
      alertContainer.innerText = "An error occurred while sending the email";
    }
  });
}

function sendMail(name, mail, content) {
  var result;
  $.ajax({
    type: "POST",
    url: "https://matmacsystemfile.altervista.org/matteovisotto/api/sendMail.php",
    data: "name="+name+"&email="+mail+"&content="+content,
    dataType: "html",
    success: function (msg) {
      var content = JSON.parse(msg);
      if(content.result===1) {
        result = true;
      } else {
        result = false;
      }
    },
    error: function () {
      result = false;
    },
    async: false,
  });
  return result;
}

$('window').ready(function () {
  initContactPage();
});
