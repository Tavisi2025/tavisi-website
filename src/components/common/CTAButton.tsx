import NextLink from 'next/link';
import Button from '@mui/material/Button';
import { CTA_PATH, CTA_LABEL } from '@/constants';

interface CTAButtonProps {
  href?: string;
  label?: string;
  variant?: 'contained' | 'outlined' | 'text';
  size?: 'small' | 'medium' | 'large';
}

export function CTAButton({
  href = CTA_PATH,
  label = CTA_LABEL,
  variant = 'contained',
  size = 'large',
}: CTAButtonProps) {
  return (
    <Button
      component={NextLink}
      href={href}
      variant={variant}
      size={size}
      color="primary"
      sx={{
        px: size === 'large' ? 4 : 3,
        py: size === 'large' ? 1.75 : 1.25,
        borderRadius: 10,
        fontWeight: 600,
        letterSpacing: '0.02em',
        transition: 'transform 0.2s ease, box-shadow 0.3s ease',
        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow: '0 8px 24px rgba(14, 116, 144, 0.35)',
        },
        '@media (prefers-reduced-motion: reduce)': {
          '&:hover': { transform: 'none' },
        },
      }}
    >
      {label}
    </Button>
  );
}
