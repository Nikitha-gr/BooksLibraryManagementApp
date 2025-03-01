import { Heading } from "@chakra-ui/react";
import { useDispatch } from "react-redux";

const Login = () => {
    const dispatch = useDispatch();

    return (
        <>
        <Heading>Please Login to Continue</Heading>
        </>
    )
}

export default Login;