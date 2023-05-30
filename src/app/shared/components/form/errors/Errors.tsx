import { type } from "os";
import React, { Fragment } from "react";
interface Props {
  t: any;
  errors: any;
  typeValidate: string;
  name: any;
}
function Errors({ t, errors, typeValidate, name }: Props) {
  return (
    <Fragment>
      {errors[name]?.type === typeValidate && (
        <span className="text-danger">
          {t(`formValidation.${name}.${typeValidate}`)}
        </span>
      )}
    </Fragment>
  );
}

export default Errors;
