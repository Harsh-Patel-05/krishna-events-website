import { useState } from 'react'
import { CheckCircle2, Mail } from 'lucide-react'
import Button from '@/components/ui/Button'
import WhatsAppIcon from '@/components/ui/WhatsAppIcon'
import { eventTypes, site } from '@/data/site.config'
import { whatsappLink } from '@/lib/utils'

const initial = {
  name: '',
  phone: '',
  email: '',
  eventType: '',
  date: '',
  location: '',
  guests: '',
  budget: '',
  message: '',
}

function Field({ id, label, required, children }) {
  return (
    <div>
      <label htmlFor={id} className="eyebrow block text-[0.66rem] text-mist">
        {label}
        {required && <span className="text-gold"> *</span>}
      </label>
      {children}
    </div>
  )
}

function buildMessage(v) {
  const lines = [
    'Hello Krishna Events, I would like to plan an event.',
    '',
    `Name: ${v.name}`,
    `Phone: ${v.phone}`,
    v.email && `Email: ${v.email}`,
    v.eventType && `Event type: ${v.eventType}`,
    v.date && `Event date: ${v.date}`,
    v.location && `Location / city: ${v.location}`,
    v.guests && `Approx. guests: ${v.guests}`,
    v.budget && `Budget: ${v.budget}`,
    v.message && '',
    v.message && `Message: ${v.message}`,
  ]
  return lines.filter((l) => l !== false && l !== undefined && l !== null).join('\n')
}

/**
 * Frontend-only enquiry form. Nothing is stored — details are composed into a
 * prefilled WhatsApp message or email draft that the visitor sends themselves.
 */
export default function ContactForm() {
  const [values, setValues] = useState(initial)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(null)

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }))
  }

  const validate = () => {
    const next = {}
    if (!values.name.trim()) next.name = 'Please tell us your name.'
    const digits = values.phone.replace(/\D/g, '')
    if (digits.length < 10) next.phone = 'Please enter a valid phone number (at least 10 digits).'
    if (values.email && !/^\S+@\S+\.\S+$/.test(values.email)) next.email = 'That email doesn’t look right.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const send = (channel) => (e) => {
    e.preventDefault()
    if (!validate()) return
    const text = buildMessage(values)
    if (channel === 'whatsapp') {
      window.open(whatsappLink(site.contact.whatsapp, text), '_blank', 'noopener,noreferrer')
    } else {
      const subject = `Event enquiry from ${values.name}${values.eventType ? ` — ${values.eventType}` : ''}`
      window.location.href = `mailto:${site.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`
    }
    setSent(channel)
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

  return (
    <form onSubmit={send('whatsapp')} noValidate className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
      <Field id="name" label="Your name" required>
        <input id="name" name="name" autoComplete="name" value={values.name} onChange={onChange} className="field" placeholder="Full name" {...a11y('name')} />
        {error('name')}
      </Field>
      <Field id="phone" label="Phone" required>
        <input id="phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" value={values.phone} onChange={onChange} className="field" placeholder="Your phone number" {...a11y('phone')} />
        {error('phone')}
      </Field>
      <Field id="email" label="Email">
        <input id="email" name="email" type="email" autoComplete="email" value={values.email} onChange={onChange} className="field" placeholder="you@example.com" {...a11y('email')} />
        {error('email')}
      </Field>
      <Field id="eventType" label="Event type">
        <select id="eventType" name="eventType" value={values.eventType} onChange={onChange} className="field">
          <option value="">Select an event</option>
          {eventTypes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </Field>
      <Field id="date" label="Event date">
        <input id="date" name="date" type="date" value={values.date} onChange={onChange} className="field [color-scheme:dark]" />
      </Field>
      <Field id="location" label="Location / city">
        <input id="location" name="location" value={values.location} onChange={onChange} className="field" placeholder="e.g. Udaipur" />
      </Field>
      <Field id="guests" label="Approx. guests">
        <input id="guests" name="guests" inputMode="numeric" value={values.guests} onChange={onChange} className="field" placeholder="Estimated guest count" />
      </Field>
      <Field id="budget" label="Budget">
        <input id="budget" name="budget" value={values.budget} onChange={onChange} className="field" placeholder="Your approximate budget" />
      </Field>
      <div className="sm:col-span-2">
        <Field id="message" label="Tell us about your vision">
          <textarea id="message" name="message" rows={4} value={values.message} onChange={onChange} className="field resize-y" placeholder="Themes, functions, ideas — anything you’d like us to know" />
        </Field>
      </div>

      <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row">
        <Button type="submit" variant="whatsapp" size="lg" className="sm:flex-1">
          <WhatsAppIcon className="size-5" />
          Send on WhatsApp
        </Button>
        <Button type="button" variant="outline" size="lg" className="sm:flex-1" onClick={send('email')}>
          <Mail className="size-5" aria-hidden="true" />
          Send by Email
        </Button>
      </div>

      <p className="text-sm text-mist sm:col-span-2" aria-live="polite">
        {sent ? (
          <span className="flex items-start gap-2 text-ivory">
            <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-gold" aria-hidden="true" />
            {sent === 'whatsapp'
              ? 'WhatsApp has opened with your details prefilled — press send there to reach us.'
              : 'Your email app has opened with a drafted enquiry — press send there to reach us.'}
          </span>
        ) : (
          'This form opens WhatsApp or your email app with your details prefilled. Nothing is stored on this website.'
        )}
      </p>
    </form>
  )
}
