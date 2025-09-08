import type { FieldErrors, UseFormRegister } from 'react-hook-form'
import type { MortgageForm } from '../schema/zodSchema'
import type { mortType } from './name.glocal.type'

export type InputProps = {
    register: UseFormRegister<MortgageForm>,
    error?: FieldErrors<MortgageForm>,
    name: mortType,
    title: string,
    subText: string,
    direction: string
}