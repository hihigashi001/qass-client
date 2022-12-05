import { Dispatch, SetStateAction } from 'react'
import { useZxing } from 'react-zxing'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  Box,
} from '@chakra-ui/react'

type Props = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  result: string;
  setResult: Dispatch<SetStateAction<string>>;
}


export const QrScanner = ({isOpen, setIsOpen, result, setResult}:Props) => {
  const { ref } = useZxing({
    onResult(result) {
      setResult(result.getText())
    },
  })
  const onClose = () => { setIsOpen(!isOpen) }

  return (
    <>
      <Modal onClose={onClose} size={'sm'} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>QR Scan</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <video ref={ref} />
            <Text>【Result】</Text>
            <Box padding={'4'} backgroundColor={'gray.500'} rounded={"10"}>
              <Text color={'white'}>{result}</Text>
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose} colorScheme="blue">
              OK
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Chancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
