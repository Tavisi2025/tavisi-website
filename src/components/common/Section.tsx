"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import type { SxProps, Theme } from "@mui/material/styles";

interface SectionProps {
  title?: string;
  subtitle?: string;
  overline?: string;
  children?: React.ReactNode;
  maxWidth?: "sm" | "md" | "lg" | "xl" | false;
  alternate?: boolean;
  dense?: boolean;
  stagger?: boolean;
  /** When true and alternate is true, omits the bottom border/divider line */
  hideDivider?: boolean;
  /** Optional id for anchor links (e.g. id="what-we-do") */
  id?: string;
  /** Merged into the section title Typography `sx` (after defaults). */
  titleSx?: SxProps<Theme>;
  /** Merged into the section subtitle Typography `sx` (after defaults). */
  subtitleSx?: SxProps<Theme>;
  /** When set, constrains title + body to 720px and pins the column to the left or right of the container; copy stays left-aligned for readability. */
  contentAlign?: "left" | "right";
}

export function Section({
  title,
  subtitle,
  overline,
  children,
  maxWidth = "lg",
  alternate = false,
  dense = false,
  stagger = false,
  hideDivider = false,
  id,
  titleSx,
  subtitleSx,
  contentAlign,
}: SectionProps) {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const glassBg = alternate
    ? {
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        bgcolor: isDark ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.6)",
        ...(hideDivider
          ? {}
          : {
              borderBottom: "1px solid",
              borderColor: isDark
                ? "rgba(255,255,255,0.06)"
                : "rgba(0,0,0,0.06)",
            }),
      }
    : {};

  const sectionInner = (
    <>
      {(overline || title) && (
        <Box sx={{ mb: subtitle ? 2 : 5 }}>
          {overline && (
            <Typography
              variant="overline"
              sx={{
                display: "block",
                fontSize: "0.6875rem",
                fontWeight: 600,
                letterSpacing: "0.12em",
                mb: 1,
                color: "text.secondary",
              }}
            >
              {overline}
            </Typography>
          )}
          {title && (
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontWeight: 700,
                letterSpacing: "-0.03em",
                color: "text.primary",
                ...titleSx,
              }}
            >
              {title}
            </Typography>
          )}
        </Box>
      )}
      {subtitle && (
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mb: 5, maxWidth: 680, lineHeight: 1.7, ...subtitleSx }}
        >
          {subtitle}
        </Typography>
      )}
      <Box {...(stagger ? { "data-stagger": true } : {})}>
        {children ?? null}
      </Box>
    </>
  );

  const isRight = contentAlign === "right";

  return (
    <Box
      component="section"
      id={id}
      sx={{
        py: dense ? { xs: 5, md: 6 } : { xs: 5, md: 8 },
        px: 2,
        ...glassBg,
      }}
    >
      <Container maxWidth={maxWidth}>
        {contentAlign ? (
          <Box
            sx={{
              maxWidth: 720,
              width: "100%",
              textAlign: "left",
              ml: isRight ? "auto" : 0,
              mr: isRight ? 0 : "auto",
            }}
          >
            {sectionInner}
          </Box>
        ) : (
          sectionInner
        )}
      </Container>
    </Box>
  );
}
