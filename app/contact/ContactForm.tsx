'use client';

import { useEffect, useRef, useState } from 'react';
import NextLink from 'next/link';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';
import InputAdornment from '@mui/material/InputAdornment';
import { useTheme } from '@mui/material/styles';
import { isPhoneValid } from '@/utils/phoneValidation';
import { CustomContactNumberInput } from './CustomContactNumberInput';
import { FieldLabel, fieldSx } from './formStyles';
import { FORM } from './content';

const MESSAGE_MAX = 120;

const CONTACT_API_URL =
  'https://script.google.com/macros/s/AKfycbyI-Z1CVYuNxCj9O5OeQAK8YHzGtJgv_R-MyTJ5RIDQ43ybJSdyWNm5WXEcfsDxGVyzmw/exec';

function getDateAndTimeString(): string {
  const d = new Date();
  return d.toISOString();
}

export function ContactForm() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const inputSx = fieldSx(theme);
  const formRef = useRef<HTMLFormElement>(null);
  const hideSuccessTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState('');

  useEffect(() => {
    return () => {
      if (hideSuccessTimeoutRef.current) clearTimeout(hideSuccessTimeoutRef.current);
    };
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPhoneError('');

    const trimmedPhone = phone.trim();
    if (!trimmedPhone || !isPhoneValid(trimmedPhone)) {
      setPhoneError('Please enter a valid contact number');
      return;
    }

    const form = formRef.current;
    if (!form) return;

    const firstName = (form.elements.namedItem('firstName') as HTMLInputElement)?.value ?? '';
    const lastName = (form.elements.namedItem('lastName') as HTMLInputElement)?.value ?? '';
    const email = (form.elements.namedItem('email') as HTMLInputElement)?.value ?? '';

    setStatus('sending');

    const params = new URLSearchParams({
      firstName,
      lastName,
      email,
      contactNumber: trimmedPhone,
      description: message.trim(),
      date: getDateAndTimeString(),
    });

    try {
      await fetch(`${CONTACT_API_URL}?${params.toString()}`, {
        method: 'POST',
        mode: 'no-cors',
      });
      setStatus('sent');
      setPhone('');
      setMessage('');
      setPhoneError('');
      form.reset();
      if (hideSuccessTimeoutRef.current) clearTimeout(hideSuccessTimeoutRef.current);
      hideSuccessTimeoutRef.current = setTimeout(() => setStatus('idle'), 10000);
    } catch {
      setStatus('error');
    }
  }

  return (
    <Box
      id="contact-form"
      sx={{
        p: { xs: 3, md: 4.5 },
        display: 'flex',
        flexDirection: 'column',
        gap: 3.5,
        bgcolor: 'background.paper',
        border: '1px solid',
        borderColor: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)',
        borderRadius: 3,
        boxShadow: '0 8px 16px rgba(0,0,0,0.06)',
        scrollMarginTop: 96,
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.75 }}>
        <Typography component="h2" sx={{ color: 'text.primary', fontSize: '1.375rem', fontWeight: 700, lineHeight: '30px' }}>
          {FORM.title}
        </Typography>
        <Typography sx={{ color: 'text.secondary', fontSize: '0.875rem', lineHeight: '22px' }}>{FORM.subtitle}</Typography>
      </Box>

      <form ref={formRef} onSubmit={handleSubmit}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
          <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
            <Box sx={{ flex: 1 }}>
              <FieldLabel htmlFor="contact-first-name" required>
                First name
              </FieldLabel>
              <TextField
                id="contact-first-name"
                name="firstName"
                placeholder="John"
                required
                fullWidth
                autoComplete="given-name"
                sx={inputSx}
              />
            </Box>
            <Box sx={{ flex: 1 }}>
              <FieldLabel htmlFor="contact-last-name" required>
                Last name
              </FieldLabel>
              <TextField
                id="contact-last-name"
                name="lastName"
                placeholder="Doe"
                required
                fullWidth
                autoComplete="family-name"
                sx={inputSx}
              />
            </Box>
          </Box>

          <Box>
            <FieldLabel htmlFor="contact-email" required>
              Email
            </FieldLabel>
            <TextField
              id="contact-email"
              name="email"
              type="email"
              placeholder="you@company.com"
              required
              fullWidth
              autoComplete="email"
              sx={inputSx}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Box
                      component="img"
                      src="/assets/icons/contact/input-email.svg"
                      alt=""
                      aria-hidden
                      width={18}
                      height={18}
                      sx={{ display: 'block', filter: isDark ? 'invert(1)' : 'none' }}
                    />
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          <CustomContactNumberInput
            label="Phone number"
            value={phone}
            onChange={(value) => {
              setPhone(value);
              if (phoneError) setPhoneError('');
            }}
            placeHolder="(555) 000-0000"
            error={phoneError || undefined}
            required
            inputProps={{
              id: 'contact-phone',
              name: 'phone',
              autoComplete: 'tel-national',
            }}
          />

          <Box>
            <FieldLabel htmlFor="contact-message" required>
              How can we help?
            </FieldLabel>
            <TextField
              id="contact-message"
              name="message"
              placeholder="Tell us a little about your goals or challenges…"
              required
              fullWidth
              multiline
              minRows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value.slice(0, MESSAGE_MAX))}
              inputProps={{ maxLength: MESSAGE_MAX, 'aria-describedby': 'contact-message-count' }}
              sx={{ ...inputSx, '& .MuiInputBase-multiline': { p: '12px 14px', minHeight: 132, alignItems: 'flex-start' } }}
            />
            <Typography
              id="contact-message-count"
              sx={{ mt: 1, textAlign: 'right', color: 'text.secondary', fontSize: '0.75rem', lineHeight: '18px' }}
            >
              {message.length} / {MESSAGE_MAX}
            </Typography>
          </Box>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            disabled={status === 'sending'}
            sx={{
              height: 52,
              borderRadius: 1.5,
              fontSize: '0.9375rem',
              fontWeight: 600,
              boxShadow: '0 4px 6px rgba(14,116,144,0.18)',
              '&:hover': { boxShadow: '0 6px 14px rgba(14,116,144,0.28)' },
            }}
          >
            {status === 'sending' ? 'Sending…' : FORM.submit}
          </Button>

          {status === 'sent' && (
            <Typography variant="body2" color="success.main" role="status">
              Thank you. We&apos;ll be in touch within 1–2 business days.
            </Typography>
          )}
          {status === 'error' && (
            <Typography variant="body2" color="error.main" role="alert">
              Something went wrong. Please try again or email us directly.
            </Typography>
          )}

          <Typography sx={{ color: 'text.secondary', fontSize: '0.75rem', lineHeight: '18px', textAlign: 'center' }}>
            By submitting, you agree to our{' '}
            <MuiLink component={NextLink} href="/privacy-policy" underline="always" sx={{ color: 'primary.main' }}>
              Privacy Policy
            </MuiLink>
            .
          </Typography>
        </Box>
      </form>
    </Box>
  );
}
