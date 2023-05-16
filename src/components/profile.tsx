import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Password } from '@/stories/Inputs.stories';

type FormData = {
  name: string;
  email: string;
};

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
});

type Props = {
  name: string;
  email: string;
  onSubmit: (data: FormData) => void;
};

const ProfilePage: React.FC<Props> = ({ name, email, onSubmit }) => {
  const { register, handleSubmit, formState } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">Customer_id<br/></label>
      <input type="text" {...register('name')} defaultValue={name} /><br/>
      {formState.errors.name && <span>{formState.errors.name.message}</span>}<br/>

      <label htmlFor="email">Customer_email<br/></label>
      <input type="email" {...register('email')} defaultValue={email} /><br/>
      {formState.errors.email && <span>{formState.errors.email.message}</span>}<br/>
      <label htmlFor="name">Password<br/></label>
      <input type="text" {...register('name')} defaultValue={name} /><br/>
      {formState.errors.name && <span>{formState.errors.name.message}</span>}<br/>

    
      <button type="submit">Login</button>
    </form>
  );
};

export default ProfilePage;