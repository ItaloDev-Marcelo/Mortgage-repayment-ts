import type { TextError } from "../types/Input.text.error"


const ErrorTxt = ({error}:TextError) => {
  if(!error) return null
  return <span>{error.message}</span>
}

export default ErrorTxt