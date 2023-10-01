import { useField } from "formik";

export const TextInput = ({ ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div>
      <input
        {...field}
        {...props}
        
        className="bg-transparent p-1 text-xl border rounded-md w-96"
      />
    </div>
  );
};
