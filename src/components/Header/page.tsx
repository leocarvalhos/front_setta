import { Flex, Image } from '@chakra-ui/react';

export default function Header() {
    return (
        <Flex align='center' backgroundColor='#F2CB13' height='14vh' p='0px 60px' borderRadius='0px 0px 20px 20px'>
            <Image src='https://www.gruposetta.com/wp-content/uploads/2022/04/setta.png' height={16} />
        </Flex>

    )
}