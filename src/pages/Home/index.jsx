import { Flex } from "antd"
import { useNavigate } from "react-router-dom"
import { getPosts } from "../../services/user"
import { CardBox } from "../../shared/components/Card"
import { Header } from "../../shared/components/Header"
import { Loading } from "../../shared/components/Loading"
import { useAxios } from "../../shared/hooks/useAxios"

export const Home = () => {

  const { data, loading } = useAxios({ dataFn: getPosts });
  const posts  = data?.data

  const navigate = useNavigate()

  return (
    <div>
      <Header />
      {
        loading ? <Loading /> :
          <Flex wrap="wrap" gap='large' flex="display" justify="space-evenly">
            {
              posts?.map((dt)=>{
                return <CardBox {...dt} onClick={()=> navigate("/detail/" + dt.id)} />
              })
            }
          </Flex>
      }

    </div>
  )
}
