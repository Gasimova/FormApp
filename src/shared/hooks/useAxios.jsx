
import React, { useEffect, useState } from 'react'

export const useAxios = ({ dataFn }) => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)


    const handleFn = () => {
        setLoading(true)

        dataFn()
        .then((res) => {
            setData(res)
        }).catch((err) => {
            setError(err)
        }).finally(() => {
            setLoading(false)
        })
    }


    useEffect(() => {
        handleFn()

    }, [])


    return { data, error, loading }

}
