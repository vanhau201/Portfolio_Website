import "./Contact.css"
import { IoLocationSharp } from "react-icons/io5"
import { FaPhoneAlt } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { useEffect, useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Contact = () => {

    const [formValues, setFormValues] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    })
    const [formErrors, setFormErrors] = useState({})
    const [submit, setSubmit] = useState(false)
    const formRef = useRef()

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormValues({ ...formValues, [name]: value })
    }

    const validate = (values) => {
        const errors = {}
        const pattern = /^[a-z0-9]+\.*[a-z0-9]+@[a-z]+\.[a-z]+$/;
        if (!values.name) {
            errors.name = "Name is required !"
        }
        if (!values.email) {
            errors.email = "Email is required !"
        }
        else if (!pattern.test(values.email.trim())) {
            errors.email = "Invalid email !"
        }

        if (!values.subject) {
            errors.subject = "Subject is required !"
        }
        if (!values.message) {
            errors.message = "Message is required !"
        }

        return errors

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setFormErrors(validate(formValues))
        setSubmit(true)
    }

    useEffect(() => {
        if (submit && Object.keys(formErrors).length === 0) {

            toast.success("Submitted successfully !")
            emailjs.sendForm('service_n5zwuw8', 'template_3mmwzjj', formRef.current, '0I9M9MScnINl9Nwzs')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
            setSubmit(false)
            setFormValues({
                name: "",
                email: "",
                subject: "",
                message: ""
            })

        }
    }, [formErrors, submit])

    return (
        <div className='contact' id='contact'>
            <div className='container'>
                <div className='contact__header'>
                    <h2>Contact Me</h2>
                </div>
                <div className='contact__info row'>
                    <div className='col-md-12 col-lg-4'>
                        <div className='contact__info-details'>
                            <IoLocationSharp className='contact__info-icons' />
                            <div className='contact__info-content'>
                                <h5>Address</h5>
                                <p>Go Vap, Ho Chi Minh</p>
                            </div>
                        </div >
                    </div>
                    <div className='col-md-12 col-lg-4'>
                        <div className='contact__info-details'>
                            <FaPhoneAlt className='contact__info-icons' />
                            <div className='contact__info-content'>
                                <h5>Phone</h5>
                                <p>0326031916</p>
                            </div>
                        </div >
                    </div>
                    <div className='col-md-12 col-lg-4'>
                        <div className='contact__info-details'>
                            <FiMail className='contact__info-icons' />
                            <div className='contact__info-content'>
                                <h5>Email</h5>
                                <p>vanhau200100@gmail.com</p>
                            </div>
                        </div >
                    </div>

                </div>
                <div className='contact__form'>
                    <form action="" ref={formRef} onSubmit={handleSubmit}>
                        <div className='row'>
                            <div className='col-md-12 col-lg-6'>
                                <input type="text" placeholder='Your Name' name="name" value={formValues.name} onChange={handleChange} />
                                <p>{formErrors.name}</p>
                            </div>
                            <div className='col-md-12 col-lg-6'>
                                <input type="text" placeholder='Your Email' name="email" value={formValues.email} onChange={handleChange} />
                                <p>{formErrors.email}</p>
                            </div>
                            <div className='col-md-12 col-lg-12'>
                                <input type="text" placeholder='Your Subject' name="subject" value={formValues.subject} onChange={handleChange} />
                                <p>{formErrors.subject}</p>
                            </div>
                            <div className='col-md-12 col-lg-12'>
                                <textarea id="" cols="30" rows="5" placeholder="Your Message" name="message" value={formValues.message} onChange={handleChange}></textarea>
                                <p>{formErrors.message}</p>
                            </div>

                        </div>
                        <ToastContainer />
                        <button className="btn-submit" type="submit">Send Message</button>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Contact