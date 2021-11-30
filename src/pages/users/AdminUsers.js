import { Table } from 'antd';

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
    return(
        <div>
            <Table columns={columns} dataSource={dataSoure} />
        </div>
    );
}

export default AdminUsers;