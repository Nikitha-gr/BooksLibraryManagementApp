import { Box, Flex } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { Link as RouterLink} from "react-router-dom";

const Navbar = () => {
    const [books] = useSelector((state)=>state.books);

    return (
        <Box bg="blue.500" p={4} color="white">
            <Flex justifyContent={"space-evenly"} align="center">
                <Heading>My Library</Heading>
                <Flex gap={4} align="center">
                    <Link as={RouterLink} to="/">Home</Link>
                    <Link as={RouterLink} to="/login">Login</Link>
                    <Link as={RouterLink} to="/register">Register</Link>

                </Flex>
            </Flex>
        </Box>
    )
}

export default Navbar;