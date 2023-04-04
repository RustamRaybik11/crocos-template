import { useRouter } from "next/router";
import { toast } from "react-toastify";

export const setValidationErrors = (
  errorsFromBackend: any,
  errorFunction: any
) => {
  for (const error in errorsFromBackend) {
    errorFunction(error, {
      type: "manual",
      message: errorsFromBackend[error][0],
    });
  }
};

const buildFormData = (formData: FormData, data: any, parentKey: string) => {
  if (
    data &&
    typeof data === "object" &&
    !(data instanceof Date) &&
    !(data instanceof File)
  ) {
    Object.keys(data).forEach((key) => {
      buildFormData(
        formData,
        data[key],
        parentKey ? `${parentKey}[${key}]` : key
      );
    });
  } else {
    const value = data == null ? "" : data;

    formData.append(parentKey, value);
  }
};

export const convertObjectToFormData = (data: Object) => {
  const formData = new FormData();

  buildFormData(formData, data, "");

  return formData;
};

export const displayErrorMessage = (error: string) => {
  toast.error(error, {
    position: "bottom-right",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export const displaySuccessMessage = (message: string) => {
  toast.success(message, {
    position: "bottom-right",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export const displayInfoMessage = (message: string) => {
  toast.info(message, {
    position: "bottom-right",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
export const displayPromiseMessage = (message: {
  pending: string;
  success: string;
  error: string;
}) => {
  const resolveAfter3Sec = new Promise((resolve) => setTimeout(resolve, 3000));
  toast.promise(
    resolveAfter3Sec,
    {
      pending: message.pending,
      success: message.success,
      error: message.error,
    },
    {
      position: "bottom-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    }
  );
};

// export const scrollToTop = (ref: RefObject<HTMLDivElement>) => {
//   ref.current?.scrollIntoView({behavior: "smooth"})
// }

export const getTranslateNameText = (object: any, str: string, loc = "") => {
  const newStr = str.substring(0, str.length - 2).toLocaleLowerCase();
  let routerLocale;
  if (loc !== "") {
    const { locale } = useRouter();
    routerLocale = locale;
  }

  if (object)
    return object[`${newStr}${loc ?? routerLocale}`] || object[`${str}`];
};
