import {Box} from '@mui/material';



export default function CartSummary({cartItems}){
    return (
        <Box pl="20px" mt="-25px" boxSizing={"border-box"}>
            <h3>CART SUMMARY</h3>
            <Box sx={{bgcolor:"white",borderRadius:5,p:4,boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'}}>
                {cartItems && cartItems.map((el)=><CartSummaryCard key={el.img} el={el}/>)}
            </Box>
        </Box>
    )
}

/*


*/
function CartSummaryCard ({el}){
    return (
        <Box sx={{display:"flex",gap:'10px',justifyContent:'space-between'}}>
            <Box sx={{display:"flex",gap:'10px'}}>
                <img src={el.poster}
                    width='50px' 
                    height='50px' 
                    alt='cartItem'/>
                <Box>
                    <Box sx={{color:'#54474d'}}>{el.productName}</Box>
                    <Box variant='h5' component='h5' mt="3px">{'\u20B9'}{" "}{el.price}</Box>
                </Box>
            </Box>
            <Box sx={{color:"#54474d"}}>
                <Box></Box>
                <Box>Qty:{el.quantity}</Box>
            </Box>
        </Box>
    )
}