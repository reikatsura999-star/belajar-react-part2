import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

const schema = z.object({
    username: z.string().min(2, "Username min 2 chars"),
    email: z.string().email("Invalid email"),
    password: z.string().min(8, "Password min 8 chars"),
    confirmPassword: z.string().min(8, "Confirm password min 8 chars"),
}).refine(data => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"]
})

type FormData = z.infer<typeof schema>

export function BasicForm() {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: zodResolver(schema)
    })

    const onSubmit = (data: FormData) => {
        console.log(data)
        alert("Registered!")
    }

    return (
        <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
            <h2>Registration Form</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Username:</label><br />
                    <input {...register("username")} />
                    {errors.username && <p style={{ color: 'red' }}>{errors.username.message}</p>}
                </div>
                <div>
                    <label>Email:</label><br />
                    <input {...register("email")} />
                    {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
                </div>
                <div>
                    <label>Password:</label><br />
                    <input type="password" {...register("password")} />
                    {errors.password && <p style={{ color: 'red' }}>{errors.password.message}</p>}
                </div>
                <div>
                    <label>Confirm Password:</label><br />
                    <input type="password" {...register("confirmPassword")} />
                    {errors.confirmPassword && <p style={{ color: 'red' }}>{errors.confirmPassword.message}</p>}
                </div>
                <button type="submit" style={{ marginTop: '10px' }}>Register</button>
            </form>
        </div>
    )
}
