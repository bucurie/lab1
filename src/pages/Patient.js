import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

function App() {
  	let { id } = useParams();
	const [data, setData] = useState([]);

	useEffect(() => {
		axios.get("https://alexgr.ro/ehealth/patients.json").then(response => {
			const patientData = response.data.find(entry => {
				console.log(entry);
				return entry.id == id
			});

			setData(patientData);
		})
	}, [])

	return (
		<div class="container">
			<div class="card">
				<div class="card-body">
					<h3 class="card-title">{data.first_name} {data.last_name}</h3>
			
					<div>
						<h5>Personal Data</h5>
						<p>Name: {data.first_name} {data.last_name}</p>
						<p>E-Mail: {data.email}</p>
						<p>Gender: {data.gender}</p>
					</div>
			
					<div>
						<h5>Diagnosis</h5>
						<p>Diagnosis Code: {data.diagnosis_code}</p>
						<p>Diagnosis Description: {data.diagnosis_description}</p>
						<p>Diagnosis Detailed Description: {data.diagnosis_description_detailed}</p>
						<p>Treatment: {data.administered_drug_treatment}</p>
					</div>
					<a href="/" class="card-link">Go back</a>
    			</div>
			</div>	
		</div>
		
  );
}

export default App;
