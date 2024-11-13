import React from 'react'
import { FormControl, FormField, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { Control, FieldPath } from 'react-hook-form'
import { z } from 'zod'
import { authFormSchema } from '@/lib/utils'

// Define the type based on the schema directly
type FormSchemaType = z.infer<ReturnType<typeof authFormSchema>>;

interface CustomInput {
  control: Control<FormSchemaType>
  name: FieldPath<FormSchemaType>
  label: string
  placeholder: string
}

export default function CustomInput({ control, name, label, placeholder }: CustomInput) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="form-item">
          <FormLabel className="form-label">{label}</FormLabel>
          <div className="flex w-full flex-col">
            <FormControl>
              <Input
                placeholder={placeholder}
                className="input-class"
                type={name === 'password' ? 'password' : 'text'}
                {...field}
              />
            </FormControl>
            <FormMessage className="form-message mt-2" />
          </div>
        </div>
     )}
/>
)
}