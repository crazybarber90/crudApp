export const submit = (data, setIsLoggedIn, email, name, textArea) => {
  const isLoginSuccess = data.filter((d) => {
    return d.name === name && d.email === email && d.textArea === textArea;
  });
  if (isLoginSuccess.length > 0) {
    console.log("Ulogovan");
    setIsLoggedIn(true);
  } else {
    console.log("Izlogovan");
    setIsLoggedIn(false);
  }
};
