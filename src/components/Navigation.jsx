import { Flex, Button, Link } from "@chakra-ui/react";

const Navigation = () => {
    return (
        <Flex
            bg="hiColor.20"
            w="100%"
            h="70px"
            justifyContent="space-between"
            align="center"
        >
            <Button w="100px">HELLO</Button>
            <Flex bg="purple" w="20%" h="40px">
                <Link>HOME</Link>
                <Link>ABOUT</Link>
                <Link>CONTACT</Link>
            </Flex>
        </Flex>
    );
};

export default Navigation;
