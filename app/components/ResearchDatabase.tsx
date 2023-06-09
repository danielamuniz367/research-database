import Box from "@mui/material/Box";
import Header from "./Header";
import UploadButton from "./UploadButton";
import DataTable from "./DataTable";
import { Stack } from "@mui/material";

export default function ResearchDatabase() {
  return (
    <Box>
      <Stack direction="row" justifyContent="space-between">
        <Header />
        <UploadButton />
      </Stack>
      <DataTable />
    </Box>
  );
}
