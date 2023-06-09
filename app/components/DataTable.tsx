import React, { useMemo } from "react";
import { MaterialReactTable } from "material-react-table";
import { MRT_ColumnDef } from "material-react-table";
import dbData from "../../databaseData.json";

// example data from docs

//If using TypeScript, define the shape of your data (optional, but recommended)
interface Person {
  name: string;
  age: number;
}

interface KeyFeatureResult {
  item: string | undefined;
  refIndex: number;
  score: number;
}

interface KeyFeature {
  name: string;
  results: KeyFeatureResult[] | undefined;
}

interface ResearchData {
  id: string;
  name: string;
  keyFeatures: KeyFeature[];
}

//mock data - strongly typed if you are using TypeScript (optional, but recommended)
const data: ResearchData[] = dbData;

export default function DataTable() {
  const { keyFeatures } = data[0];

  function generateColumns(_data: KeyFeature[]) {
    let newCols: MRT_ColumnDef<ResearchData>[] = [];
    _data.map((kf, i) => {
      let newCol: any = {
        id: kf.name,
        header: kf.name,
        accessorFn: (originalRow: any) =>
          originalRow.keyFeatures[i].results.map((r: KeyFeatureResult) => {
            return r.item;
          }),
      };
      newCols.push(newCol);
    });
    return newCols;
  }
  const nestedDataCols: MRT_ColumnDef<ResearchData>[] =
    generateColumns(keyFeatures);

  const columns = useMemo<MRT_ColumnDef<ResearchData>[]>(
    () => [
      {
        accessorKey: "id",
        header: "ID",
      },
      {
        accessorKey: "name",
        header: "Name",
      },
      ...nestedDataCols,
    ],
    []
  );

  return (
    <MaterialReactTable
      columns={columns}
      data={data}
      enableRowSelection //enable some features
      enableColumnOrdering
      enableGlobalFilter={false} //turn off a feature
    />
  );
}
