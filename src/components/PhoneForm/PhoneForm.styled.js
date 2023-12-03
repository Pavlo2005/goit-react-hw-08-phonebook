import styled from 'styled-components';
import { Form, ErrorMessage, Field } from 'formik';
import { FaAt, FaPhone,FaUnlock,FaUser } from "react-icons/fa";

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(3)};
  max-width: 300px;
`;

export const ErrMessage = styled(ErrorMessage)`
  color: ${p => p.theme.colors.error};
  font-size: 14px;
`;

export const StyledLabel = styled.label`
  position: relative;
`

export const StyledField = styled(Field)`
  border-radius: 5px;
  margin-left: ${p => p.theme.spacing(2)};
  padding-left: ${p => p.theme.spacing(6)};
`

export const IconUser = styled(FaUser)`
  position: absolute;
  width: 16px;
  top: 4px;
  left: 56px;
`

export const IconPhone = styled(FaPhone)`
  position: absolute;
  width: 16px;
  top: 4px;
  left: 72px;
`

export const IconAt = styled(FaAt)`
  position: absolute;
  width: 16px;
  top: 4px;
  left: 52px;
`

export const IconUnlock = styled(FaUnlock)`
  position: absolute;
  width: 16px;
  top: 4px;
  left: 80px;
`

export const SubmitButton = styled.button`
  border-radius: 5px;
  padding: 4px;
  cursor: pointer;
  box-shadow: 4px 4px 8px ${p => p.theme.colors.grayShadow};
`