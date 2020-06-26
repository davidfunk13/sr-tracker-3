
import { useState } from "react";
// get rid of this any. 
const useForm: any = (formKeys: { [key: string]: any }) => {
    const [formData, setFormData] = useState(formKeys);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e) {
            console.log('no event passed');

            return setFormData(formData);
        }

        setFormData({ ...formData, [e.target.name as keyof typeof formKeys]: e.target.value });
    }

    return [formData, handleInputChange];
};

export default useForm;