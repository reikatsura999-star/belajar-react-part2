import { useForm, useFieldArray } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

const memberSchema = z.object({
    name: z.string().min(2, "Name required"),
    email: z.string().email("Invalid email"),
})

const schema = z.object({
    projectName: z.string().min(3, "Project name required"),
    team: z.array(memberSchema).min(1, "At least 1 member"),
})

type FormData = z.infer<typeof schema>

export function DynamicForm() {
    const { register, control, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: zodResolver(schema),
        defaultValues: { team: [{ name: "", email: "" }] }
    })

    const { fields, append, remove } = useFieldArray({
        control,
        name: "team"
    })

    const onSubmit = (data: FormData) => {
        console.log(data)
        alert("Project Created!")
    }

    return (
        <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
            <h2>Dynamic Team Form</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Project Name:</label><br />
                    <input {...register("projectName")} />
                    {errors.projectName && <p style={{ color: 'red' }}>{errors.projectName.message}</p>}
                </div>

                <h3>Team Members</h3>
                {fields.map((field, index) => (
                    <div key={field.id} style={{ border: '1px solid #eee', margin: '10px 0', padding: '10px' }}>
                        <div>
                            <label>Name:</label>
                            <input {...register(`team.${index}.name`)} />
                            {errors.team?.[index]?.name && <p style={{ color: 'red' }}>{errors.team[index].name.message}</p>}
                        </div>
                        <div>
                            <label>Email:</label>
                            <input {...register(`team.${index}.email`)} />
                            {errors.team?.[index]?.email && <p style={{ color: 'red' }}>{errors.team[index].email.message}</p>}
                        </div>
                        {fields.length > 1 && (
                            <button type="button" onClick={() => remove(index)}>Remove Member</button>
                        )}
                    </div>
                ))}

                <button type="button" onClick={() => append({ name: "", email: "" })}>Add Member</button>
                <br /><br />
                <button type="submit">Create Project</button>
            </form>
        </div>
    )
}
