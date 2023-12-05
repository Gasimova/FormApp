import { Flex, notification } from "antd"
import { useMemo, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getPosts , deletePosts} from "../../services/user"
import { CardBox } from "../../shared/components/Card"
import { Header } from "../../shared/components/Header"
import { Loading } from "../../shared/components/Loading"
import { ModalBox } from "../../shared/components/ModalBox"
import { useAxios } from "../../shared/hooks/useAxios"
import { GlobalProvider, useGloablProvider } from "../../shared/store/globalProvider"
import { PROVIDER_TYPE } from "../../shared/store/type"

export const Home = () => {
  const [open, setOpen] = useState(false);
  const [post, setPost] = useState(null);
  const { state, dispatch } = useGloablProvider()

  const handleOk = () => {
    deletePosts(post.id).then(() => {
      setOpen(false);
      dispatch({ type: PROVIDER_TYPE.REMOVE_POST, payload: post.id })
      openNotification('topRight')
    }).catch(() => console.log('error'))
  };

  const handleCancel = () => {
    setOpen(false);
  };



  const { loading } = useAxios({
    dataFn: getPosts, onSuccess: (res) => {
      dispatch({ type: PROVIDER_TYPE.FILL_POSTS, payload: res?.data })
    }
  });
  const posts = useMemo(()=>state?.posts, [state?.posts]) 

  const navigate = useNavigate()

  const [api, contextHolder] = notification.useNotification();

  const openNotification = (placement) => {
    api.info({
      message: ``,
      description: `Post uğurla silindi`,
      placement,
      type:"success"
    });
  };

  return (
    <>
    {contextHolder}
      <Header />
      {
        loading ? <Loading /> :
          <Flex wrap="wrap" gap='large' flex="display" justify="space-evenly">
            {
              posts?.map((dt) => {
                return <CardBox {...dt}
                  onRemove={() => { setOpen(true);; setPost(dt) }}
                  onClick={() => navigate("/detail/" + dt.id)} />
              })
            }
          </Flex>
      }
      <ModalBox post={post} open={open} handleCancel={handleCancel} handleOk={handleOk} />
    </>
  )
}
