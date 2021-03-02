import cleanUp from '../utils/cleanUp.js';
import { Upload, Button, Form } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { DownloadOutlined, UploadOutlined } from '@ant-design/icons';
import {useState, useEffect} from 'react';
const { Dragger } = Upload;





export default function up () {
  const [file, setFile] = useState('');

  useEffect(()=> {
    console.log(file);
  },[file]); // display state variable after change just for checking
  

  const Parse = (file) => {
    console.log(file); // file is a blob
    var reader = new FileReader();
    reader.onload = (e) => {
        console.log('Content of file');
        const content = e.target.result; // This is the content of the file
        const j = JSON.parse(content); // Converte content of file into object
        console.log('this is the json form');
        console.log(j);
        cleanUp(j); // Send file for cleanUp
        setFile(JSON.stringify(j)); // keep contents(string) of file in a state variable for the download and upload
        return content;
      };
      reader.readAsText(file);
  }

  function handleDownload(file) {

  }

  function handleUpload(file) {
    
  }


  return (
    <Form>
      <Form.Item label ="dragger">
        <Dragger 
          accept=".txt, .har"
          showUploadList={true}
          beforeUpload={Parse} // Before pressing any buttons cleanup file
        >
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">Click or drag file to this area to upload</p>
          <p className="ant-upload-hint">
            Support for a single or bulk upload. Strictly prohibit from uploading company data or other
            band files
          </p>
        </Dragger>
      </Form.Item>
      <Form.Item>
        <Button type="primary" shape="round" icon={<DownloadOutlined />} size="large">
          Download
        </Button>
        <Button type="primary" shape="round" icon={<UploadOutlined />} size="large">
          Upload
        </Button>
      </Form.Item>

    </Form>
  )
}
