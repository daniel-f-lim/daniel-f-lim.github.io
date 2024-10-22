import React, { useState, useEffect } from 'react';

function GSheet() {
	const [data, setData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vSK8BjB-GqTnwQDR2KpN13fB0-3g1E0epXfHAuMlSaxkn-Ww-6L0fNQg-WzN4Zb5HWS36yepLxipvrR/pub?output=csv');
			const text = await response.text();
			const rows = text.split('\n');
			const parsedData = rows.map(row => row.split(','));
			setData(parsedData);
		};
		fetchData();
	}, []);

	return (
		<div>
			<h1>Google Sheet</h1>
			<div>
				<table>
					<thead>
						<tr>
							{data.length > 0 ? data[0].map((field, index) => (
								<th>{field}</th>
							)) : "No Header Data" }
						</tr>
					</thead>
					<tbody>
						{data.length > 0 ? data.slice(1).map((row, rowindex) => (
						<tr>
							{row.map((cell, cellindex) => (
							<td>{cell}</td>
							))}
						</tr>
						)) : "No Body Data" }
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default GSheet;