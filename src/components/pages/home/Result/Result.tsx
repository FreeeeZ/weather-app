import React, {
  ReactElement,
} from "react";

interface IResult {
  cod: string,
  count: number,
  list: IListItem,
  message: string
}

interface IListItem {
  map(arg0: (item: IListItem) => IListItem): React.ReactNode;
  "id": number
  "name": string
  "coord": object
  "main": object
  "dt": number,
  "wind": object,
  "sys": object,
  "rain": null,
  "snow": null,
  "clouds": object
  "weather": Array<string | number>
}

export const Result = (props: {
  result: IResult,
}): ReactElement => {
  return (
    <div className="result-wrapper">
      {props.result?.list && props.result?.list?.map((item: IListItem) => item)}
    </div>
  )
}
