import React, {
  Dispatch,
  MouseEventHandler,
  ReactElement,
  SetStateAction,
} from "react";

import './search-field.scss'

export const SearchField = (props: {
  query: string,
  setQuery: Dispatch<SetStateAction<string>>,
  fetchOnClick: MouseEventHandler<HTMLButtonElement>
}): ReactElement => {
  return (
    <div className="search-field">
      <input
        className={'search-field__field'}
        value={props.query}
        onInput={(e: React.ChangeEvent<HTMLInputElement>) => props.setQuery(e.target.value)}
        placeholder={'Search city...'}
      />
      {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
      <button className={'search-field__button'} onClick={props.fetchOnClick}>Search</button>
    </div>
  )
}
