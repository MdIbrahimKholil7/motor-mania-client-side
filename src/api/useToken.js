import { useEffect, useState } from "react"
import fetcher from "./fetcher"

const useToken = (user) => {
    const [token, setToken] = useState('')
    console.log(user)
    useEffect(() => {
        (async () => {
            if (user?.email) {
                const { data } = await fetcher.put('/token', {
                    email: user?.email
                })
                console.log(data)
                setToken(data.accessToken)
                localStorage.setItem('accessToken', data.accessToken)
            }
        })()
    }, [user])
    return [token]
}
export default useToken