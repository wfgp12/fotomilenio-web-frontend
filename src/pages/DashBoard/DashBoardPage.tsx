// Assets
import EditIcon from './../../assets/icons/edit.svg';
import TrashIcon from './../../assets/icons/trash.svg';
// Libraries
import { ConfigProvider, DatePicker, Modal, Table } from 'antd';
// Styles
import './DashBoardStyle.scss';
import { useForm } from '../../hooks/useForm';
import { useState } from 'react';

// TODO: Eliminar una vez se conecte el endpoint de listar empleados 
const dataSource = [
  {
    key: '1',
    employ: 'Mike Smith',
    position: 'Asesor',
    email: 'mikeSmith@email.com',
    cellPhone: '1234567890',
  },
  {
    key: '2',
    employ: 'John Thompson',
    position: 'Asesor',
    email: 'jhonthompson@email.com',
    cellPhone: '1234567891',
  },
];

//TODO: mover esto a un archivo de utils o un componente por separado
  const columns = [
    {
      title: 'Empleado',
      dataIndex: 'employ',
      key: 'employ',
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

  interface CreateEmployForm {
    nombre:string,
    email: string
    edad: string,
    fechaCumpleanios: string,
    salarioBase: string
  }

const DashBoardPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const {values, handleChange, setValue, resetForm} = useForm<CreateEmployForm>({
    nombre:"",
    email:"",
    edad:"",
    fechaCumpleanios:"",
    salarioBase:""
  })

  const handleOk = async () => {
    try {
      console.log(values);
      resetForm();
      setIsModalOpen(false);
    } catch (error) {
      console.error(error);
    }
  };
  const handleCancel = () => {
    resetForm();
    setIsModalOpen(false);
  };

  return (
    <div className='dashboard'>
      <h1 className='dashboard__title'>Gestión de recursos humanos</h1>
      <div className='dashboard__employees'>
        <div className='dashboard__employees__header'>
          <h2>Empleados</h2>
          <button onClick={() =>  setIsModalOpen(true)}>Crear empleado</button>
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

      <Modal
        title="Crear ficha técnica"
        open={isModalOpen}
        onOk={handleOk}
        footer={[
          <button className="btn-cancel" onClick={handleCancel}>
            Cancelar
          </button>,
          <button onClick={handleOk}>Crear</button>,
        ]}
        onCancel={handleCancel}
      >
        <form className="dashboard__form">
          {Object.keys(values).map((key) => (
            <div className="dashboard__form__field">
              <label className="dashboard__form__label">{key}</label>
              {key === "fechaCumpleanios" ? (
                <ConfigProvider
                  theme={{
                    token: {
                      colorPrimaryHover: "#A40101",
                      colorBgContainer: "#FBF7FF",
                      colorBorder: "#AAA9BB"     
                    },
                  }}
                >
                  <DatePicker
                    className="dashboard__form__date"
                    onChange={(_date, dateString) =>
                      setValue("fechaCumpleanios", dateString as string)
                    }
                  />
                </ConfigProvider>
              ) : (
                <input
                  required
                  type={
                    key === "edad" ||
                    key === "salarioBase"
                      ? "number"
                      : "text"
                  }
                  value={values[key as keyof CreateEmployForm]}
                  name={key}
                  onChange={handleChange}
                />
              )}
            </div>
          ))}
        </form>
      </Modal>
    </div>
  )
}

export default DashBoardPage