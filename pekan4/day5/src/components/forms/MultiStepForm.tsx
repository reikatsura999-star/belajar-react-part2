import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

const combinedSchema = z.object({
    firstName: z.string().min(2, "First name is too short"),
    lastName: z.string().min(2, "Last name is too short"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(10, "Invalid phone number"),
    address: z.string().min(5, "Address must be at least 5 characters"),
    city: z.string().min(2, "City is required"),
    zipCode: z.string().min(5, "Zip code is required"),
})

type FormData = z.infer<typeof combinedSchema>

export function MultiStepForm() {
    const [step, setStep] = useState(1)

    const { register, handleSubmit, trigger, formState: { errors } } = useForm<FormData>({
        resolver: zodResolver(combinedSchema),
        mode: "onBlur",
    })

    const nextStep = async () => {
        let fields: (keyof FormData)[] = []
        if (step === 1) fields = ["firstName", "lastName"]
        if (step === 2) fields = ["email", "phone"]

        const isValid = await trigger(fields)
        if (isValid) setStep(s => s + 1)
    }

    const prevStep = () => setStep(s => s - 1)

    const onSubmit = (data: FormData) => {
        console.log("Submit:", data)
        alert("Form Submitted!")
    }

    return (
        <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
            <h2>Step {step} of 3</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                {step === 1 && (
                    <div>
                        <div>
                            <label>First Name:</label><br />
                            <input {...register("firstName")} placeholder="First Name" />
                            {errors.firstName && <p style={{ color: 'red' }}>{errors.firstName.message}</p>}
                        </div>
                        <div>
                            <label>Last Name:</label><br />
                            <input {...register("lastName")} placeholder="Last Name" />
                            {errors.lastName && <p style={{ color: 'red' }}>{errors.lastName.message}</p>}
                        </div>
                    </div>
                )}

                {step === 2 && (
                    <div>
                        <div>
                            <label>Email:</label><br />
                            <input {...register("email")} placeholder="Email" />
                            {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
                        </div>
                        <div>
                            <label>Phone:</label><br />
                            <input {...register("phone")} placeholder="Phone" />
                            {errors.phone && <p style={{ color: 'red' }}>{errors.phone.message}</p>}
                        </div>
                    </div>
                )}

                {step === 3 && (
                    <div>
                        <div>
                            <label>Address:</label><br />
                            <input {...register("address")} placeholder="Address" />
                            {errors.address && <p style={{ color: 'red' }}>{errors.address.message}</p>}
                        </div>
                        <div>
                            <label>City:</label><br />
                            <input {...register("city")} placeholder="City" />
                            {errors.city && <p style={{ color: 'red' }}>{errors.city.message}</p>}
                        </div>
                        <div>
                            <label>Zip Code:</label><br />
                            <input {...register("zipCode")} placeholder="Zip Code" />
                            {errors.zipCode && <p style={{ color: 'red' }}>{errors.zipCode.message}</p>}
                        </div>
                    </div>
                )}

                <div style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
                    {step > 1 && <button type="button" onClick={prevStep}>Back</button>}
                    {step < 3 ? (
                        <button type="button" onClick={nextStep}>Next</button>
                    ) : (
                        <button type="submit">Submit</button>
                    )}
                </div>
            </form>
        </div>
    )
}
