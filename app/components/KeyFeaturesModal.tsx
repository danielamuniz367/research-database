"use client";

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
import { useState } from "react";
import styles from "../page.module.css";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";
import RemoveCircleRoundedIcon from "@mui/icons-material/RemoveCircleRounded";

import type { RootState } from "../GlobalRedux/store";
import { useSelector, useDispatch } from "react-redux";
import {
  add,
  remove,
} from "../GlobalRedux/features/keyFeatures/keyFeaturesSlice";

export default function KeyFeaturesModal({ onClose }: any) {
  const [keyFeature, setKeyFeature] = useState<string>("");

  // using Redux --------------------------------
  const keyFeaturesList = useSelector(
    (state: RootState) => state.keyFeatures.value
  );
  const dispatch = useDispatch();
  //---------------------------------------------

  function handleAdd() {
    dispatch(add(keyFeature));
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
        <Stack direction="row" gap={1}>
          <TextField
            label="Enter key feature"
            variant="outlined"
            value={keyFeature}
            onChange={(e) => setKeyFeature(e.target.value)}
          />
          <Button variant="outlined" onClick={handleAdd}>
            Add
          </Button>
        </Stack>
        <List>
          {keyFeaturesList.map((kf: string, i: number) => (
            <ListItem key={`${kf}-${i}`}>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography>{kf}</Typography>
                <Button onClick={() => dispatch(remove(kf))}>
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
