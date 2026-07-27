import { useState } from 'react'
import { CheckCircleIcon, UploadIcon, XIcon } from '../icons'
import { registration } from '../data/content'

function Field({ label, ...props }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-[12px] font-semibold uppercase tracking-wide text-[#5d7088]">{label}</span>
      <input
        {...props}
        className="rounded-[8px] border border-[#d9e2ec] px-3 py-2.5 text-[14px] text-[#191919] placeholder:text-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#223f7f]/20 focus:border-[#223f7f] transition-colors"
      />
    </label>
  )
}

function RadioPills({ label, options, value, onChange }) {
  return (
    <div className="flex flex-col gap-1.5">
      <span className="text-[12px] font-semibold uppercase tracking-wide text-[#5d7088]">{label}</span>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => {
          const active = option.key === value
          return (
            <button
              key={option.key}
              type="button"
              onClick={() => onChange(option.key)}
              aria-pressed={active}
              className={`flex items-center gap-2 rounded-full border px-4 py-2 text-[13px] font-medium transition-colors ${
                active ? 'border-[#223f7f] bg-[#eef2f7] text-[#223f7f]' : 'border-[#d9e2ec] text-[#475569]'
              }`}
            >
              <span
                className={`flex size-[14px] shrink-0 items-center justify-center rounded-full border-2 ${
                  active ? 'border-[#223f7f]' : 'border-[#94a3b8]'
                }`}
              >
                {active && <span className="size-[7px] rounded-full bg-[#223f7f]" />}
              </span>
              {option.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}

function PaymentModal({ selected, onClose }) {
  const [screenshot, setScreenshot] = useState(null)
  const [screenshotUrl, setScreenshotUrl] = useState(null)
  const [error, setError] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleFileChange = (e) => {
    const file = e.target.files?.[0]
    if (!file) return
    if (screenshotUrl) URL.revokeObjectURL(screenshotUrl)
    setScreenshot(file)
    setScreenshotUrl(URL.createObjectURL(file))
    setError('')
  }

  const handleSubmit = () => {
    if (!screenshot) {
      setError('Please upload your payment screenshot to continue.')
      return
    }
    window.open(registration.link, '_blank', 'noopener,noreferrer')
    setSubmitted(true)
  }

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-[#0f172a]/60 p-4" onClick={onClose}>
      <div
        className="w-full max-w-[420px] bg-white rounded-[16px] p-6 flex flex-col gap-5 relative shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 text-[#94a3b8] hover:text-[#223f7f] transition-colors"
        >
          <XIcon />
        </button>

        {!submitted ? (
          <>
            <div className="flex flex-col gap-1 pr-6">
              <h3 className="text-[#223f7f] text-[20px] font-bold leading-normal">{registration.modalTitle}</h3>
              <p className="text-[#5d7088] text-[13px]">
                {selected.label}
                {selected.fee != null ? ` registration — ₹${selected.fee}.00` : ' registration'}
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="size-[110px] rounded-[10px] border border-[#d8e2f0] bg-white p-2 shrink-0">
                <img
                  src={registration.qrImage}
                  alt="Scan QR code to pay registration fee"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-[13px] text-[#191919] leading-snug min-w-0">
                <p className="text-[#5d7088]">Scan to pay via UPI</p>
                <p className="font-semibold break-all">{registration.upiId}</p>
              </div>
            </div>

            <label className="flex flex-col gap-1.5">
              <span className="text-[12px] font-semibold uppercase tracking-wide text-[#5d7088]">
                Upload Payment Screenshot
              </span>
              <div className="rounded-[10px] border-2 border-dashed border-[#d9e2ec] hover:border-[#223f7f]/40 transition-colors p-4 flex flex-col items-center justify-center gap-2 text-center cursor-pointer relative">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
                {screenshotUrl ? (
                  <img
                    src={screenshotUrl}
                    alt="Payment screenshot preview"
                    className="max-h-[140px] rounded-[6px] object-contain"
                  />
                ) : (
                  <>
                    <UploadIcon className="text-[#94a3b8]" />
                    <p className="text-[13px] text-[#5d7088]">Click to upload a screenshot</p>
                  </>
                )}
              </div>
              {screenshot && <span className="text-[12px] text-[#5d7088] break-all">{screenshot.name}</span>}
            </label>

            {error && <p className="text-[12px] text-[#b91c1c]">{error}</p>}

            <button
              type="button"
              onClick={handleSubmit}
              className="inline-flex items-center justify-center rounded-[8px] bg-[#223f7f] text-white text-[15px] font-semibold py-3 hover:bg-[#1a3266] transition-colors"
            >
              Submit Registration
            </button>
            <p className="text-[11px] text-[#94a3b8] text-center leading-normal">{registration.modalNote}</p>
          </>
        ) : (
          <div className="flex flex-col items-center gap-3 py-4 text-center">
            <span className="flex size-[48px] items-center justify-center rounded-full bg-[#eaf8ef] text-[#2e7d57]">
              <CheckCircleIcon width={26} height={26} />
            </span>
            <h3 className="text-[#223f7f] text-[18px] font-bold leading-normal">{registration.confirmTitle}</h3>
            <p className="text-[#5d7088] text-[14px] leading-normal">{registration.confirmNote}</p>
            <button
              type="button"
              onClick={onClose}
              className="mt-2 rounded-[8px] border border-[#d9e2ec] px-5 py-2 text-[14px] font-semibold text-[#223f7f] hover:bg-[#eef2f7] transition-colors"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default function Registration() {
  const [designationKey, setDesignationKey] = useState(registration.designations[0].key)
  const [mealKey, setMealKey] = useState(registration.mealPreferences[0].key)
  const [quizKey, setQuizKey] = useState(registration.quizOptions[0].key)
  const [modalOpen, setModalOpen] = useState(false)

  const selected =
    registration.designations.find((d) => d.key === designationKey) || registration.designations[0]

  return (
    <section
      id="registration"
      className="scroll-mt-[72px] md:scroll-mt-[80px] bg-[#eef2f7] border-t border-[#f1f5f9] px-4 sm:px-8 md:px-[120px] py-12 md:py-[80px]"
    >
      <div className="max-w-[1200px] mx-auto flex flex-col gap-8 md:gap-10">
        <div className="flex flex-col gap-3">
          <h2 className="text-[#223f7f] text-[26px] md:text-[42px] font-bold leading-normal">{registration.heading}</h2>
        </div>

        <div className="rounded-[16px] border border-[#d8e2f0] overflow-hidden flex flex-col md:flex-row shadow-[0_10px_30px_-10px_rgba(0,0,0,0.08)]">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex-1 bg-white p-6 md:p-10 flex flex-col gap-5"
          >
            <h3 className="text-[#223f7f] text-[26px] md:text-[32px] font-bold leading-normal">
              {registration.formTitle}
            </h3>

            <Field label="Name (as required in certificate)" type="text" placeholder="Dr. Full Name" />

            <Field label="Institution" type="text" placeholder="Your institution" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="Mobile Number" type="tel" placeholder="+91 98765 43210" />
              <Field label="E-mail ID" type="email" placeholder="doctor@hospital.com" />
            </div>

            <Field label="Medical Registration Number" type="text" placeholder="Registration number" />

            <RadioPills
              label="Designation"
              options={registration.designations}
              value={designationKey}
              onChange={setDesignationKey}
            />
            {designationKey === 'other' && (
              <Field label="Please specify" type="text" placeholder="Your designation" />
            )}

            <Field label="Department" type="text" placeholder="Your department" />

            <RadioPills
              label="Meal Preference"
              options={registration.mealPreferences}
              value={mealKey}
              onChange={setMealKey}
            />

            <RadioPills
              label="Do you want to participate in the Quiz?"
              options={registration.quizOptions}
              value={quizKey}
              onChange={setQuizKey}
            />

            <Field label="Transaction ID" type="text" placeholder="Enter your UPI transaction ID" />

            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="mt-2 inline-flex items-center justify-center rounded-[8px] bg-[#223f7f] text-white text-[15px] font-semibold py-3 hover:bg-[#1a3266] transition-colors"
            >
              {registration.linkLabel}
            </button>
            <p className="text-[12px] text-[#6a7a8c] text-center leading-normal">{registration.linkNote}</p>
          </form>

          <div className="w-full md:w-[300px] shrink-0 bg-[#223f7f] text-white p-6 md:p-8 flex flex-col justify-between gap-8">
            <div className="flex flex-col gap-4">
              <h3 className="text-[20px] md:text-[22px] font-bold leading-normal">{registration.panelTitle}</h3>
              <p className="text-white/75 text-[13px] md:text-[14px] leading-normal">
                {registration.panelDescription}
              </p>
              <ul className="flex flex-col gap-2.5">
                {registration.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-2 text-[13px] md:text-[14px] leading-normal">
                    <CheckCircleIcon className="text-[#49c07e] shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/10 rounded-[10px] p-4">
              <p className="text-[11px] font-bold uppercase tracking-wide text-white/70">Registration Fee</p>
              {selected.fee != null ? (
                <p className="text-[30px] font-extrabold leading-none mt-1.5">
                  ₹{selected.fee}
                  <span className="text-[14px] font-medium">.00</span>
                </p>
              ) : (
                <p className="text-[20px] font-bold leading-tight mt-1.5">As applicable</p>
              )}
              <p className="text-[12px] text-white/70 mt-1">{selected.label}</p>
            </div>
          </div>
        </div>
      </div>

      {modalOpen && <PaymentModal selected={selected} onClose={() => setModalOpen(false)} />}
    </section>
  )
}
