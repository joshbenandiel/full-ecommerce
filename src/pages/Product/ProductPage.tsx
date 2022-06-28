import { useParams } from "react-router-dom"

export const ProductPage = () => {

  const {slug} = useParams()

  return (
    <div>{slug}</div>
  )
}
