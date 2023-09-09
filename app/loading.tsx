"use client";
//isso abaixo é do react-spinners a bibliotreca o bounce loader
import { BounceLoader } from "react-spinners";

import Box from "@/components/Box";

const Loading = () => {
  return ( 
    <Box className="h-full flex items-center justify-center">
      <BounceLoader color="#22c55e" size={40} />
    </Box>
  );
}
 
export default Loading;