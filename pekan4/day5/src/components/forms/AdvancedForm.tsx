import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

const schema = z.object({
    title: z.string().min(5, "Title min 5 chars"),
    file: z.any()
        .refine(files => files?.length > 0, "File is required")
        .refine(files => files?.[0]?.size <= 5000000, "Max size 5MB")
})

type FormData = z.infer<typeof schema>

export function AdvancedForm() {
    const [preview, setPreview] = useState<string | null>(null)
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: zodResolver(schema)
    })

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            setPreview(URL.createObjectURL(file))
        }
    }

    const onSubmit = (data: FormData) => {
        console.log("File Data:", data.file[0].name)
        alert("Post Uploaded!")
    }

    return (
        <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
            <h2>Advanced Form (File Upload)</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Title:</label><br />
                    <input {...register("title")} />
                    {errors.title && <p style={{ color: 'red' }}>{errors.title.message}</p>}
                </div>

                <div style={{ marginTop: '10px' }}>
                    <label>Upload Image:</label><br />
                    <input
                        type="file"
                        {...register("file")}
                        onChange={(e) => {
                            register("file").onChange(e)
                            handleFileChange(e)
                        }}
                    />
                    {errors.file && <p style={{ color: 'red' }}>{errors.file.message as string}</p>}
                </div>

                {preview && (
                    <div style={{ marginTop: '10px' }}>
                        <p>Preview:</p>
                        <img src={preview} alt="preview" style={{ maxWidth: '200px', display: 'block' }} />
                    </div>
                )}

                <button type="submit" style={{ marginTop: '20px' }}>Upload Post</button>
            </form>
        </div>
    )
}
