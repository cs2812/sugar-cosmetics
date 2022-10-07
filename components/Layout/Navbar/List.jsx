import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import DiscountOutlinedIcon from "@mui/icons-material/DiscountOutlined";
import Link from "next/link";
import useMediaQuery from '@mui/material/useMediaQuery';
import SearchIcon from '@mui/icons-material/Search';


const List = () => {

  const matches = useMediaQuery('(min-width:450px)');
  const [cartLength,setLength]=useState(0)
  
  //   useEffect(()=>{
  //     let l= localStorage.getItem("cartLength")
  //     setLength(l)
  // },[])

  return (
    <Box
    gap={{ sm :"30px", xs :'10px'}}
      sx={{
        display: "flex",
        minWidth: "90px",
        alignItems: "center",
      }}>
      {
        !matches && <Link href="/search">
        <SearchIcon />
      </Link>
      }
      <Link href="/account/wishlist">
        <FavoriteBorderIcon />
      </Link>
      {matches &&   <Link href="/cart">
        <ShoppingBagOutlinedIcon />
      </Link> }
      { cartLength ?<Box 
      position={"absolute"}
      border="1px solid"
      right="140px"
      top="55px"

      borderRadius={"50%"}
      boxSizing="border-box"
      pl="5px"
      pr="5px"
      backgroundColor="red"
      >{cartLength}</Box>:""}
     <Link href="/offers">
        <DiscountOutlinedIcon />
      </Link>
    </Box>
  );
};

export default List;
