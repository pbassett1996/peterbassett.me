import type { ComponentProps } from "react";
import { Toaster } from "sonner";
import "./Snackbar.css";

type SnackbarProps = ComponentProps<typeof Toaster>;

const Snackbar = ({
  toastOptions,
  style,
  position = "bottom-center",
  ...props
}: SnackbarProps) => {
  return (
    <Toaster
      position={position}
      style={{ fontFamily: "inherit", overflowWrap: "anywhere", ...style }}
      toastOptions={{
        unstyled: true,
        ...toastOptions,
        classNames: {
          toast: "snackbar-toast",
          description: "snackbar-description",
          actionButton: "snackbar-action",
          cancelButton: "snackbar-cancel",
          error: "snackbar-error",
          loading: "snackbar-loading",
          ...toastOptions?.classNames,
        },
      }}
      {...props}
    />
  );
};

export default Snackbar;
