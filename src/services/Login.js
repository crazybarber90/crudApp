export const submit = (
  data,
  setIsLoggedIn,
  setIsVisible,
  email,
  name,
  textArea
) => {
  const isLoginSuccess = data.filter((d) => {
    console.log(setIsVisible);
    return d.name === name && d.email === email;
  });
  // if (isLoginSuccess.length > 0 && textArea !== "") {
  //   setIsLoggedIn(true);
  //   setIsVisible(true);
  // } else {
  //   setIsLoggedIn(false);
  //   // setIsVisible(false);
  //   //setIsVisible default state is false
  // }

  {
    isLoginSuccess.length > 0 && textArea !== ""
      ? setIsLoggedIn(true) && setIsVisible(true)
      : setIsLoggedIn(false);
    // setIsVisible(false);
    //setIsVisible default state is false}
  }
};
