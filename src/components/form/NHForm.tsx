import { Form } from "antd";
import { ReactNode } from "react";

import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

type TFormProps = {
  onSubmit: SubmitHandler<FieldValues>;
  children: ReactNode;
};

const NHForm = ({ onSubmit, children }: TFormProps) => {
  const methods = useForm();

  const submit: SubmitHandler<FieldValues> = (data) => {
    console.log(data)
    onSubmit(data);
    methods.reset();
  };

  return (
    <FormProvider {...methods}>
      <Form layout="vertical"  onFinish={methods.handleSubmit(submit)}>
        {children}
      </Form>
    </FormProvider>
  );
};

export default NHForm;
