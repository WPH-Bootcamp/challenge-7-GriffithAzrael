import React, { useEffect, useRef, useState } from 'react';
import ButtonSend from '../../ui/ButtonSend';
import ProcessingModal from '../../ui/ProcessingModal';
import ResultModal, { type ResultModalVariant } from '../../ui/ResultModal';
import FormField from '../../ui/FormField';
import TextAreaField from '../../ui/TextAreaField';
import ServicesChecklist from '../../ui/ServicesChecklist';

type ErrorState = {
  name?: string;
  email?: string;
  message?: string;
  services?: string;
};

type ModalState = 'idle' | 'processing' | ResultModalVariant;

const MessageForm: React.FC = () => {
  const [errors, setErrors] = useState<ErrorState>({});
  const [modal, setModal] = useState<ModalState>('idle');

  const formRef = useRef<HTMLFormElement | null>(null);
  const processingMs = 1800;

  const errorBorder = 'border-[#FF3366]';
  const errorText = 'text-[#FF3366]';

  const validate = (form: HTMLFormElement): ErrorState => {
    const name =
      (form.elements.namedItem('Name') as HTMLInputElement | null)?.value ?? '';
    const email =
      (form.elements.namedItem('Email') as HTMLInputElement | null)?.value ?? '';
    const message =
      (form.elements.namedItem('Message') as HTMLTextAreaElement | null)?.value ?? '';

    const serviceCheckboxes = form.querySelectorAll<HTMLInputElement>('input[name="services"]');
    const anyServiceChecked = Array.from(serviceCheckboxes).some((cb) => cb.checked);

    const newErrors: ErrorState = {};
    if (!name.trim()) newErrors.name = 'Required';
    if (!email.trim()) newErrors.email = 'Required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) newErrors.email = 'Required';
    if (!message.trim()) newErrors.message = 'Required';
    if (!anyServiceChecked) newErrors.services = 'Required';

    return newErrors;
  };

  const tossResult = () => {
    const win = Math.random() < 0.5;
    setModal(win ? 'success' : 'failed');
  };

  useEffect(() => {
    if (modal !== 'processing') return;
    const t = window.setTimeout(tossResult, processingMs);
    return () => window.clearTimeout(t);
  }, [modal]);

  const startProcessing = () => setModal('processing');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (modal === 'processing') return;

    const form = e.currentTarget;
    formRef.current = form;

    const validationErrors = validate(form);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    startProcessing();
  };

  const handleSuccessClose = () => {
    setModal('idle');
    formRef.current?.reset();
  };

  const handleTryAgain = () => {
    startProcessing();
  };

  const isBusy = modal === 'processing';

  return (
    <section
      className="message-form flex flex-col items-center justify-center gap-6 px-4 pb-0 py-10 md:px-[340px] md:py-20"
      id="messageform"
    >
      <div className="section-title flex flex-col text-center justify-center gap-[11px]">
        <h1 className="text-[28px] font-bold px-4 leading-[38px] md:text-[40px] md:leading-14">
          Ready to Start? Let's Talk.
        </h1>
        <p className="message-muted text-sm font-medium px-5 leading-7 md:text-[18px] md:leading-8">
          Tell us what you need, and we'll get back to you soon.
        </p>
      </div>

      <div className="relative w-full">
        <form ref={formRef} onSubmit={handleSubmit} className="form grid w-full gap-10">
          <div className="grid gap-5">
            <FormField
              id="Name"
              name="Name"
              label="Name"
              placeholder="Enter your name"
              error={errors.name}
              onClearError={() => setErrors((prev) => ({ ...prev, name: undefined }))}
              errorBorderClass={errorBorder}
              errorTextClass={errorText}
            />

            <FormField
              id="Email"
              name="Email"
              label="Email"
              type="email"
              placeholder="Enter your email"
              error={errors.email}
              onClearError={() => setErrors((prev) => ({ ...prev, email: undefined }))}
              errorBorderClass={errorBorder}
              errorTextClass={errorText}
            />

            <TextAreaField
              id="Message"
              name="Message"
              label="Message"
              placeholder="Enter your message"
              rowsClassName="h-[134px]"
              error={errors.message}
              onClearError={() => setErrors((prev) => ({ ...prev, message: undefined }))}
              errorBorderClass={errorBorder}
              errorTextClass={errorText}
            />

            <ServicesChecklist
              options={[
                'Web Development',
                'Mobile App Development',
                'UI/UX Design',
                'Cloud Solutions',
                'Software Development',
                'Other',
              ]}
              error={errors.services}
              onClearError={() => setErrors((prev) => ({ ...prev, services: undefined }))}
              errorTextClass={errorText}
              checkIconSrc="check.svg"
            />
          </div>

          <div className={`w-full ${isBusy ? 'pointer-events-none opacity-70' : ''}`}>
            <ButtonSend />
          </div>
        </form>
      </div>

      {modal === 'processing' && <ProcessingModal />}

      {modal === 'success' && <ResultModal variant="success" onPrimary={handleSuccessClose} />}

      {modal === 'failed' && <ResultModal variant="failed" onPrimary={handleTryAgain} />}
    </section>
  );
};

export default MessageForm;