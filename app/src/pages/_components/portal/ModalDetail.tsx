import { Dispatch, SetStateAction } from 'react'
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
  SimpleGrid,
  Divider,
} from '@chakra-ui/react'
import { IAsset } from 'src/states/types'

type Props = {
  isOpen: boolean
  result: IAsset
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export const Detail = ({ isOpen, result, setIsOpen }: Props) => {
  const onClose = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <Modal onClose={onClose} size={'sm'} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{result.id}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Divider />
            <SimpleGrid columns={2} spacing={2}>
              <Text>ステータス</Text>
              <Text>{statusToString(result.status)}</Text>
              <Text>SIM</Text>
              <Text>{result.simId}</Text>
              <Text>購入日</Text>
              <Text>{result.buyDate}</Text>
              <Text>備考</Text>
              <Text>{result.note}</Text>
            </SimpleGrid>
            <Divider />
            <SimpleGrid columns={2} spacing={2}>
              <Text>カテゴリ名</Text>
              <Text>{result.categoryId.name}</Text>
              <Text>メーカー</Text>
              <Text>{result.categoryId.maker}</Text>
              <Text>型番</Text>
              <Text>{result.categoryId.model}</Text>
              <Text>付属品</Text>
              <Text>{result.categoryId.accessories}</Text>
            </SimpleGrid>
            <Divider />
            <SimpleGrid columns={2} spacing={2}>
              <Text>貸出所属</Text>
              <Text>{result.userId.department}</Text>
              <Text>貸出氏名</Text>
              <Text>{result.userId.name}</Text>
            </SimpleGrid>
            <Divider />
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" onClick={onClose}>
              キャンセル
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

const statusToString = (value: string) => {
  if (value == 'active') return "貸出可能"
  if (value == 'inActive') return "貸出中"
  return "故障中"
}