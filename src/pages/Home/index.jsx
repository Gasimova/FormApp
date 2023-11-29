import { Flex } from "antd"
import { CardBox } from "../../shared/components/Card"
import { Header } from "../../shared/components/Header"

export const Home = () => {
  return (
    <div>
      <Header />
      <Flex wrap="wrap" gap='small' flex="display" justify="space-evenly">
        <CardBox />
        <CardBox />
        <CardBox />
        <CardBox />
        <CardBox />
      </Flex>
    </div>
  )
}
