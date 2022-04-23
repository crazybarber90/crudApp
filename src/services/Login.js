export const submit = (data, setIsLoggedIn, email, name) => {
  const isLoginSuccess = data.filter((d) => {
    return d.name === name && d.email === email;
  });
  if (isLoginSuccess.length > 0) {
    console.log("Logovan sam");
    setIsLoggedIn(true);
  } else {
    console.log("Nisam logovan");
    setIsLoggedIn(false);
  }
};
