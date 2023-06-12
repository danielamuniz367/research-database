import { Button } from "@mui/material";
import { createPortal } from "react-dom";
import KeyFeaturesModal from "./KeyFeaturesModal";
import { useState } from "react";

export interface KeyFeaturesPortalProps {
  keyFeatures: string[];
  onAdd: (key_feature: string) => void;
  onDelete: (key_feature: string) => void;
}
export default function KeyFeaturesPortal({
  keyFeatures,
  onAdd,
  onDelete,
}: KeyFeaturesPortalProps) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button variant="outlined" onClick={() => setShowModal(true)}>
        Key Features
      </Button>
      {showModal &&
        createPortal(
          <KeyFeaturesModal
            keyFeatures={keyFeatures}
            onClose={() => setShowModal(false)}
            onAdd={onAdd}
            onDelete={onDelete}
          />,
          document.body
        )}
    </>
  );
}
