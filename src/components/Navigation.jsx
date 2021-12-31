import { Flex, Link, ListItem, UnorderedList } from "@chakra-ui/react";
// import { Link } from "react-router-dom";

// import { UnorderedList, ListItem } from "@chakra-ui/react";

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

// {navLinks.map((link, index) => {
//     <ListItem key={index}>
//         <Link to={link.path}>{link.title}</Link>
//     </ListItem>;
// })}
// <UnorderedList color="red.500" w="auto" h="30px">
// <ul>
//     {navLinks.map((link, index) => {
//         <li key={index}>{link.title}</li>;
//     })}
// </ul>
// </UnorderedList>
const Navigation = () => {
    return (
        <Flex
            bg="hiColor.20"
            w="100%"
            h="70px"
            justifyContent="space-between"
            align="center"
        >
            <UnorderedList
                styleType="none"
                display="flex"
                alignItems="center"
                h="45px"
                w="120px"
            >
                {navLinks.map((link, index) => (
                    <ListItem key={index} bg="tan" listStylePosition="inside">
                        <Link color="red.500" to={link.path}>
                            {link.title}
                        </Link>
                    </ListItem>
                ))}
            </UnorderedList>
        </Flex>
    );
};

export default Navigation;
