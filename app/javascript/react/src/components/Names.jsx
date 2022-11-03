import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { useState, useEffect } from 'react'
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import './styles.css';

const Names = () => {
  const [newName, setNewName] = useState('');
  const [nameList, setNameList] = useState([]);

  const fetchNames = () => {
    fetch('/names').then(res => res.json()).then((result) => { setNameList(result.items) });
  };

  useEffect(() => {
    fetchNames();
    setInterval(fetchNames, 5000);
  }, [setNameList]);

  const handleChange = (e) => {
    setNewName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('/names', {
      name: {
        name: newName,
      },
    }).then((response) => {
      setNameList([response.data.name, ...nameList]);
      setNewName('');
    }).catch((error) => {
      toast.error('That name already exists');
    });
  };

  const handleGenerate = () => {
    axios.get('/generate').then((response) => setNewName(response.data.name));
  };


  return (
    <Container className="p-5">
      <h1 className="text-center mb-5">Boca Chondor</h1>
      <Form onSubmit={handleSubmit}>
        <Row className="justify-content-center mb-2">
          <Col md="6">
            <InputGroup className="mb-3">
              <Button variant="success" onClick={handleGenerate}>Generate a Name</Button>
              <Form.Control className="text-center" type="text" placeholder="Enter the name" onChange={handleChange} value={newName} />
            </InputGroup>
          </Col>
        </Row>
        <Row className="justify-content-center mb-5">
          <Button variant="primary" type="submit" className="w-25">Submit</Button>
        </Row>
      </Form>
      <Row className="justify-content-start">
        {nameList.map(({ id, pretty_name }) => (
          <Col key={id} lg={true} className="mb-5" style={{ minWidth: '300px', maxWidth: '300px' }}>
            <Card>
              <Card.Body>
                <Card.Title className="text-center mb-0">
                  {pretty_name}
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <ToastContainer />
    </Container>
  );
}

export default Names
