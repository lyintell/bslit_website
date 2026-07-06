'use client';

import { useState } from 'react';
import styles from './ContactForm.module.css';

const WEB3FORMS_ACCESS_KEY = 'a3c3a0c0-f212-4993-b3f3-40f1ed017c55';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    receiveUpdates: false,
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError(false);

    const body = {
      access_key: WEB3FORMS_ACCESS_KEY,
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
      receive_updates: formData.receiveUpdates ? 'Yes' : 'No',
    };

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={styles.wrapper}>
      <p className={styles.intro}>
        <strong>Contact us:</strong>
      </p>
      <p className={styles.subIntro}>For any inquiry, please fill out the form below.</p>

      {submitted ? (
        <p className={styles.confirmation}>Thank you! We have received your message and will get back to you shortly.</p>
      ) : (
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.field}>
            <label className={styles.label}>
              Name: <span className={styles.required}>*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter text here"
              required
              className={styles.input}
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label}>
              Email: <span className={styles.required}>*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email address"
              required
              className={styles.input}
            />
          </div>

          <div className={styles.checkboxField}>
            <input
              type="checkbox"
              name="receiveUpdates"
              id="receiveUpdates"
              checked={formData.receiveUpdates}
              onChange={handleChange}
              className={styles.checkbox}
            />
            <label htmlFor="receiveUpdates" className={styles.checkboxLabel}>
              Check here to receive email updates
            </label>
          </div>

          <div className={styles.field}>
            <label className={styles.label}>
              Subject: <span className={styles.required}>*</span>
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Enter text here"
              required
              className={styles.input}
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label}>
              Message: <span className={styles.required}>*</span>
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your comment here"
              required
              className={styles.textarea}
              rows={5}
            />
          </div>

          <button type="submit" className={styles.submitButton} disabled={loading}>
            {loading ? 'Sending...' : 'Submit'}
          </button>
          {error && (
            <p className={styles.errorMessage}>Something went wrong. Please try again.</p>
          )}
        </form>
      )}
    </div>
  );
}
