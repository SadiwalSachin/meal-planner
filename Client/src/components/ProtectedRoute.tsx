import { useNavigate } from 'react-router-dom'

const ProtectedRoute = ({component}) => {

    const navigate = useNavigate()
    const signIn = true
    if(!signIn){
        navigate("/sign-up")
    } else return (
    <>
    {component}
    </>
  )
}

export default ProtectedRoute
