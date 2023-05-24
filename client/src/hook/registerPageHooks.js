import React, { useState, useEffect } from 'react'
import notify from '../hook/useNotifaction';
import { useDispatch, useSelector } from 'react-redux';
import { createNewUser } from '../redux/actions/authAction';
import { useNavigate } from 'react-router-dom';

const RegisterPageHooks = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [loading, setLoading] = useState(true)

    const onChangeName = (e) => {
        setName(e.target.value)
    }
    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }
    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }
    const onChangeConfirmPassword = (e) => {
        setConfirmPassword(e.target.value)
    }

    const validationValues = () => {
        if (name === "" || email === "") {
            notify("من فضلك اكمل البيانات ", "error")
            return;
        }
        if (password != confirmPassword) {
            notify("  كلمه السر غير مطابقة", "error")
            return;
        }
        if (name.length < 3) {
            notify("من فضلك ادخل الاسم اكبر من 3 ارقام", "error")
            return;
        }
        if (password.length < 8) {
            notify("من فضلك ادخل كلمة السر اكبر من 8 ارقام", "error")
            return;
        }



    }

    const res = useSelector(state => state.authReducer.createUser)

    //save data
    const OnSubmit = async (e) => {
        e.preventDefault();
        validationValues();
        setLoading(true)
        await dispatch(createNewUser({
            name,
            email,
            password,
            passwordConfirm: confirmPassword,
        }))
        setLoading(false)
        console.log("Done")
    }

    useEffect(() => {
        if (loading === false) {
            if (res) {
                console.log(res)
                if (res.token) {
                    localStorage.setItem("token", res.token)
                    notify("تم تسجيل الحساب بنجاح", "success")
                    setTimeout(() => {
                        navigate('/login')
                    }, 2000);
                }

                if (res.errors) {
                    if (res.data.errors[0].msg === "E-mail already in user")
                        notify("هذا الايميل مسجل من قبل", "error")
                }

                if (res.errors) {
                    if (res.data.errors[0].msg === "must be at least 6 chars")
                        notify("يجب ان لاقل كلمه السر عن 6 احرف او ارقام", "error")
                }


            }
        }
    }, [loading])

    return [name, email , password, confirmPassword, loading, onChangeName, onChangeEmail, onChangePassword, onChangeConfirmPassword, OnSubmit]
}

export default RegisterPageHooks