export const checkValidData = (email, password, name, isSignInForm) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(
    password
  );

  const isNameValid = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);

  if (isSignInForm) {
    if (!isEmailValid) return "Email id is not valid!";
    if (!isPassword) return "Password is not valid!";
  } else {
    if (!isEmailValid) return "Email id is not valid!";
    if (!isPassword) return "Password is not valid!";
    if (!isNameValid) return "Name is not valid!";
  }

  return null;
};
