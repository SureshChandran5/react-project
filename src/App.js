import { useState } from "react";
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';

function App() {

  const [file, setFile] = useState(null);
  const [youtubeLink, setYoutubeLink] = useState('');
  const [transcriptionMode, setTranscriptionMode] = useState('file');
  const [translationData, setTranslationData] = useState('');
  const [summaryData, setSummaryData] = useState('');

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleLinkChange = (event) => {
    setYoutubeLink(event.target.value);
  };

  const handleModeChange = (event) => {
    setTranscriptionMode(event.target.value);
  };

  const handleTranscribe = () => {
    // Add transcription logic here
    console.log('Transcribing file:', file);
    console.log('Transcribing YouTube link:', youtubeLink);
    console.log('Transcription mode:', transcriptionMode);
  };

  return (
    <>
      <div className="container">
      <h1 className="text-center my-4">Welcome to Speech to Text</h1>
      <p className="text-center">This is a simple test to welcome users to the Speech to Text application. Feel free to explore and use the features!</p>
      
      <div className="row mb-4">
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="fileInput">Select File to Transcribe</label>
            <input type="file" className="form-control" id="fileInput" onChange={handleFileChange} />
          </div>
          <div className="form-group">
            <label htmlFor="youtubeInput">Or</label>
            <input type="text" className="form-control" id="youtubeInput" placeholder="YouTube Link" value={youtubeLink} onChange={handleLinkChange} />
          </div>
          {youtubeLink && (
            <div className="mb-4">
              <label>YouTube Video</label>
              <div className="embed-responsive embed-responsive-16by9">
                <iframe
                  className="embed-responsive-item"
                  src={`https://www.youtube.com/embed/${youtubeLink.split('v=')[1]}`}
                  allowFullScreen
                  title="YouTube Video"
                ></iframe>
              </div>
            </div>
          )}
          <div className="form-group">
            <label>Transcription Mode</label>
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                name="transcriptionMode"
                id="fileMode"
                value="file"
                checked={transcriptionMode === 'file'}
                onChange={handleModeChange}
              />
              <label className="form-check-label" htmlFor="fileMode">File</label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                name="transcriptionMode"
                id="inlineMode"
                value="inline"
                checked={transcriptionMode === 'inline'}
                onChange={handleModeChange}
              />
              <label className="form-check-label" htmlFor="inlineMode">Inline</label>
            </div>
          </div>
          <button className="btn btn-success mb-4" onClick={handleTranscribe}>Go</button>
        </div>
        <div className="col-md-6">
          
          <div className="row">
            <div className="col-12 mb-4">
              <div className="form-group">
                <label htmlFor="translationData">Translation Data</label>
                <ReactQuill
                  value={translationData}
                  onChange={setTranslationData}
                  className="word-page"
                />
              </div>
            </div>
            <div className="col-12">
              <div className="form-group">
                <label htmlFor="summaryData">Summary Data</label>
                <ReactQuill
                  value={summaryData}
                  onChange={setSummaryData}
                  className="word-page"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="btn btn-primary" onClick={handleTranscribe}>Transcript</button>
    </div>
    </>
  );
}

export default App;


