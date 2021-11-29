import { Alert, Snackbar } from '@mui/material'

type SnackProps={
  open:boolean
  close:any
  message:string
}

const SnackBar:React.FC<SnackProps> = ({open,close,message}:any) => {
    return (
      <>
        <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={close}
        >
        <Alert  severity="success">{message}</Alert>
        </Snackbar>
      </>
    )
}

export default SnackBar
