import { Image } from "antd"
import { useParams } from "react-router-dom"
import { getPostsById } from "../../services/user"
import { Header } from "../../shared/components/Header"
import { Loading } from "../../shared/components/Loading"
import { useAxios } from "../../shared/hooks/useAxios"

export const Details = () => {

  const { id } = useParams()

  const { data, loading } = useAxios({ dataFn: () => getPostsById(id) });
  const dtObj = data?.data


  return (
    <div>
      <Header />
      {
        loading ? <Loading /> :
          <div className="flex_box" style={{ marginTop: 100 }}>
            <Image
              width={200}
              src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/newscms/2019_33/2203981/171026-better-coffee-boost-se-329p.jpg"
            />
            <div className="flex_box" style={{ marginTop: 50 }}>
              <h1>{dtObj?.title}</h1>
              <p>{dtObj?.body}</p>
            </div>
          </div>
      }


    </div>
  )
}
