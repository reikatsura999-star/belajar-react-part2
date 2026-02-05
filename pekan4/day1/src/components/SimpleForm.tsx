import React, { useState } from 'react';

interface FormData {
    username: string;
    age: number;
    email: string;
}

// Utility Type: Partial and Record
type FormErrors = Partial<Record<keyof FormData, string>>;

export const SimpleForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        username: '',
        age: 0,
        email: '',
    });

    const [errors, setErrors] = useState<FormErrors>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type } = e.target;

        setFormData(prev => ({
            ...prev,
            [name]: type === 'number' ? Number(value) : value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const newErrors: FormErrors = {};
        if (!formData.username) newErrors.username = 'Username is required';
        if (formData.age < 18) newErrors.age = 'Must be at least 18';
        if (!formData.email.includes('@')) newErrors.email = 'Invalid email';

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            alert(`Form Submitted: ${JSON.stringify(formData)}`);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Registration Form (Basic)</h3>
            <div>
                <label>Username: </label>
                <input name="username" value={formData.username} onChange={handleChange} />
                {errors.username && <div>{errors.username}</div>}
            </div>
            <div>
                <label>Age: </label>
                <input type="number" name="age" value={formData.age} onChange={handleChange} />
                {errors.age && <div>{errors.age}</div>}
            </div>
            <div>
                <label>Email: </label>
                <input name="email" value={formData.email} onChange={handleChange} />
                {errors.email && <div>{errors.email}</div>}
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};
