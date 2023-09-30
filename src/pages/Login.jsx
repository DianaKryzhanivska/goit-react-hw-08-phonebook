import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/auth/operations';
import { toast } from 'react-toastify';

export const Login = () => {
  const { handleSubmit, register } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submit = data => {
    dispatch(loginThunk(data))
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
        <FormTitle>Login</FormTitle>
        <StyledLabel>
          Email
          <input {...register('email')} />
        </StyledLabel>
        <StyledLabel>
          Password
          <input {...register('password')} />
        </StyledLabel>
        <input type="submit" />
        <span>
          Don't have an account? Let's <Link to="/register">create it</Link>
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
