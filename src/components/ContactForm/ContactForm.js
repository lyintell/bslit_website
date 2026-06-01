'use client';

import { useState } from 'react';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    receiveUpdates: false,
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const mailtoLink = `mailto:info@bslit.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
  }

  return (
    <div className={styles.wrapper}>
      <p className={styles.intro}>
        <strong>Contact us:</strong>
      </p>
      <p className={styles.subIntro}>For any inquiry send us an email</p>

      {submitted ? (
        <p className={styles.confirmation}>Thank you! Your email client should open shortly.</p>
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

          <button type="submit" className={styles.submitButton}>
            Submit
          </button>
        </form>
      )}
    </div>
  );
}
