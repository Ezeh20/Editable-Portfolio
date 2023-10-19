export const checkUser = (isUsername, isEmail, password, error, setError) => {
  const newError = { ...error }

  if (isUsername) {
    newError.username = 'username already in use'
  } else {
    newError.username = ''
  }

  if (isEmail) {
    newError.email = 'this email already exists'
  } else {
    newError.email = ''
  }
  if (password.length < 8) {
    newError.password = 'password must be at least 8 characters long'
  } else {
    newError.password = ''
  }
  setError(newError)

  if (isUsername || isEmail || password.length < 8) {
    return true
  }
  return false
}
