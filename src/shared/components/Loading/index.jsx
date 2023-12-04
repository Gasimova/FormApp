import { Flex, Spin } from 'antd'
import React from 'react'

export const Loading = () => {
    return (
        <>
            <Flex align="center" gap="middle">
                <Spin dotSize={20} size="large" />
            </Flex>
        </>
    )
}
