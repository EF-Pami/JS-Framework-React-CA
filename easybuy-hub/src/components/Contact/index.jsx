import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';
import * as S from "../Styles/Contact.styles";

const schema = yup
    .object({
        fullName: yup
            .string()
            .min(3, 'full name should be minimum 3 characters.')
            .required('Please enter your full name'),
        email: yup
            .string()
            .email('email address must be valid')
            .required('Please enter valid email'),
        subject: yup
            .string()
            .min(3, 'subject must be 3 characters or higher')
            .required('Please enter subject'),
        body: yup
            .string()
            .min(3, 'body must 3 characters or higher')
            .required('Please enter message'),
    })
    .required();

export default function ContactForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(schema),
    });

    function onSubmit() {
        reset();
    }

    return (
        <S.styledWrapper>
            <h1>Contact Form</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Full Name</label>
                <input {...register('fullName')} />
                <p>{errors.fullName?.message}</p>
                <label>Email</label>
                <input {...register('email')} />
                <p>{errors.email?.message}</p>
                <label>Subject</label>
                <input {...register('subject')} />
                <p>{errors.email?.message}</p>
                <label>Message</label>
                <input className="body" {...register('body')} />
                <p>{errors.body?.message}</p>
                <button type="submit">Submit</button>
            </form>
        </S.styledWrapper>
    )
}