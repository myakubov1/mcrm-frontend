import { Container } from '@mui/material';
import PatientsTable from '../components/PatientsTable';

function Patients() {
  return (
    <Container maxWidth="xl">
      <PatientsTable />
    </Container>
  );
}
export default Patients;
