import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react';
interface Props {
    isOpen: boolean,
    onClose: any
}
export function CreateMachine({ isOpen, onClose }: Props) {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Cadastro de Máquina</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <FormControl>
                        <FormLabel>Modelo</FormLabel>
                        <Input />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Ano</FormLabel>
                        <Input />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Latitude</FormLabel>
                        <Input />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Longitude</FormLabel>
                        <Input />
                    </FormControl>
                </ModalBody>

                <ModalFooter>

                    <Button onClick={onClose} background='#D82727' mr='13px'>Cancelar</Button>
                    <Button background='#F2CB13' mr={3} >
                        Salvar
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}