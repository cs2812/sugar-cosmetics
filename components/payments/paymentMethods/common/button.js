import {Box,Button} from '@mui/material';
import { useRouter } from 'next/router';

export default function ButtonEl ({amount,disabled}){
   const handleBtn=()=>{
    router.push("/")
    localStorage.removeItem("cartLength")

}

    const router = useRouter();
    return (
        <Box>
            <Button onClick={()=>{handleBtn()}} disabled={disabled} sx={{bgcolor:'black',borderRadius:'10px','&:hover':{bgcolor:'black'}}} variant='contained'>PROCEED TO PAYMENT{`(\u20B9${amount})`}</Button>
        </Box>
    )
}