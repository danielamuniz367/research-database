import {
  Box,
  Button,
  List,
  ListItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Header from "./Header";
import { useEffect, useState } from "react";
import styles from "../page.module.css";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";
import RemoveCircleRoundedIcon from "@mui/icons-material/RemoveCircleRounded";

export default function KeyFeaturesModal({
  keyFeatures,
  onClose,
  onAdd,
  onDelete,
}: any) {
  const [keyFeature, setKeyFeature] = useState<string | undefined>();

  function handleClick() {
    onAdd(keyFeature);
    setKeyFeature("");
  }

  return (
    <>
      <div className={styles.overlay}></div>
      <Box className={styles.modal}>
        <Stack direction="row" justifyContent="space-between" mb="24px">
          <Header variant="h5" title="Key Features" />
          <Button onClick={onClose}>
            <HighlightOffRoundedIcon />
          </Button>
        </Stack>
        <Stack direction="row">
          <TextField
            label="Enter key feature"
            variant="outlined"
            value={keyFeature}
            onChange={(e) => setKeyFeature(e.target.value)}
          />
          <Button onClick={handleClick}>Add</Button>
        </Stack>
        <List>
          {keyFeatures.map((kf: string, i: number) => (
            <ListItem key={`${kf}-${i}`}>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography>{kf}</Typography>
                <Button onClick={() => onDelete(kf)}>
                  <RemoveCircleRoundedIcon />
                </Button>
              </Stack>
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  );
}
