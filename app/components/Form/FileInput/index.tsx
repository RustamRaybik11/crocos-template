import React, { SyntheticEvent, useState } from "react";
import { ChangeHandler } from "react-hook-form";
import styles from "./styles.module.scss";
import classNames from "classnames";
// import Download from "../../../icons/download";
import { useTranslation } from "next-i18next";
type Props = {
  className?: string;
  register?: {
    onChange: ChangeHandler;
    onBlur: ChangeHandler;
    ref: React.Ref<any>;
    name: string;
  };
  placeholder?: string | React.ReactNode;
  name?: string;
  accept?: string;
  multiple?: boolean;
  icon?: React.ReactElement;
  showIcon?: boolean;
  hideAttachedFileNames?: boolean;
  afterImageUpload?: (files: File[]) => void;
  handleChange?: (files: File[]) => void;
  disabled?: boolean;
};

const FileInput: React.FC<Props> = ({
  className,
  register,
  placeholder,
  name,
  accept,
  multiple,
  icon,
  showIcon,
  hideAttachedFileNames,
  afterImageUpload,
  handleChange,
  disabled,
}) => {
	const { t } = useTranslation();
  const [attachedFiles, setAttachedFiles] = useState<{ name: string }[]>([]);

  const onChange = (event: any) => {
    setAttachedFiles(event.target.files ? [...event.target.files] : []);
    if (handleChange) {
      handleChange([...event.target.files]);
    } else {
      register?.onChange(event);
      if (afterImageUpload) {
        afterImageUpload([...event.target.files]);
      }
    }
  };

  console.log(attachedFiles);

  return (
    <>
      <input
        ref={register?.ref}
        onChange={onChange}
        onBlur={register?.onBlur}
        className={classNames(styles.input)}
        name={register?.name || name}
        id={register?.name || name}
        type="file"
        accept={accept || "application/pdf, .png, .jpg, .docx, .xlsx"}
        multiple={multiple}
        disabled={disabled}
      />
      <label
        className={classNames(
          styles.label,
          styles.fileInputLabel,
          className,
          attachedFiles[0]?.name ? styles.grey : ""
        )}
        htmlFor={register?.name || name}
      >
        {attachedFiles[0]?.name ? `${t("document_loaded")}` : placeholder}
        {icon ?? ""}
      </label>
      {!hideAttachedFileNames &&
        attachedFiles.map((file, index) => (
          <small key={index}>{file.name}</small>
        ))}
    </>
  );
};

export default FileInput;
