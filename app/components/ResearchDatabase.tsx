import Box from "@mui/material/Box";
import DataTable from "./DataTable";
import Header from "./Header";
import { Stack } from "@mui/material";
import KeyFeaturesPortal from "./KeyFeaturesPortal";
import { useEffect, useState } from "react";
import fuzzySearch from "../utils/fuzzySearch";
import { useSelector } from "react-redux";
import { RootState } from "../GlobalRedux/store";

export interface KeyFeatureResult {
  item: string | undefined;
  refIndex: number;
  score: number;
}

export interface KeyFeature {
  name: string;
  results: KeyFeatureResult[] | undefined;
}

export interface ResearchData {
  id: string;
  file_name: string;
  keyFeatures: KeyFeature[];
}
export interface ResearchDatabaseData {
  keyFeaturesList: string[];
  researchData: ResearchData[];
}

export interface DatabaseItem {
  id: string;
  name: string;
  type: string;
  text: string;
}

export default function ResearchDatabase({ database }: any) {
  const [tableData, setTableData] = useState<
    ResearchDatabaseData["researchData"]
  >([]);

  const keyFeatures = useSelector(
    (state: RootState) => state.keyFeatures.value
  );

  useEffect(() => {
    if (keyFeatures.length > 0) {
      let searchResults = handleKeyFeaturesSearch(keyFeatures, database);
      setTableData(searchResults);
    }
  }, [keyFeatures]);

  function handleKeyFeaturesSearch(
    keyFeatures: ResearchDatabaseData["keyFeaturesList"],
    database: any
  ) {
    let results = database.map((entry: any) => {
      return {
        id: entry.id,
        file_name: entry.name,
        results: keyFeatures.map((kf) => {
          return {
            name: kf,
            results: fuzzySearch(kf, entry.text),
          };
        }),
      };
    });
    return results;
  }

  return (
    <Box p="5rem">
      <Stack direction="row" gap="1rem" alignItems="center" p={1}>
        <Header variant="h4" title="Research Table" />
        <KeyFeaturesPortal
        // onAdd={handleAddKeyFeature}
        // onDelete={handleDeleteKeyFeature}
        />
      </Stack>
      <DataTable keyFeaturesList={keyFeatures} researchData={tableData} />
    </Box>
  );
}
