import { Box } from "@mui/system"

export const Number = ({ numero }) => {
    return (
        <Box sx={{width: '100px', height: '100px', borderRadius: '50%', backgroundColor: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            {numero}
        </Box>
    )
}