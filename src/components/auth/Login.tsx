import { Button, Container, TextField, Typography } from "@mui/material"
// import bgColor from '../../assets/bgcover.jpg';
import logo from '../../assets/Expensio.png';
import { useState } from "react";

const Login = () => {

    const [isLogin, setIsLogin] = useState(true);

    const toggleLogin = () => setIsLogin(pre => !pre);

    return (
        <Container component={'main'} sx={{
            width: '100vw',
            maxWidth: {
                lg: '100vw'
            },
            height: '100vh',
            padding: {
                lg: 0,
                md: 0,
                sm: 0,
                xs: 0
            },
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>

            {/* <img src={bgColor} style={{
                width: '100vw',
                height: '100vh',
                position: 'absolute',
                objectFit: 'cover',
                zIndex: -1
            }} /> */}

            <Container component={'div'} maxWidth="md" sx={{
                minHeight: '600px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
                bgcolor: 'red',
                color: 'white',
            }}>

                <img src={logo} style={{
                    width: '20rem',
                    height: '15rem',
                    objectFit: 'contain',
                    margin: 'auto',
                }} />


                <form style={{
                    display: 'flex',
                    flexDirection: 'column',
                }}>

                    {
                        isLogin ?
                            <>
                                <Typography variant="overline" sx={{ display: 'block' }}>
                                    Email
                                </Typography>

                                <TextField
                                    id="email"
                                    variant="outlined"
                                    size="small"
                                    sx={{
                                        "& .MuiInputBase-root": {
                                            border: '1px solid white',
                                            bgcolor: 'white',
                                            borderRadius: '5px',
                                            outline: 'none',
                                            height: "40",
                                            fontSize: "0.85em",
                                            marginBottom: '2rem'
                                        }
                                    }}
                                />

                                <Typography variant="overline" sx={{ display: 'block' }}>
                                    Password
                                </Typography>

                                <TextField
                                    id="password"
                                    variant="outlined"
                                    size="small"
                                    sx={{
                                        "& .MuiInputBase-root": {
                                            border: '1px solid white',
                                            bgcolor: 'white',
                                            borderRadius: '5px',
                                            outline: 'none',
                                            height: "40",
                                            fontSize: "0.85em",
                                            marginBottom: '3rem'
                                        }
                                    }}
                                />


                                <Button variant="contained" sx={{ padding: '1rem', height: '40px' }}>Sign In</Button>


                                <Typography variant="overline" align="center" fontSize={'.8rem'} my={'1rem'} sx={{ display: 'block' }}>
                                    OR
                                </Typography>

                                <Button variant="outlined" sx={{ padding: '1rem', height: '40px', color: 'white', borderColor: 'white' }} onClick={toggleLogin}>Sign Un Instead</Button>
                            </>
                            :
                            <>


                                <Typography variant="overline" sx={{ display: 'block' }}>
                                    Email
                                </Typography>

                                <TextField
                                    id="email"
                                    variant="outlined"
                                    size="small"
                                    sx={{
                                        "& .MuiInputBase-root": {
                                            border: '1px solid white',
                                            bgcolor: 'white',
                                            borderRadius: '5px',
                                            outline: 'none',
                                            height: "40",
                                            fontSize: "0.85em",
                                            marginBottom: '2rem'
                                        }
                                    }}
                                />

                                <Typography variant="overline" sx={{ display: 'block' }}>
                                    Password
                                </Typography>

                                <TextField
                                    id="password"
                                    variant="outlined"
                                    size="small"
                                    sx={{
                                        "& .MuiInputBase-root": {
                                            border: '1px solid white',
                                            bgcolor: 'white',
                                            borderRadius: '5px',
                                            outline: 'none',
                                            height: "40",
                                            fontSize: "0.85em",
                                            marginBottom: '2rem'
                                        }
                                    }}
                                />



                                <Typography variant="overline" sx={{ display: 'block' }}>
                                    Confirm Password
                                </Typography>

                                <TextField
                                    id="password"
                                    variant="outlined"
                                    size="small"
                                    sx={{
                                        "& .MuiInputBase-root": {
                                            border: '1px solid white',
                                            bgcolor: 'white',
                                            borderRadius: '5px',
                                            outline: 'none',
                                            height: "40",
                                            fontSize: "0.85em",
                                            marginBottom: '3rem'
                                        }
                                    }}
                                />


                                <Button variant="contained" sx={{ padding: '1rem', height: '40px' }}>Sign Up</Button>

                                <Typography variant="overline" align="center" fontSize={'.8rem'} my={'1rem'} sx={{ display: 'block' }}>
                                    OR
                                </Typography>

                                <Button variant="outlined" sx={{ padding: '1rem', height: '40px', color: 'white', borderColor: 'white' }} onClick={toggleLogin}>Sign In Instead</Button>
                            </>
                    }


                </form>


            </Container>

        </Container>
    )
}

export default Login