import type { TextError } from "../types/Input.text.error"


const ErrorTxt = ({error}:TextError) => {
  if(!error) return null
  return <span className="text-red-400">{error.message}</span>
}

export default ErrorTxt