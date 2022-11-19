import { Button, SxProps, Theme } from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

interface BackButtonProps {
  sx?: SxProps<Theme>,
}

export default function BackButton({ sx }:BackButtonProps) {
  return (
    <Button variant="contained" startIcon={<ArrowBackIosNewIcon />} sx={{textTransform: "capitalize", background: "rgba(254, 160, 96, 0.2)", ...sx}}>
      Regresar
    </Button>
  )
}