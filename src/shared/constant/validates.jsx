export const validateInputs = (values) => {
    const errors = {}

    if (!values.body) {
        errors.body = 'This fiels is required'
    } else if (values.body.length > 300) {
        errors.body = 'Maximum limit 300 character'
    } else if (values.body.length < 30) {
        errors.body = 'Must be minimum 30 characters'
    }


    if (!values.title) {
        errors.title = 'This fiels is required'
    } else if (values.title.length > 100) {
        errors.title = 'Maximum limit 100 character'
    } else if (values.title.length < 10) {
        errors.title = 'Must be minimum 10 characters'
    }

    return errors
}