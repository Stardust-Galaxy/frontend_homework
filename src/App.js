import React, { useState } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import logo from './logo.svg'; // Make sure to import your logo image
import TooltipMenu from "./components/navigation/TooltipMenu";
import NavBar from "./components/navigation/NavBar";
function App() {
    const [uploadStatus, setUploadStatus] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);
    const [activeTooltip, setActiveTooltip] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedFile(file);
        }
    };

    const handleFileUpload = () => {
        if (!selectedFile) {
            setUploadStatus('Please select a file');
            return;
        }
        const formData = new FormData();
        formData.append('image', selectedFile);
        fetch('https://your-backend-endpoint/upload', {
            method: 'POST',
            body: formData
        })
            .then(response => {
                if (response.ok) {
                    setUploadStatus('Upload successful');
                } else {
                    setUploadStatus('Upload failed');
                }
            })
            .catch((error) => {
                console.error('Error:', error);
                setUploadStatus('Upload failed');
            });
    };

    return (
        <Router>
            <NavBar logo={logo} />
        </Router>
    );
}

export default App;
