import React from 'react';
import { CardWrapper } from './card-wrapper';

export const SignInForm = () => {
  return (
    <CardWrapper
      headerLabel="Welcome back"
      backButtonLabel="Don't have an account?"
      backButtonHref="/auth/sign-up"
      showSocial={true}
    >
      Sign-In Form
    </CardWrapper>
  );
};
