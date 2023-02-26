import React, {FC, ReactElement} from "react";

import './info-text.scss'

export const InfoText: FC = (): ReactElement => {
  return (
    <p className={'info-text'}>
      Powered by&nbsp;
      <a
        href={'https://openweathermap.org/'}
        target={'_blank'}
        rel={'noopener nofollow noreferrer'}
      >
        OpenWeather API
      </a>
    </p>
  )
}
