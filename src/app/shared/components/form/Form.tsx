import React from "react";
import "./Form.style.css";
import { Input } from "./input/Input";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import Errors from "./errors/Errors";
import { TextArena } from "../textArena/TextArena";
function Form() {
  const { t }: any = useTranslation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });
  return (
    <form className="form">
      <div className="form-input">
        <Input
          t={t}
          placeholder={t("footer.placeholder.name.content")}
          register={{
            ...register("fullname", { required: true, minLength: 2 }),
          }}
          name={"fullname"}
        />
        <Errors
          t={t}
          errors={errors}
          typeValidate={"required"}
          name={"fullname"}
        />
        <Errors
          t={t}
          errors={errors}
          typeValidate={"minLength"}
          name={"fullname"}
        />
      </div>
      <div className="form-input">
        <Input
          t={t}
          placeholder={t("footer.placeholder.email.content")}
          register={{
            ...register("email", {
              required: true,
              pattern: /^([\w.*-]+@([\w-]+\.)+[\w-]{2,4})?$/,
            }),
          }}
          name={"email"}
        />
        <Errors
          t={t}
          errors={errors}
          typeValidate={"required"}
          name={"email"}
        />
        <Errors t={t} errors={errors} typeValidate={"pattern"} name={"email"} />
      </div>
      <div className="form-input">
        <Input
          t={t}
          placeholder={t("footer.placeholder.phone.content")}
          register={{
            ...register("phoneNumber", {
              required: true,
              minLength: 10,
              maxLength: 10,
              pattern: /(84|0[3|5|7|8|9])+([0-9]{8})\b/g,
            }),
          }}
          name={"phoneNumber"}
        />
        <Errors
          errors={errors}
          typeValidate={"required"}
          name={"phoneNumber"}
          t={t}
        />
        <Errors
          errors={errors}
          typeValidate={"minLength"}
          name={"phoneNumber"}
          t={t}
        />
        <Errors
          errors={errors}
          typeValidate={"maxLength"}
          name={"phoneNumber"}
          t={t}
        />
        <Errors
          errors={errors}
          typeValidate={"pattern"}
          name={"phoneNumber"}
          t={t}
        />
      </div>
      <div className="form-input">
        <TextArena
          placeholder={t("footer.placeholder.message.content")}
          register={{ ...register("message") }}
          name={"message"}
          type={"string"}
        />
      </div>
      <div className="button-submit">
        <button type="submit">
          <span>{t("footer.submit.content")}</span>
        </button>
      </div>
    </form>
  );
}

export default Form;
