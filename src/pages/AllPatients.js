import {useEffect, useState} from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom'

import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

function App() {
	const [data, setData] = useState([]);
	const [redirectPath, setRedirectPath] = useState(null);

	const columns = [{
		dataField: 'email',
		text: 'E-Mail'
	  }, {
		dataField: 'first_name',
		text: 'First Name'
	  }, {
		dataField: 'last_name',
		text: 'Last Name'
	  }];

	const rowEvents = {
		onClick: (e, row, rowIndex) => {
			setRedirectPath(`/patient/${row.id}`)
		}
	};

	const pagination = paginationFactory({
		page: 1,
		sizePerPage: 5,
		hideSizePerPage: true
	  });	  

	useEffect(() => {
		axios.get("https://alexgr.ro/ehealth/patients.json").then(response => {
			setData(response.data);
		})
	}, [])

	if (redirectPath) {
		return (
			<Redirect to={redirectPath}/>
		)
	}

	return (
		<div class="container">
			<h3>Patients</h3>

			<BootstrapTable
				keyField='id'
				data={ data }
				columns={ columns }
				rowEvents={ rowEvents }
				hover={ true } 
				pagination={ pagination }/>
		</div>
	);
}

export default App;
