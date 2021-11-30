import { Table } from 'antd';
import { useNavigate } from "react-router-dom";

const AdminUsers = (props) => {
    const dataSoure = [];
    for (let i = 0; i < 46; i++) {
        dataSoure.push({
            key: i,
            name: `Admin${i}`,
            age: 32,
            address: `深圳---. ${i}`,
        });
    }
    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
        },
        {
          title: 'Age',
          dataIndex: 'age',
        },
        {
          title: 'Address',
          dataIndex: 'address',
        },
    ];
    const navigate = useNavigate();
    return(
        <div>
            <Table 
            columns={columns} 
            dataSource={dataSoure} 
            onRow={item => {
                return {
                    onClick: event => {
                        navigate(`/users/detail`);
                    }
                }
            }}
            />
        </div>
    );
}

export default AdminUsers;