import React from 'react'
import Meta from './../components/Meta';
import BreadCrumb from './../components/BreadCrumb';
import Container from './../components/Container';
import CustomInput from '../components/CustomInput';
import { useLocation, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { resetPassword } from '../features/user/userSlice';

const schema = yup.object().shape({
    password: yup.string().required('Password is required')
});

const ResetPassword = () =>
{
    const dispatch = useDispatch();
    const location = useLocation();
    const getToken = location.pathname.split("/")[2];
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            password: "",
        },
        validationSchema: schema,
        onSubmit: (values) => {
            dispatch(resetPassword({token: getToken, password: values.password}));
            navigate("/login");
        }
    });

    return (
        <>
            <Meta title={"Reset Password"} />
            <BreadCrumb title="Reset Password" />
            <Container class1="login-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-12">
                        <div className="auth-card">
                            <h3 className='text-center mb-3'>Reset Password</h3>
                            <form onSubmit={formik.handleSubmit} action="" className='d-flex flex-column gap-15'>
                                <CustomInput type="password" name='password' placeholder='New Password' 
                                    onChange={formik.handleChange('password')}
                                    onBlur={formik.handleBlur('password')}
                                    value={formik.values.password}
                                />
                                <div className="error">{formik.touched.password && formik.errors.password}</div>
                                <div>
                                    <div className='mt-3 d-flex justify-content-center gap-15 align-items-center'>
                                        <button className='button border-0'>Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default ResetPassword;
