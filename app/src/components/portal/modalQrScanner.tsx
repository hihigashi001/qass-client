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
  AspectRatio,
} from '@chakra-ui/react'

import { useQrscan } from '@states/useQrscan'
import { QrCodeReader } from '@ui/QrCodeReader'

export const QrScanner = () => {
  const { isOpenModal, resultData, useQrscanHandlers, videoRef } = useQrscan()

  return (
    <>
      <Modal
        onClose={() => useQrscanHandlers.changeCloseModal()}
        size={'sm'}
        isOpen={isOpenModal}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>QR Scan</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <AspectRatio
              maxW="250px"
              ratio={4 / 3}
              marginX={'auto'}
              marginBottom={'2'}
            >
              <QrCodeReader videoRef={videoRef} />
            </AspectRatio>
            <Text>【Result】</Text>
            <Box padding={'4'} backgroundColor={'gray.500'} rounded={'10'}>
              <Text color={'white'}>{resultData}</Text>
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button
              variant="ghost"
              onClick={() => useQrscanHandlers.changeCloseModal()}
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
