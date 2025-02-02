import { Button } from "@mui/material"
import React, { ReactElement } from "react"
import styles from "./index.module.scss"

const RectangleButton = ({
  className,
  children,
  type,
  onClick,
  startIcon,
  backgroundColor,
  disabled
}: {
  className?: string
  children?: ReactElement | string
  type: "button" | "reset" | "submit" | undefined
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
  startIcon?: ReactElement
  backgroundColor?: string
  disabled?: boolean
}): ReactElement => {
  return (
    <>
      <Button
        disabled={disabled}
        variant="contained"
        type={type}
        className={`${className} ${styles.button}`}
        onClick={onClick}
        startIcon={startIcon}
        style={{ backgroundColor, color: "#fff" }}
      >
        {children}
      </Button>
    </>
  )
}

export default RectangleButton
