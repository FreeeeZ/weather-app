import React, {FC, ReactElement, useState} from "react";

import useSearchField from "@/components/pages/home/SearchField/useSearchField";

import {Result} from "@/components/pages/home/Result/Result";
import {InfoText} from "@/components/pages/home/InfoText/InfoText";
import {SearchField} from "@/components/pages/home/SearchField/SearchField";

export const HomePage: FC = (): ReactElement => {
  const [query, setQuery] = useState('' as string);
  const [fetchOnClick, result] = useSearchField(query, setQuery)

  return (
    <div className="home-page">
      <SearchField
        query={query}
        setQuery={setQuery}
        fetchOnClick={fetchOnClick}
      />
      <InfoText />
      <Result result={result} />
    </div>
  )
}
