import { Button } from "@mui/material";
import { createPortal } from "react-dom";
import KeyFeaturesModal from "./KeyFeaturesModal";
import { useState } from "react";

export interface KeyFeaturesPortalProps {
  keyFeatures: string[];
}
export default function KeyFeaturesPortal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button variant="outlined" onClick={() => setShowModal(true)}>
        Key Features
      </Button>
      {showModal &&
        createPortal(
          <KeyFeaturesModal onClose={() => setShowModal(false)} />,
          document.body
        )}
    </>
  );
}
