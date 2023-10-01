import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { registerThunk } from 'redux/auth/operations';
import { styled } from 'styled-components';

export const Register = () => {
  const { handleSubmit, register } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submit = data => {
    dispatch(registerThunk(data))
      .unwrap()
      .then(res => {
        console.log(res);
        toast.success(`Welcome! ${res.user.name}`);
        navigate('/contacts');
      })
      .catch(() => toast.error('Data is not valid'));
  };

  return (
    <StyledSection>
      <StyledForm onSubmit={handleSubmit(submit)}>
        <FormTitle>Register</FormTitle>
        <StyledLabel>
          Name
          <input {...register('name')} />
        </StyledLabel>
        <StyledLabel>
          Email
          <input {...register('email')} />
        </StyledLabel>
        <StyledLabel>
          Password
          <input {...register('password')} />
        </StyledLabel>
        <button>Register</button>
        <span>
          You already have account? Let's <Link to="/login">sign in!</Link>
        </span>
      </StyledForm>
    </StyledSection>
  );
};

export const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;

export const StyledForm = styled.form`
  /* width: 250px; */
  display: flex;
  gap: 20px;
  flex-direction: column;
  background-color: #edf4f2;
  padding: 20px 10px;
  border-radius: 5px;
`;

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
`;

export const FormTitle = styled.h2`
  text-align: center;
`;
