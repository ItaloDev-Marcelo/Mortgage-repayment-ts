import type { UseFormRegister } from 'react-hook-form'
import type { MortgageForm } from '../schema/zodSchema'
import type { mortType } from './name.glocal.type'

export type InputRadio = {
    value: string,
    register: UseFormRegister<MortgageForm>
    name: mortType
}