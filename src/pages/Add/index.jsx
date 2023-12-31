import { Button, Flex, Input, notification } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import { useFormik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Label } from 'reactstrap'
import { addPosts } from '../../services/user'

import { Header } from '../../shared/components/Header'
import { Router } from '../../shared/constant/router'
import { validateInputs } from '../../shared/constant/validates'


export const AddPost = () => {

    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            title: "",
            body: ""
        },
        validate:validateInputs,
        onSubmit: (values) => {
            addPostFetch(values)
            formik.handleReset()
        }
    })

    const disabled = !!Object.values(formik.errors).length

    const addPostFetch = (data) => {
        addPosts(data)
        .then((res) => {
            console.log(res, 'res');
            navigate(Router.HOME)
            notification.success({
                message: '',
                description: 'Post uğurla əlavə edildi'
            });
        }).catch((err)=>console.log(err, 'err'))
    }

    return (
        <>
            <Header />
            <form className='add-page-form'>
                <h2>Add New Post</h2>
                <Label htmlFor='title'>
                    Title
                    <Input onChange={formik.handleChange}
                        value={formik.values.title}
                        style={{ width: 500 }} name='title'
                        placeholder='Add title' />
                    {formik.errors.title && <span className='error-color'>{formik.errors.title}</span>}
                </Label>
                <Label htmlFor='body'>
                    Description
                    <TextArea onChange={formik.handleChange}
                        value={formik.values.body}
                        name='body' rows={3} placeholder='Add Description'
                        style={{ width: 500 }} />
                    {formik.errors.body && <span className='error-color'>{formik.errors.body}</span>}
                </Label>
                <Button disabled={disabled} onClick={formik.handleSubmit} type='submit' style={{ color: "white", backgroundColor: disabled ? '#0a8597' : '#00e4ea' }} size="large" color='white'>Submit</Button>
            </form>
        </>
    )
}
