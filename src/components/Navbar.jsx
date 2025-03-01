import { Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";

const Navbar = () => {
    const [books] = useSelector((state)=>state.books);

    return (
        <Box bg="blue.500" p={4} color="white">
            
        </Box>
    )
}

export default Navbar;