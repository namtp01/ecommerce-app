import React from 'react'
import Meta from './../components/Meta';
import BreadCrumb from './../components/BreadCrumb';
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall, BiInfoCircle } from "react-icons/bi";
import Container from './../components/Container';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { createQuery } from './../features/contact/contactSlice';

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email('Email should be valid').required('Email is required'),
  mobile: yup.string().required('Mobile is required'),
  comment: yup.string().required('Comment is required'),
});

const Contact = () =>
{
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
      comment: "",
    },
    validationSchema: schema,
    onSubmit: (values) =>
    {
      dispatch(createQuery(values));
    }
  });
  return (
    <>
      <Meta title={"Contact Us"} />
      <BreadCrumb title="Contact Us" />
      <Container class1="contact-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <iframe title='MyLocation' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62707.851286071105!2d106.59147928197166!3d10.792867550442445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f37aad0da21%3A0xf2e1a10348911337!2sVERSACE!5e0!3m2!1svi!2s!4v1685859334534!5m2!1svi!2s"
              className='border-0 w-100'
              width="600"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className="col-12 mt-5">
            <div className="contact-inner-wrapper d-flex justify-content-between">
              <div>
                <h3 className='contact-title mb-4'>Contact</h3>
                <form action="" onSubmit={formik.handleSubmit} className='d-flex flex-column gap-15'>
                  <div>
                    <input type="text" className="form-control" placeholder='Name' name='name'
                      onChange={formik.handleChange("name")}
                      onBlur={formik.handleBlur('name')}
                      value={formik.values.name}
                    />
                    <div className='error'>{formik.touched.name && formik.errors.name}</div>
                  </div>
                  <div>
                    <input type="email" className="form-control" placeholder='Email' name='email'
                      onChange={formik.handleChange("email")}
                      onBlur={formik.handleBlur('email')}
                      value={formik.values.email}
                    />
                    <div className='error'>{formik.touched.email && formik.errors.email}</div>
                  </div>
                  <div>
                    <input type="tel" className="form-control" placeholder='Mobile Number' name='mobile'
                      onChange={formik.handleChange("mobile")}
                      onBlur={formik.handleBlur('mobile')}
                      value={formik.values.mobile}
                    />
                    <div className='error'>{formik.touched.mobile && formik.errors.mobile}</div>
                  </div>
                  <div>
                    <textarea name="comment" id="" className='w-100 form-control' cols="30" rows="4" placeholder='Comments'
                      onChange={formik.handleChange("comment")}
                      onBlur={formik.handleBlur('comment')}
                      value={formik.values.comment}
                    ></textarea>
                    <div className='error'>{formik.touched.comment && formik.errors.comment}</div>
                  </div>
                  <div>
                    <button className='button border-0'>Submit</button>
                  </div>
                </form>
              </div>
              <div>
                <h3 className='contact-title mb-4'>Get In Touch With Us</h3>
                <div>
                  <ul className='ps-0'>
                    <li className='mb-3 d-flex gap-15 align-items-center'>
                      <AiOutlineHome className='fs-5' />
                      <address className='mb-0'>
                        Hno: 1st, Vo Van Ngan Street, Binh Tho, Thu Duc, TPHCM
                      </address>
                    </li>
                    <li className='mb-3 d-flex gap-15 align-items-center'>
                      <BiPhoneCall className='fs-5' />
                      <a href='tel:+84 0383106586'>(+84) 38-310-6586</a>
                    </li>
                    <li className='mb-3 d-flex gap-15 align-items-center'>
                      <AiOutlineMail className='fs-5' />
                      <a href='mailto:namtp2812@gmail.com'>namtp2812@gmail.com</a>
                    </li>
                    <li className='mb-3 d-flex gap-15 align-items-center'>
                      <BiInfoCircle className='fs-5' />
                      <p className='mb-0'>Monday - Friday 9AM - 10PM</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Contact;
