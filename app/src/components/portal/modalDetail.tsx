import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  SimpleGrid,
  Divider,
} from '@chakra-ui/react'
import { useDetail } from '@states/zustand/portal/useDetail'
import { statusToJapanese } from '@lib/functions'

export const Detail = () => {
  const { isShowModal, detailData, useDetailHander } = useDetail()

  return (
    <>
      <Modal
        onClose={() => useDetailHander.changeShowModal()}
        size={'sm'}
        isOpen={isShowModal}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{detailData.id}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Divider />
            <SimpleGrid columns={2} spacing={2}>
              <Text>ステータス</Text>
              <Text>{statusToJapanese(detailData.status)}</Text>
              <Text>SIM</Text>
              <Text>{detailData.simId}</Text>
              <Text>購入日</Text>
              <Text>{detailData.buyDate}</Text>
              <Text>備考</Text>
              <Text>{detailData.note}</Text>
            </SimpleGrid>
            <Divider />
            <SimpleGrid columns={2} spacing={2}>
              <Text>製品名</Text>
              <Text>{detailData.productId.name}</Text>
              <Text>メーカー</Text>
              <Text>{detailData.productId.maker}</Text>
              <Text>型番</Text>
              <Text>{detailData.productId.model}</Text>
              <Text>付属品</Text>
              <Text>{detailData.productId.accessories}</Text>
              <Text>カテゴリ</Text>
              <Text>{detailData.productId.category}</Text>
            </SimpleGrid>
            <Divider />
            <SimpleGrid columns={2} spacing={2}>
              <Text>貸出所属</Text>
              <Text>{detailData.userId.department}</Text>
              <Text>貸出氏名</Text>
              <Text>{detailData.userId.name}</Text>
            </SimpleGrid>
            <Divider />
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
