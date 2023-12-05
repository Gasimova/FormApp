
import React, { useEffect, useState } from 'react'

export const useAxios = ({ dataFn , onSuccess, onError}) => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)


    const handleFn = () => {
        setLoading(true)

        dataFn()
        .then((res) => {
            setData(res)
            onSuccess?.(res)
        }).catch((err) => {
            setError(err)
            onError?.(err)
        }).finally(() => {
            setLoading(false)
        })
    }


    useEffect(() => {
        handleFn()

    }, [])


    return { data, error, loading }

}
