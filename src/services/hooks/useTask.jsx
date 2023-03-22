import { useContext } from "react"
import { Context } from "../storage"

export default function useTask() {
  const [state, dispatch] = useContext(Context);
  return [state, dispatch]
}
