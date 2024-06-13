
// Assets
import EditIcon from './../../assets/icons/edit.svg';
import TrashIcon from './../../assets/icons/trash.svg';
// Libraries
import { Table } from 'antd';
// Styles
import '../DashBoard/DashBoardStyle.scss';

const dataSource = [
  {
    key: '1',
    name: 'John Doe',
    lastName: '9:00 AM',
    position: '6:00 PM',
    email: '9 hrs'
  },
  {
    key: '2',
    name: 'Jane Smith',
    lastName: '8:30 AM',
    position: '5:30 PM',
    email: '9 hrs'
  },
  {
    key: '3',
    name: 'Bob Johnson',
    lastName: '10:00 AM',
    position: '7:00 PM',
    email: '9 hrs'
  }
];

  const columns = [
    {
      title: 'Nombre',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Entrada',
      dataIndex: 'lastName',
      key: 'lastName',
    },
    {
      title: 'Salida',
      dataIndex: 'position',
      key: 'position',
    },
    {
      title: 'Horas Trabajadas',
      dataIndex: 'email',
      key: 'email',
    }
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


const SchedulePage = () => {
  return (
    <>
      <div>SchedulePage</div>
        <div className='dashboard'>
        <h1 className='dashboard__title'>Lista de Asistencia</h1>
        <div className='dashboard__employees'>
          <div className='dashboard__employees__header'>
            <h2>Empleados</h2>
            <button>Registrar Asistencia</button>
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
          
        </div>
      </div>
    </>
    
    
  )
}

export default SchedulePage;
