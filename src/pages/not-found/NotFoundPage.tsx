import {Link} from "react-router-dom";
import React, {FC, ReactElement} from "react";

import './not-found-page.scss'

export const NotFound: FC = (): ReactElement => {
  return (
    <div className={'not-found-page'}>
      <h1>Oops! You seem to be lost.</h1>
      <p>Here are some helpful links:</p>
      <Link to='/'>Go to home</Link>
    </div>
  )
}
