import { Box, CircularProgress } from "@mui/material"

export const Load = () => {
    return (
        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw', height: '100vh'}}>
            <CircularProgress />
        </Box>
    )
}