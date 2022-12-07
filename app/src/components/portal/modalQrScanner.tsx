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

import { useQrscan } from '@states/useQrscan'

export const QrScanner = () => {
  const { isOpenModal, resultData, useQrscanHandlers } = useQrscan()
  const { ref } = useZxing({
    onResult(result) {
      useQrscanHandlers.changeResultData(result.getText())
    },
  })

  return (
    <>
      <Modal
        onClose={() => useQrscanHandlers.changeIsOpenModal()}
        size={'sm'}
        isOpen={isOpenModal}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>QR Scan</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <video ref={ref} />
            <Text>【Result】</Text>
            <Box padding={'4'} backgroundColor={'gray.500'} rounded={'10'}>
              <Text color={'white'}>{resultData}</Text>
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button
              variant="ghost"
              onClick={() => useQrscanHandlers.changeIsOpenModal()}
            >
              キャンセル
            </Button>
            <Button
              onClick={() => useQrscanHandlers.onClickSubmit()}
              colorScheme="teal"
            >
              OK
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
