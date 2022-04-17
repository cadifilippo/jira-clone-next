import { useState, ChangeEvent } from 'react';
import { Box, Button, TextField } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export const NewEntry = () => {
  const [isAdding, setIsAdding] = useState(false);
  const [entry, setEntry] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const onTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEntry(e.target.value);
  };

  const onSave = () => {};

  return (
    <Box sx={{ marginBottom: 2, paddingX: 1 }}>
      {isAdding ? (
        <>
          <TextField
            fullWidth
            sx={{ marginTop: 2, marginBottom: 1 }}
            placeholder="New Entry"
            autoFocus
            multiline
            label="New Entry"
            helperText="Enter a new entry"
            error={entry.length <= 0 && isTouched}
            value={entry}
            onChange={onTextChange}
            onBlur={() => setIsTouched(true)}
          />
          <Box display="flex" justifyContent="space-between">
            <Button variant="text" onClick={() => setIsAdding(false)}>
              Cancelar
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              endIcon={<SaveIcon />}
              onClick={onSave}
            >
              Guardar
            </Button>
          </Box>
        </>
      ) : (
        <Button
          startIcon={<AddCircleOutlineIcon />}
          fullWidth
          variant="outlined"
          onClick={() => setIsAdding(true)}
        >
          Agregar Tarea
        </Button>
      )}
    </Box>
  );
};
