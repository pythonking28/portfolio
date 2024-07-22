import * as React from 'react';

interface EmailTemplateProps {
  message: string;
  name: string;
  email: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  message,
  name,
  email
}) => (
  <div>
    <h1>{name}</h1>
    <h3>{email}</h3>
    <p>{message}</p>
  </div>
);
