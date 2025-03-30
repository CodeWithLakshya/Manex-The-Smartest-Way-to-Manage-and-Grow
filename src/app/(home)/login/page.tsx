import { Box, Toolbar, Typography } from "@mui/material"
import LoginForm from "@/components/LoginForm"

const Login = () => {
    return (
        <>
            <Toolbar />
            <Box
                sx={{
                    minHeight: "calc(100vh - 64px)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    background: "linear-gradient(to bottom, #1E3A8A, #3B82F6 70%, #FFFFFF)", // Purple to White Gradient
                    padding: 2,
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" }, // Responsive layout
                        backgroundColor: "white",
                        borderRadius: 3,
                        boxShadow: 6,
                        overflow: "hidden",
                        maxWidth: "900px",
                        width: "100%",
                        padding: { xs: 2, md: 4 },
                    }}
                >
                    {/* Left Side - Illustration */}
                    <Box
                        sx={{
                            flex: 1,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: 2,
                        }}
                    >
                        <Box textAlign="center" sx={{color: 'black'}}>
                            <Typography variant="h4" sx={{mb: 1, fontWeight: 700}} gutterBottom>
                                MANEX
                            </Typography>
                            <Typography variant="body2" sx={{mb: 1}} gutterBottom>
                                The Smartest Way to Manage and Grow
                            </Typography>
                            <Typography variant="body1" sx={{textAlign: 'justify'}}>
                            Manex is a modern, cloud-based client management system (CMS) designed to streamline client interactions and business operations for service providers. Developed with flexibility and scalability in mind, Manex enables organizations to efficiently manage client relationships, track interactions, and optimize workflows - all from a centralized, intuitive platform.
                            </Typography>
                        </Box>
                    </Box>

                    {/* Right Side - Login Form */}
                    <LoginForm />
                </Box>
            </Box>
        </>
    )
}

export default Login