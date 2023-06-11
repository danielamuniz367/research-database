"use client";
import ResearchDatabase from "./components/ResearchDatabase";
import database from "../database.json";

export default function Home() {
  return <ResearchDatabase database={database} />;
}
