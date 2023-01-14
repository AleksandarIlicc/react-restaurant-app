const Validation = (value) => {
    const errors = {};

    if (!value.username) {
        errors.username = 'Username required';
    }

    if (!value.email) {
        errors.email = 'Email required'
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value.email)) {
        errors.email = 'Email address is invalid'
    }

    if (!value.password) {
        errors.password = 'Password required'
    } else if (value.password.length < 6) {
        errors.password = 'Password needs to be 6 characters or more'
    }

    if (!value.password2) {
        errors.password2 = 'Password2 required'
    } else if (value.password2 !== value.password) {
        errors.password2 = 'Password do not match'
    }

    return errors;
}

export default Validation;