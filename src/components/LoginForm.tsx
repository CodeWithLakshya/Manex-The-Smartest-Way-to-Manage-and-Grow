'use client'
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Typography } from "@mui/material"
import { useRouter } from "next/navigation"
import { useState } from "react"

const LoginForm = () => {

    const router = useRouter()
    const [open, setOpen] = useState<boolean>(false)
    const handleResetPassword = (): void => {
        console.log('New');
    }
    const [loginDetails, setLoginDetails] = useState<{ userId: string; password: string }>({
        userId: "",
        password: ""
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;
        setLoginDetails(prevDetails => ({
            ...prevDetails,
            [name]: value
        }));
    };

    const handleLogin = (e: React.MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault();
        console.log(loginDetails);
    }

    return (
        <>
            <Box
                sx={{
                    flex: 1,
                    padding: { xs: 2, md: 4 },
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                }}
            >
                <Typography variant="h5" sx={{ mb: 3, textAlign: "center", color: 'var(--info)' }}>Log in to your account</Typography>

                <TextField
                    label="User ID"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    name="userId"
                    value={loginDetails.userId}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e)}
                />
                <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    name="password"
                    value={loginDetails.password}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e)}
                />

                <Typography
                    sx={{
                        textAlign: "right",
                        color: 'error.main',
                        fontSize: { xs: '10px', md: "14px" },
                        mt: 1,
                        cursor: "pointer",
                    }}
                    onClick={() => setOpen(true)}
                >
                    Forgot password?
                </Typography>

                <Dialog open={open} onClose={() => setOpen(false)}>
                    <DialogTitle>Reset Password</DialogTitle>
                    <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            label="User ID"
                            type="text"
                            fullWidth
                            variant="outlined"
                        />
                        <TextField
                            margin="dense"
                            label="New Password"
                            type="password"
                            fullWidth
                            variant="outlined"
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => setOpen(false)}>Cancel</Button>
                        <Button onClick={handleResetPassword}>Reset</Button>
                    </DialogActions>
                </Dialog>

                <Button
                    variant="contained"
                    color="primary"
                    sx={{
                        mt: 2,
                        padding: 2,
                        "&:hover": { backgroundColor: "var(--info)", color: 'var(--backgroundPaper)' },
                        backgroundColor: "var(--info)",
                        color: 'var(--backgroundPaper)',
                    }}
                    onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleLogin(e)}
                >
                    Log in
                </Button>

                <Typography sx={{ mt: 2, textAlign: "center", fontSize: { xs: "10px", md: '14px' }, color: 'var(--textPrimary)' }}>
                    Don't have an account?{" "}
                    <Typography onClick={() => router.replace('/signup')} component="span" sx={{ color: "var(--info)", cursor: "pointer", fontSize: { xs: "10px", md: '14px' } }}>
                        Create an account
                    </Typography>
                </Typography>
            </Box>
        </>
    )
}

export default LoginForm