import { Form, Input } from 'antd';
import { Controller } from 'react-hook-form';

type TInputProps = {
  type: string;
  name: string;
  label?: string;
};

const NHInput = ({ type, name, label }: TInputProps) => {
  return (
    <div>
      <Controller
        name={name}
        render={({ field }) => (
          <Form.Item label={label} style={{ marginBottom: "12px" , width: "350px"}}>
            <Input
              {...field}
              type={type}
              id={name}
              size="large"
            />
          </Form.Item>
        )}
      />
    </div>
  );
};

export default NHInput;