export const handleFormSubmit = (
  e,
  data,
  email,
  name,
  textArea,
  setIsLoggedIn,
  setIsVisible,
  showMessage
) => {
  e.preventDefault();
  const isLoginSuccess = data.filter((d) => {
    return d.name === name && d.email === email;
  });
  if (isLoginSuccess.length > 0 && textArea !== "") {
    console.log("usao");
    setIsLoggedIn(true);
    setIsVisible(true);
    showMessage("You got it", "success", 3000);
  } else if (name === "" || email === "") {
    showMessage("empty fields", "error", 3000);
  } else if (
    !email.match(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
  ) {
    showMessage("Enter valid e-mail", "error", 3000);
  } else if (textArea === "") {
    showMessage("Make a question", "question", 3000);
  } else {
    console.log("nije usao");
    showMessage("Wrong credentials", "error", 3000);
    setIsLoggedIn(false);
  }
};
