export interface MainButtonProps {
  type?: ButtonTypes;
  text: string;
  disabled: boolean;
}

export interface MainIconProps {
  image: string;
  onHandleClick?: (value: any) => void;
}

export interface ModalButtonProps {
  type?: ButtonTypes;
  actions: ButtonActions;
  text: string;
  onHandleClick: (value: any) => void;
}

export type ButtonTypes = "button" | "submit" | "reset";

export type ButtonActions = "delete" | "cancel";
