import { useState } from 'react'
import { CheckCircle2, Loader2 } from 'lucide-react'
import Button from '@/components/ui/Button'
import { consultationTimes, eventTypes } from '@/data/site.config'

const initial = {
  name: '',
  email: '',
  phone: '',
  eventType: '',
  preferredDate: '',
  preferredTime: '',
  message: '',
}

function Field({ id, label, required, children }) {
  return (
    <div>
      <label htmlFor={id} className="form-label">
        {label}
        {required && <span className="text-gold"> *</span>}
      </label>
      {children}
    </div>
  )
}

/**
 * Frontend-only consultation form.
 * Frontend-only flow — visitor confirms the consultation via WhatsApp or phone.
 */
export default function ConsultationForm() {
  const [values, setValues] = useState(initial)
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }))
  }

  const validate = () => {
    const next = {}
    if (!values.name.trim()) next.name = 'Please enter your full name.'
    if (!values.email.trim()) next.email = 'Email is required.'
    else if (!/^\S+@\S+\.\S+$/.test(values.email)) next.email = 'Please enter a valid email address.'
    const digits = values.phone.replace(/\D/g, '')
    if (digits.length < 10) next.phone = 'Please enter a valid phone number (at least 10 digits).'
    if (!values.eventType) next.eventType = 'Please select a wedding type.'
    if (!values.preferredDate) next.preferredDate = 'Please choose a preferred date.'
    if (!values.preferredTime) next.preferredTime = 'Please choose a preferred time.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return
    setLoading(true)
    // Simulated frontend-only delay — no backend call.
    await new Promise((r) => setTimeout(r, 900))
    setLoading(false)
    setSuccess(true)
  }

  const error = (key) =>
    errors[key] ? (
      <p id={`${key}-error`} role="alert" className="mt-1 text-sm text-gold-soft">
        {errors[key]}
      </p>
    ) : null

  const a11y = (key) => ({
    'aria-invalid': errors[key] ? 'true' : undefined,
    'aria-describedby': errors[key] ? `${key}-error` : undefined,
  })

  if (success) {
    return (
      <div className="border border-gold/30 bg-surface p-8 text-center" role="status">
        <CheckCircle2 className="mx-auto size-10 text-gold" aria-hidden="true" />
        <h3 className="mt-4 font-display text-2xl text-ivory">Thanks — you’re almost there</h3>
        <p className="mx-auto mt-3 max-w-md text-sm text-mist">
          This form helps us prepare for your call. Please WhatsApp or phone Krishna Events to confirm
          your consultation and share any extra details.
        </p>
        <Button
          type="button"
          variant="outline"
          className="mt-6"
          onClick={() => {
            setSuccess(false)
            setValues(initial)
          }}
        >
          Submit another request
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
      <Field id="c-name" label="Full name" required>
        <input
          id="c-name"
          name="name"
          autoComplete="name"
          value={values.name}
          onChange={onChange}
          className="field"
          placeholder="Your full name"
          {...a11y('name')}
        />
        {error('name')}
      </Field>
      <Field id="c-email" label="Email address" required>
        <input
          id="c-email"
          name="email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={onChange}
          className="field"
          placeholder="you@example.com"
          {...a11y('email')}
        />
        {error('email')}
      </Field>
      <Field id="c-phone" label="Phone number" required>
        <input
          id="c-phone"
          name="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          value={values.phone}
          onChange={onChange}
          className="field"
          placeholder="Your phone number"
          {...a11y('phone')}
        />
        {error('phone')}
      </Field>
      <Field id="c-eventType" label="Wedding type" required>
        <select
          id="c-eventType"
          name="eventType"
          value={values.eventType}
          onChange={onChange}
          className="field"
          {...a11y('eventType')}
        >
          <option value="">Select wedding type</option>
          {eventTypes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
        {error('eventType')}
      </Field>
      <Field id="c-date" label="Preferred date" required>
        <input
          id="c-date"
          name="preferredDate"
          type="date"
          value={values.preferredDate}
          onChange={onChange}
          className="field [color-scheme:dark]"
          {...a11y('preferredDate')}
        />
        {error('preferredDate')}
      </Field>
      <Field id="c-time" label="Preferred consultation time" required>
        <select
          id="c-time"
          name="preferredTime"
          value={values.preferredTime}
          onChange={onChange}
          className="field"
          {...a11y('preferredTime')}
        >
          <option value="">Select a time</option>
          {consultationTimes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
        {error('preferredTime')}
      </Field>
      <div className="sm:col-span-2">
        <Field id="c-message" label="Message">
          <textarea
            id="c-message"
            name="message"
            rows={4}
            value={values.message}
            onChange={onChange}
            className="field resize-y"
            placeholder="Share a brief note about your wedding"
          />
        </Field>
      </div>

      <div className="sm:col-span-2">
        <Button type="submit" variant="gold" size="lg" disabled={loading} className="min-w-[12rem]">
          {loading ? (
            <>
              <Loader2 className="size-5 animate-spin" aria-hidden="true" />
              Preparing…
            </>
          ) : (
            'Request consultation'
          )}
        </Button>
        <p className="mt-4 text-sm text-mist">
          Prefer a quicker reply? WhatsApp or call us after submitting — we’ll confirm your consultation personally.
        </p>
      </div>
    </form>
  )
}
