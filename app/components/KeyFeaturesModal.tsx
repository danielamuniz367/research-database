import {
  Box,
  Button,
  Input,
  List,
  ListItem,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Header from "./Header";
import { useEffect, useState } from "react";

export default function KeyFeaturesModal({
  keyFeatures,
  onClose,
  onAdd,
  onDelete,
}: any) {
  const [keyFeature, setKeyFeature] = useState<string | undefined>();

  useEffect(() => {
    console.log(onAdd);
  }, []);

  return (
    <Box>
      <Stack direction="row">
        <Header variant="h5" title="Key Features" />
        <Button onClick={onClose}>Done</Button>
      </Stack>
      <Stack direction="row">
        <TextField
          label="Enter key feature"
          variant="outlined"
          onChange={(e) => setKeyFeature(e.target.value)}
        />
        <Button onClick={() => onAdd(keyFeature)}>Add</Button>
      </Stack>
      <List>
        {keyFeatures.map((kf: string, i: number) => (
          <ListItem key={`${kf}-${i}`}>
            <Typography>{kf}</Typography>
            <Button onClick={() => onDelete(kf)}>X</Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
