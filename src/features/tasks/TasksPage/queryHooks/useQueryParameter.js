import {useLocation} from "react-router-dom"

const useQueryParameter = (parameter) =>  {
    const location = useLocation()
    return (new URLSearchParams(location.search)).get(parameter)
}

export default useQueryParameter
