import React, { useState } from 'react';
import './App.css';
import logo from './logo.svg'; // Make sure to import your logo image

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
        <div className="App">
            <nav className="App-nav">
                <a href="/" className="logo-link">
                    <img src={logo} alt="Company Logo" className="logo" />
                </a>
                <ul>
                    <li
                        onMouseEnter={() => setActiveTooltip('about')}
                        onMouseLeave={() => setActiveTooltip(null)}
                    >
                        <a href="#about">About Us</a>
                        {activeTooltip === 'about' && (
                            <div className="tooltip">
                                <ul>
                                    <li><a href="#team">Our Team</a></li>
                                    <li><a href="#history">Our History</a></li>
                                </ul>
                            </div>
                        )}
                    </li>
                    <li
                        onMouseEnter={() => setActiveTooltip('service')}
                        onMouseLeave={() => setActiveTooltip(null)}
                    >
                        <a href="#service">Service</a>
                        {activeTooltip === 'service' && (
                            <div className="tooltip">
                                <ul>
                                    <li><a href="#consulting">Consulting</a></li>
                                    <li><a href="#support">Support</a></li>
                                </ul>
                            </div>
                        )}
                    </li>
                    <li
                        onMouseEnter={() => setActiveTooltip('pricing')}
                        onMouseLeave={() => setActiveTooltip(null)}
                    >
                        <a href="#pricing">Pricing</a>
                        {activeTooltip === 'pricing' && (
                            <div className="tooltip">
                                <ul>
                                    <li><a href="#basic">Basic</a></li>
                                    <li><a href="#premium">Premium</a></li>
                                </ul>
                            </div>
                        )}
                    </li>
                </ul>
            </nav>
            <header className="App-header">
                <h1>Image upload</h1>
                <input type="file" onChange={handleFileChange} />
                <button onClick={handleFileUpload}>Upload</button>
                {selectedFile && <p>Selected file: {selectedFile.name}</p>}
                {uploadStatus && <p>{uploadStatus}</p>}
            </header>
        </div>
    );
}

export default App;