import { EditOutlined, DeleteOutlined, EyeOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Meta } = Card;
export const CardBox = ({title, body, id, onClick, onRemove}) => {

  const navigate = useNavigate()
  
  return (
    <>
   <Card
    style={{ width: 300, cursor: 'pointer' }}
    cover={
      <img
        alt="example"
        src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/newscms/2019_33/2203981/171026-better-coffee-boost-se-329p.jpg"
      />
    }
    
    actions={[
      <EyeOutlined key="setting" onClick={onClick} />,
      <EditOutlined key="edit" onClick={()=> navigate("/detail_setting/" + id)} />,
      <DeleteOutlined onClick={onRemove}/>
    ]}
  >
    <Meta
      avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
      title={title}
      description={body}
      onClick={onClick}
    />
  </Card>
    </>
  )
}
