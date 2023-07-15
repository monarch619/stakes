import { Container, Flex, Heading } from "@chakra-ui/react";
import { ConnectWallet } from "@thirdweb-dev/react";

export default function Navbar() {
    return (
        <Container maxW={"1200px"} py={4}>
            <Flex direction={"row"} justifyContent={"space-between"}>
                <Heading>TinyStakes</Heading>
                <Welcome To Our Tiny World!, Pls Connect Wallet to enjoy the ride />
            </Flex>
        </Container>
    )
}
