"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { homeSections } from "@/content/company";
import { Button } from "@/components/ui/button";
import {
  contactFormSchema,
  type ContactFormValues,
} from "@/lib/validations";
import { brandCtaClassName, cn } from "@/lib/utils";

const fieldLabelClassName = "block text-sm font-medium text-[#1B1F23]";

const inputClassName =
  "mt-1 w-full rounded-md border border-[#D1D5DB] bg-white px-3 py-2 text-sm text-[#1B1F23] transition-colors focus-visible:outline-none focus-visible:border-[#F5BF23] focus-visible:ring-2 focus-visible:ring-[#F5BF23] disabled:cursor-not-allowed disabled:opacity-60";

type ContactFormProps = {
  className?: string;
};

export function ContactForm({ className }: ContactFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
      website: "",
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const payload = (await response.json()) as {
        ok?: boolean;
        error?: string;
      };

      if (!response.ok) {
        toast.error(payload.error ?? "Unable to send your message. Please try again.");
        return;
      }

      toast.success("Message sent. Our team will respond shortly.");
      reset();
    } catch {
      toast.error("Network error. Please check your connection and try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn(
        "relative rounded-lg border border-[#D1D5DB] bg-white p-6 md:p-8",
        className,
      )}
      noValidate
    >
      <p className="mb-6 text-sm text-[#1B1F23]">{homeSections.contactFormNote}</p>

      <div className="absolute left-[-9999px] h-px w-px overflow-hidden" aria-hidden>
        <label htmlFor="contact-website">Website</label>
        <input
          id="contact-website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("website")}
        />
      </div>

      <div className="space-y-4">
        <div>
          <label htmlFor="contact-name" className={fieldLabelClassName}>
            Name <span className="text-destructive">*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            className={inputClassName}
            {...register("name")}
          />
          {errors.name ? (
            <p id="contact-name-error" className="mt-1 text-xs text-destructive" role="alert">
              {errors.name.message}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="contact-email" className={fieldLabelClassName}>
            Email <span className="text-destructive">*</span>
          </label>
          <input
            id="contact-email"
            type="email"
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            className={inputClassName}
            {...register("email")}
          />
          {errors.email ? (
            <p id="contact-email-error" className="mt-1 text-xs text-destructive" role="alert">
              {errors.email.message}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="contact-phone" className={fieldLabelClassName}>
            Phone <span className="font-normal text-[#1B1F23]/50">(optional)</span>
          </label>
          <input
            id="contact-phone"
            type="tel"
            autoComplete="tel"
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "contact-phone-error" : undefined}
            className={inputClassName}
            {...register("phone")}
          />
          {errors.phone ? (
            <p id="contact-phone-error" className="mt-1 text-xs text-destructive" role="alert">
              {errors.phone.message}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="contact-company" className={fieldLabelClassName}>
            Company <span className="font-normal text-[#1B1F23]/50">(optional)</span>
          </label>
          <input
            id="contact-company"
            type="text"
            autoComplete="organization"
            aria-invalid={Boolean(errors.company)}
            aria-describedby={errors.company ? "contact-company-error" : undefined}
            className={inputClassName}
            {...register("company")}
          />
          {errors.company ? (
            <p id="contact-company-error" className="mt-1 text-xs text-destructive" role="alert">
              {errors.company.message}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="contact-message" className={fieldLabelClassName}>
            Message <span className="text-destructive">*</span>
          </label>
          <textarea
            id="contact-message"
            rows={4}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "contact-message-error" : undefined}
            className={inputClassName}
            {...register("message")}
          />
          {errors.message ? (
            <p id="contact-message-error" className="mt-1 text-xs text-destructive" role="alert">
              {errors.message.message}
            </p>
          ) : null}
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className={cn("w-full", brandCtaClassName)}
        >
          {isSubmitting ? "Sending…" : "Send Message"}
        </Button>
      </div>
    </form>
  );
}
