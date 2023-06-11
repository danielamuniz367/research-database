import Typography from "@mui/material/Typography";
import { Variant } from "@mui/material/styles/createTypography";

interface HeaderProps {
  variant: Variant;
  title: string;
}

export default function Header({ variant, title }: HeaderProps) {
  return (
    <Typography variant={variant} gutterBottom m={0}>
      {title}
    </Typography>
  );
}
