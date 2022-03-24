import { Flex, Link, ListItem, UnorderedList } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const navLinks = [
    {
        title: "Home",
        path: "/",
    },
    {
        title: "Blog",
        path: "/blog",
    },
    {
        title: "Contact",
        path: "/contact",
    },
    {
        title: "Login",
        path: "/login",
    },
];

const Navigation = () => {
    return (
        <Flex
            bg="hiColor.20"
            w="100%"
            h="70px"
            justifyContent="space-between"
            align="center"
        >
            <Link as={RouterLink} to="/">
                arojoDEV
            </Link>
            <UnorderedList styleType="none" display="flex" alignItems="center">
                {navLinks.map((link, index) => (
                    <ListItem key={index} listStylePosition="inside">
                        <Link as={RouterLink} to={link.path}>
                            {link.title}
                        </Link>
                    </ListItem>
                ))}
            </UnorderedList>
        </Flex>
    );
};

export default Navigation;
