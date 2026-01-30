'use client';

import { useRef, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import InputAdornment from '@mui/material/InputAdornment';
import { useTheme } from '@mui/material/styles';
import EmailIcon from '@mui/icons-material/EmailOutlined';
import { isPhoneValid } from '@/utils/phoneValidation';
import { CustomContactNumberInput } from './CustomContactNumberInput';

const MESSAGE_MAX = 120;

export function ContactForm() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState('');

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPhoneError('');

    const trimmedPhone = phone.trim();
    if (!trimmedPhone || !isPhoneValid(trimmedPhone)) {
      setPhoneError('Please enter a valid contact number');
      return;
    }

    setStatus('sending');
    setTimeout(() => {
      setStatus('sent');
      setPhone('');
      setMessage('');
      setPhoneError('');
      formRef.current?.reset();
    }, 800);
  }

  return (
    <Paper
      variant="outlined"
      sx={{
        p: 4,
        borderRadius: 3,
        border: '1px solid',
        borderColor: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)',
        boxShadow: isDark ? '0 8px 32px rgba(0,0,0,0.2)' : '0 8px 32px rgba(0,0,0,0.06)',
        bgcolor: 'transparent',
      }}
    >
      <Typography variant="h5" component="h2" sx={{ fontWeight: 700, color: 'text.primary', mb: 0.5 }}>
        Get in Touch
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        You can reach us anytime
      </Typography>

      <form ref={formRef} onSubmit={handleSubmit}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            <TextField
              label="First name"
              name="firstName"
              required
              fullWidth
              autoComplete="given-name"
              sx={{ flex: { xs: '1 1 100%', sm: '1 1 calc(50% - 8px)' } }}
            />
            <TextField
              label="Last name"
              name="lastName"
              required
              fullWidth
              autoComplete="family-name"
              sx={{ flex: { xs: '1 1 100%', sm: '1 1 calc(50% - 8px)' } }}
            />
          </Box>

          <TextField
            label="Your email"
            name="email"
            type="email"
            required
            fullWidth
            autoComplete="email"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon sx={{ color: 'text.secondary', fontSize: 20 }} />
                </InputAdornment>
              ),
            }}
          />

          <CustomContactNumberInput
            label="Phone number"
            value={phone}
            onChange={(value) => {
              setPhone(value);
              if (phoneError) setPhoneError('');
            }}
            placeHolder="Phone number"
            error={phoneError || undefined}
            inputProps={{
              id: 'contact-phone',
              name: 'phone',
              autoComplete: 'tel-national',
            }}
          />

          <TextField
            label="How can we help?"
            name="message"
            required
            fullWidth
            multiline
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value.slice(0, MESSAGE_MAX))}
            inputProps={{ maxLength: MESSAGE_MAX }}
            helperText={
              <Box component="span" sx={{ display: 'flex', justifyContent: 'flex-end', mt: 0.5 }}>
                <Typography variant="caption" color="text.secondary">
                  {message.length}/{MESSAGE_MAX}
                </Typography>
              </Box>
            }
            FormHelperTextProps={{ sx: { mx: 0 } }}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            disabled={status === 'sending'}
            sx={{
              borderRadius: 2,
              fontWeight: 600,
              py: 1.5,
              textTransform: 'none',
              transition: 'transform 0.2s ease, box-shadow 0.3s ease',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 8px 24px rgba(14, 116, 144, 0.35)',
              },
              '@media (prefers-reduced-motion: reduce)': { '&:hover': { transform: 'none' } },
            }}
          >
            {status === 'sending' ? 'Sending…' : status === 'sent' ? 'Message sent' : 'Submit'}
          </Button>

          {status === 'sent' && (
            <Typography variant="body2" color="success.main">
              Thank you. We&apos;ll be in touch within 1–2 business days.
            </Typography>
          )}
          {status === 'error' && (
            <Typography variant="body2" color="error.main">
              Something went wrong. Please try again or email us directly.
            </Typography>
          )}

          {/* <Typography variant="caption" color="text.secondary" sx={{ lineHeight: 1.5 }}>
            By contacting us, you agree to our{' '}
            <Link component={NextLink} href="/terms" underline="hover" sx={{ fontWeight: 600 }}>
              Terms of service
            </Link>{' '}
            and{' '}
            <Link component={NextLink} href="/privacy" underline="hover" sx={{ fontWeight: 600 }}>
              Privacy Policy
            </Link>
            .
          </Typography> */}
        </Box>
      </form>
    </Paper>
  );
}
