import {Box} from '@mui/material';

export default function PriceDetails({totalAmount}){
    // const {totalAmount,subTotal,tax,shipping} = props;
    return (
        <Box p='20px'>
            <Box variant='h3' component='h3'>PRICE DETAILS</Box>
            <Box sx={{bgcolor:"white",borderRadius:5,p:4,boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'}}>
                <Box sx={{color:'#86807a',borderBottom:"1px solid #86807a",pb:1}}>
                    <Box sx={{display:"flex",justifyContent:"space-between"}}>
                        <Box>Subtotal</Box>
                        <Box>{'\u20B9'}{totalAmount}</Box>
                    </Box>
                    <Box sx={{display:"flex",justifyContent:"space-between"}}>
                        <Box>Tax</Box>
                        <Box>{'\u20B9'}{199}</Box>
                    </Box>
                    <Box sx={{display:"flex",justifyContent:"space-between"}}>
                        <Box>Shipping</Box>
                        <Box color='green'>{}Free</Box>
                    </Box>
                </Box>
                <Box sx={{display:"flex",justifyContent:"space-between"}}>
                    <Box variant='h3' component='h3'>Total</Box>
                    <Box variant='h3' component='h3'>{'\u20B9'}{totalAmount}</Box>
                </Box>
            </Box>
        </Box>
    )
}