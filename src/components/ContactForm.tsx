'use client';
import { useId, useRef, useState } from 'react';
import { trackEvent } from '../../lib/analytics';

type Props = { variant?: 'home' | 'locations'; className?: string };
const emptyForm = { name: '', email: '', phone: '', subject: '', message: '' };
export const ContactForm = ({ variant = 'home', className = '' }: Props) => {
  const id = useId();
  const [data, setData] = useState(emptyForm);
  const [consent, setConsent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const inFlight = useRef(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');
  const update = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setData(current => ({ ...current, [event.target.name]: event.target.value }));
  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (inFlight.current) return;
    if (!consent) { setStatus('error'); setError('Please confirm your text-message consent, or call (903) 707-6275 to contact our team.'); return; }
    inFlight.current = true; setSubmitting(true); setStatus('idle'); setError('');
    trackEvent('form_submit_attempt', variant);
    try {
      const response = await fetch('/api/contact-form', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...data, consent }) });
      const result = await response.json();
      if (!response.ok || result.success !== true) throw new Error('Submission failed');
      trackEvent('generate_lead', variant);
      window.fbq?.('track', 'Lead', { content_name: 'Contact Form Submission', content_category: 'Form' });
      setStatus('success'); setData(emptyForm); setConsent(false);
    } catch {
      setStatus('error'); setError('Your request could not be sent. Please try again or call (903) 707-6275.');
    } finally { inFlight.current = false; setSubmitting(false); }
  }
  const fields = [
    { name: 'name', label: 'Name', type: 'text', autoComplete: 'name', required: true },
    { name: 'email', label: 'Email', type: 'email', autoComplete: 'email', required: true },
    { name: 'phone', label: 'Phone', type: 'tel', autoComplete: 'tel', required: true },
    { name: 'subject', label: 'Subject (optional)', type: 'text', autoComplete: 'off', required: false },
  ] as const;
  return <div className={`form-block w-form ${className}`}>
    <form onSubmit={submit} className="form-minimum-width" aria-label="Request a call" aria-busy={submitting}>
      <div className="w-layout-grid appointment-grid-wrap">
        {fields.map(field => <div className="input-block" key={field.name}>
          <label className="repair-field-label" htmlFor={`${id}-${field.name}`}>{field.label}</label>
          <input id={`${id}-${field.name}`} name={field.name} type={field.type} autoComplete={field.autoComplete} required={field.required} maxLength={256} className="form-input-field border-field w-input" value={data[field.name]} onChange={update} disabled={submitting} />
        </div>)}
      </div>
      {variant === 'locations' && <div className="input-block">
        <label className="repair-field-label" htmlFor={`${id}-message`}>How can we help? (optional)</label>
        <textarea id={`${id}-message`} name="message" maxLength={5000} className="form-input-field border-field w-input" value={data.message} onChange={update} disabled={submitting} />
      </div>}
      <label className="w-checkbox checkbox-field-2" style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
        <input type="checkbox" name="consent" checked={consent} onChange={event => setConsent(event.target.checked)} disabled={submitting} required style={{ flexShrink: 0, marginTop: 4 }} />
        <span>By providing your phone number, you agree to receive text messages from Blanchard Orthodontics. Message and data rates may apply. Message frequency varies. Reply STOP to opt-out.</span>
      </label>
      <button className="button w-button" type="submit" disabled={submitting}>{submitting ? 'Sending…' : 'Request a call'}</button>
      <div aria-live="polite" aria-atomic="true">
        {status === 'success' && <p className="form-message success" role="status">Thank you! Your request has been sent to our team. We’ll be in touch to help you schedule.</p>}
        {status === 'error' && <p className="form-message error" role="alert">{error} <a href="tel:+19037076275">Call our team</a>.</p>}
      </div>
    </form>
  </div>;
};
