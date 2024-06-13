// Assets
import EditIcon from './../../assets/icons/edit.svg';
import TrashIcon from './../../assets/icons/trash.svg';
// Libraries
import { Table } from 'antd';
// Styles
import './DashBoardStyle.scss';

const dataSource = [
  {
    key: '1',
    name: 'Mike',
    lastName: 'smith',
    position: 'Asesor',
    email: 'mikeSmith@email.com',
    cellPhone: '1234567890',
  },
  {
    key: '2',
    name: 'John',
    lastName: 'Thompson',
    position: 'Asesor',
    email: 'jhonthompson@email.com',
    cellPhone: '1234567891',
  },
];

  const columns = [
    {
      title: 'Nombre',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Apellido',
      dataIndex: 'lastName',
      key: 'lastName',
    },
    {
      title: 'Puesto',
      dataIndex: 'position',
      key: 'position',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Celular',
      dataIndex: 'cellPhone',
      key: 'cellPhone',
    },
    {
      title: 'Acciones',
      // dataIndex: 'address',
      render: () => <>
        <button className='dashboard__employees__button-action' onClick={() => null}><img src={EditIcon} alt='edit icon'/></button>
        <button className='dashboard__employees__button-action' onClick={() => null}><img src={TrashIcon} alt='trash icon'/></button>
      </>,
      key: 'actions',
      width: '150px',
    },
  ];
  const SchedulesColumns = [
    {
      title: 'Dia',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Hora entrada',
      dataIndex: 'clock-in',
      key: 'clock-in',
    },
    {
      title: 'Hora salida',
      dataIndex: 'clock-out',
      key: 'clock-out',
    },
    {
      title: 'Horas',
      dataIndex: 'hours',
      key: 'hours',
    }
  ];

const DashBoardPage = () => {

  return (
    <div className='dashboard'>
      <h1 className='dashboard__title'>Gestión de recursos humanos</h1>
      <div className='dashboard__employees'>
        <div className='dashboard__employees__header'>
          <h2>Empleados</h2>
          <button>Crear empleado</button>
        </div>
        <Table dataSource={dataSource} columns={columns} />
      </div>
      <div className='dashboard__content'>
        <div className='dashboard__content__card'>
          <div className='dashboard__content__card__header'>
            <h2>Nomina</h2>
            <span>Gestionar la información de las nóminas de los empleados</span>
          </div>
        </div>
        <div className='dashboard__content__card'>
          <div className='dashboard__content__card__header'>
            <h2>Eventos</h2>
            <span>Próximos cumpleaños, aniversarios laborales y vacaciones de los empleados</span>
          </div>
          
        </div>
        <div className='dashboard__content__card'>
          <div className='dashboard__content__card__header'>
            <h2>Horarios</h2>
            <span>Controlar los horarios de trabajo de los empleados</span>
          </div>
          <Table columns={SchedulesColumns} dataSource={[]}></Table>
        </div>
      </div>
    </div>
  )
}

export default DashBoardPage