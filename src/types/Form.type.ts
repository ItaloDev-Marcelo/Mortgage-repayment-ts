import type { FieldErrors, UseFormHandleSubmit, UseFormRegister, UseFormReset } from 'react-hook-form';
import type { MortgageForm } from '../schema/zodSchema';

export type FormProps = {
  register: UseFormRegister<MortgageForm>
  handleSubmit: UseFormHandleSubmit<MortgageForm>,
  errors?: FieldErrors<MortgageForm>,
  reset: UseFormReset<MortgageForm>,
  ShowResults: () => void
}
