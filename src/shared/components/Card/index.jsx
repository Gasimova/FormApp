import { EditOutlined, EllipsisOutlined, EyeOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Meta } = Card;
export const CardBox = ({title, body, id, onClick}) => {

  const navigate = useNavigate()
  
  return (
    <>
   <Card
    style={{ width: 300, cursor: 'pointer' }}
    cover={
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
    
    actions={[
      <EyeOutlined key="setting" onClick={onClick} />,
      <EditOutlined key="edit" onClick={()=> navigate("/detail_setting/" + id)} />,
      <EllipsisOutlined key="ellipsis" />,
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
