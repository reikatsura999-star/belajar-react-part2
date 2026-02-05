import { BasicForm } from "./components/forms/BasicForm"
import { MultiStepForm } from "./components/forms/MultiStepForm"
import { DynamicForm } from "./components/forms/DynamicForm"
import { AdvancedForm } from "./components/forms/AdvancedForm"

export default function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center' }}>Day 5: React Hook Form Tasks</h1>

      <section style={{ marginBottom: '40px' }}>
        <h3>1. Basic Registration Form</h3>
        <BasicForm />
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h3>2. Multi-Step Checkout Form</h3>
        <MultiStepForm />
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h3>3. Dynamic Team Form</h3>
        <DynamicForm />
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h3>4. Advanced Form (File Upload)</h3>
        <AdvancedForm />
      </section>

      <footer style={{ marginTop: '50px', borderTop: '1px solid #eee', paddingTop: '20px', textAlign: 'center', color: '#666' }}>
        Day 5 Assignment - Form Validation & Logic
      </footer>
    </div>
  )
}