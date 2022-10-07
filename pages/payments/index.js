import {Box,Grid} from '@mui/material';
import PriceDetails from '../../components/payments/priceDetails';
import CartSummary from '../../components/payments/cartSummary';
import PaymentMethods from '../../components/payments/paymentMethods';
import React from 'react';
import Layout from '../../components/Layout/Layout';
import axios from 'axios';

// const data = [{img:'https://cdn.shopify.com/s/files/1/0906/2558/products/moisturiser.jpg?v=1626968292',item:'Aquaholic Priming Moisturizer',price:"499",qty:1},{img:'https://cdn.shopify.com/s/files/1/0906/2558/products/moisturiser.jpg?v=1626968292',item:'Aquaholic Priming Moisturizer',price:"499",qty:2},{img:'https://cdn.shopify.com/s/files/1/0906/2558/products/moisturiser.jpg?v=1626968292',item:'Aquaholic Priming Moisturizer',price:"499",qty:1}];
// const data = [{img:'https://cdn.shopify.com/s/files/1/0906/2558/products/moisturiser.jpg?v=1626968292',item:'Aquaholic Priming Moisturizer',price:"499",qty:1}]
// const taxRate = 0.152545;

export default function Payments(){
    const [totalAmount, setTotalAmount] = React.useState(0);
    const [cartItems, setCartItems] = React.useState([]);
    
    let getData = async () => {
    
        let d = JSON.parse(localStorage.getItem("token"))
    
        try{
          let data = await axios.get("http://localhost:3000/api/cart", {
            headers : {
              token : d.primaryToken
            }
          })
    
          setCartItems(data.data.cart.cartData)
          
        }
        catch(E){
          console.log("error",E)
        }
      }

    React.useEffect(()=>{
        getData()
        let t = localStorage.getItem("total")
        setTotalAmount(t)
    },[])

   

    const props = {totalAmount:totalAmount};

    return (
        <Layout>
            <Box sx={{m:1,mt:'60px',bgcolor:'#f2f2f2',height:'100vh'}}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={1} sm={3} md={5}>
                            <Box>
                                <PriceDetails totalAmount={totalAmount} />
                                <CartSummary cartItems={cartItems}/>
                            </Box>
                    </Grid>
                    <Grid item xs={3} sm={5} md={7}>
                            <Box>
                                <PaymentMethods amount={totalAmount}/>
                            </Box>
                    </Grid>
                </Grid>
            </Box>
        </Layout>
    )
}