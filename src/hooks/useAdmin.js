import { useEffect, useState } from "react"
import fetcher from "../api/fetcher"

const useAdmin = user => {
    const [admin, setAdmin] = useState(null)
    const [adminLoading, setAdminLoading] = useState(true)
    useEffect(() => {
        if (user?.email) {
            (async() => {
                const { data } = await fetcher.get(`/make-admin?email=${user?.email}`)
                setAdmin(data.message)
                setAdminLoading(false)
            })()
        }
    }, [user])
    return [admin,adminLoading]
}
export default useAdmin