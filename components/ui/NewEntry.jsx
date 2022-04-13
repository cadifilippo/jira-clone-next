import { Box, Button, TextField } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
export const NewEntry = () => {
  return (
    <Box sx={{ marginBottom: 2, paddingX: 1 }}>
      <Button startIcon={<AddCircleOutlineIcon />} fullWidth variant="outlined">
        Agregar Tarea
      </Button>
      <TextField
        fullWidth
        sx={{ marginTop: 2, marginBottom: 1 }}
        placeholder="New Entry"
        autoFocus
        multiline
        label="New Entry"
        helperText="Enter a new entry"
      />
      <Box display="flex" justifyContent="space-between">
        <Button variant="text">Cancelar</Button>
        <Button variant="outlined" color="secondary" endIcon={<SaveIcon />}>
          Guardar
        </Button>
      </Box>
    </Box>
  );
};
