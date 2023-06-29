export interface KeyFeatureResult {
  item: string | undefined;
  refIndex: number;
  score: number;
}

interface KeyFeature {
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
