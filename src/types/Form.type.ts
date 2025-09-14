import type { FieldErrors,  UseFormHandleSubmit, UseFormRegister} from 'react-hook-form';
import type { MortgageForm } from '../schema/zodSchema';

export type FormProps = {
  register: UseFormRegister<MortgageForm>
  handleSubmit: UseFormHandleSubmit<MortgageForm>,
  errors?: FieldErrors<MortgageForm>,
  ShowResults: (valor:boolean) => void,
}
