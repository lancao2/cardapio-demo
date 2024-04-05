"use client";
import { useState } from "react";

export default function Search(): JSX.Element {
  const [searchElement, setSearchElement] = useState<String>("");
  return (
    <div className="mx-4 mt-5 drop-shadow-sm bg-[#FfFfFf] flex justify-between rounded-full">
      <button>Find</button>
      <input
        type="text"
        placeholder="Pesquise por prato ou ingrediente"
        className="h-8 w-64 outline-none"
      />{" "}
      <button>Filter</button>
    </div>
  );
}
