import { Layout } from '@components/admin/layout'
import { Header } from '@components/admin/header'
import { UserManagement } from '@components/admin/userManagement'
import { AssetManagement } from '@components/admin/assetManagement'
import { ProductManagement } from '@components/admin/productManagement'
import { LogManagement } from '@components/admin/logManagement'
import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/react'

const Admin = () => {
  return (
    <Layout>
      <Header />
      <Tabs size="md" variant="enclosed">
        <TabList>
          <Tab>ユーザ管理</Tab>
          <Tab>備品管理</Tab>
          <Tab>製品管理</Tab>
          <Tab>貸出履歴</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <UserManagement />
          </TabPanel>
          <TabPanel>
            {/* <AssetManagement /> */}
          </TabPanel>
          <TabPanel>
            {/* <ProductManagement /> */}
          </TabPanel>
          <TabPanel>
            {/* <LogManagement /> */}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Layout>
  )
}

export default Admin
