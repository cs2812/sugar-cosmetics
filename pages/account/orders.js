import AccountNavigation from "../../components/account/accountNavigation";
import Grid from '@mui/material/Grid';
import {useRouter} from 'next/router';
import EmptyAccount from "../../components/account/emptyAccount";
import React from 'react';
import axios from 'axios';
import Layout from "../../components/Layout/Layout";

export default function Order (){
    const router = useRouter();
    const [user,setUser] = React.useState({});

    React.useEffect(()=>{
        axios({
            method:'GET',
            url:"https://sugarcosmetucs.vercel.app/api/wishlist/get",
            headers:{
                'token':`${JSON.parse(localStorage.getItem('token')).primaryToken}`
            }
        }).then((res)=>setUser(res.data)).catch((err)=>console.log(err));
    },[])
    return (
        <Layout>
            <div style={{padding:'2%',backgroundColor:'#f2f2f2',marginTop:'60px'}}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={3}>
                        <AccountNavigation nav={router.pathname} user={user}/>
                    </Grid>
                    <Grid item xs={9}>
                        <EmptyAccount image={'https://media.sugarcosmetics.com/upload/ic_empty_order%201.png'} msg={`Order is empty`} text={'What! No order yet? Get going already!'} button={'Shop Now'} onClick={()=>router.push("/")}/>
                    </Grid>
                </Grid>
            </div>
        </Layout>
    )
}