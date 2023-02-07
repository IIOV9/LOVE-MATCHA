<script>
let contactusForm = document.getElementById("contactus);

contactusForm.addEventListener("send", (e) => {
  e.preventDefault();

  let name = document.getElementById("name");
  let email = document.getElementById("email");
    let message = document.getElementById("message");

    name.value = "";
    email.value = "";
    message.value = "";
  }
</script>
