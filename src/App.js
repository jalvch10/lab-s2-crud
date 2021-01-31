import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  Row,
  Col,
  Modal,
  Container,
  Form,
  Alert,
  Spinner
} from "react-bootstrap";

export default function App() {
  const [data, setData] = useState([
    {
      isbn: "924545320-0",
      genero: "Drama|War",
      nombre: "Battle Cry",
      autor: "Annnora Laurie",
      publicacion: "2020-12-31",
      disponible: true
    },
    {
      isbn: "529766088-2",
      genero: "Drama|Fantasy|Mystery",
      nombre: "Skellig",
      autor: "Frannie Radbourne",
      publicacion: "2014-10-10",
      disponible: false
    },
    {
      isbn: "532647595-2",
      genero: "Crime|Drama|Thriller",
      nombre: "Varg Veum - Fallen Angels (Varg Veum - Falne Engler)",
      autor: "Vladamir Mullord",
      publicacion: "2012-11-09",
      disponible: true
    },
    {
      isbn: "293438648-1",
      genero: "Drama|Mystery|Thriller",
      nombre: "Detective, The (C+ jing taam)",
      autor: "Michal Burbridge",
      publicacion: "1987-08-12",
      disponible: false
    },
    {
      isbn: "361667557-X",
      genero: "Drama|Thriller",
      nombre: "Beautiful",
      autor: "Edan Dwane",
      publicacion: "2012-04-04",
      disponible: false
    },
    {
      isbn: "946511871-0",
      genero: "Drama",
      nombre: "Last Time I Committed Suicide",
      autor: "Carma Kinsella",
      publicacion: "7/9/2015",
      disponible: false
    },
    {
      isbn: "095511803-4",
      genero: "Drama",
      nombre: "Cradle Will Rock",
      autor: "Kai Birchner",
      publicacion: "2001-04-29",
      disponible: true
    },
    {
      isbn: "869333714-9",
      genero: "Drama|Romance",
      nombre: "Message to Garcia, A",
      autor: "Mathe Wildbore",
      publicacion: "1986-05-17",
      disponible: true
    },
    {
      isbn: "816638977-0",
      genero: "Drama|Mystery",
      nombre: "Agnes of God",
      autor: "Griff Gooly",
      publicacion: "2015-10-10",
      disponible: false
    },
    {
      isbn: "274133852-3",
      genero: "Musical",
      nombre: "Opera Jawa",
      autor: "Mariya Brickstock",
      publicacion: "2003-11-10",
      disponible: false
    }
  ]);
  const [show, setShow] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const [isLoading, setIsloading] = useState(true);
  const [nombre, setNombre] = useState("");
  const [isbn, setIsbn] = useState("");
  const [genero, setGenero] = useState("");
  const [autor, setAutor] = useState("");
  const [publicacion, setPublicacion] = useState("");
  const [disponible, setDisponible] = useState("");

  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsloading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const clearInputs = () => {
    setNombre("");
    setNombre("");
    setIsbn("");
    setGenero("");
    setAutor("");
    setPublicacion("");
    setDisponible("");
    setShowAlert(false);
  };

  const handleClose = () => {
    setShow(false);
    setShowAlert(false);
  };

  const handleUpdate = (item) => {
    console.log(item);
    setShow(true);
    setNombre(item.nombre);
    setIsbn(item.isbn);
    setGenero(item.genero);
    setAutor(item.autor);
    setPublicacion(item.publicacion);
    setDisponible(item.disponible);
  };

  const saveUpdate = () => {
    let array = [];

    data.forEach((element) => {
      if (element.isbn === isbn) {
        element.isbn = isbn;
        element.nombre = nombre;
        element.genero = genero;
        element.autor = autor;
        element.publicacion = publicacion;
        element.disponible = disponible;
        array.push(element);
        console.log(array);
      }
    });
    setData((book) => [...book, array]);
    handleDelete(array);
    setShowAlert(true);
  };

  const handleDelete = (e) => {
    let array = [];
    data.forEach((element) => {
      if (element.isbn !== e.isbn) {
        array.push(element);
      }
    });
    setData(array);
  };

  const validation = () => {
    if (nombre && autor && publicacion) {
      return true;
    } else {
      alert("Llene todos los campos");
      return false;
    }
  };

  const handleAdd = () => {
    if (validation()) {
      let add = {
        isbn: isbn,
        nombre: nombre,
        genero: genero,
        autor: autor,
        publicacion: publicacion,
        disponible: disponible
      };
      setData((user) => [...user, add]);
      setShowAlert(true);
    }
  };

  const handleHideAdd = () => {
    clearInputs();
    setShowAlert(false);
    setShowAdd(false);
  };

  return (
    <div className="w3-animate-opacity">
      {isLoading ? (
        <div align="center" style={{ paddingTop: "50vh" }}>
          <Spinner style={{ color: "#fff" }} animation="border" />
          <br />
          <h6 className="w3-animate-opacity" style={{ color: "#fff" }}>
            ...Cargando
          </h6>
        </div>
      ) : (
        <div>
          <div
            align="center"
            style={{
              background: "#000",
              zIndex: 1,
              position: "fixed",
              width: "100%"
            }}
          >
            <Button
              className="w3-animate-top"
              block
              size="lg"
              variant="primary"
              style={{}}
              onClick={() => setShowAdd(!show)}
            >
              Nuevo libro
            </Button>
          </div>

          <br />

          <div align="center" style={{ paddingTop: "5vh" }}>
            <>
              {data.map((item, i) => (
                <div align="center" key={i}>
                  <Card
                    className="w3-animate-bottom"
                    style={{
                      background: "#ccc",
                      boxShadow: `6px 2px 16px 0px rgba(136, 165, 191, 0.48) , -6px -2px 16px 0px rgba(255, 255, 255, 0.8) `,
                      borderRadius: "20px",
                      padding: "1vh",
                      width: "60%"
                    }}
                  >
                    <Card.Body>
                      <Card.Header>
                        <h4 style={{ wordWrap: "break-word" }} align="center">
                          {item.nombre}
                        </h4>
                      </Card.Header>
                      <Container>
                        <Row>
                          <Col xs={12}>
                            <strong>ISBN: </strong>
                            {item.isbn}
                            <br />
                            <strong>Genero: </strong>
                            {item.genero}

                            <br />
                            <strong>Autor: </strong>
                            {item.autor}
                            <br />
                            <strong>Publicacion: </strong>
                            {item.publicacion}
                            <br />

                            {item.disponible ? (
                              <Alert
                                style={{ width: "50%", borderRadius: "10%" }}
                                show={true}
                                variant={"success"}
                              >
                                <strong>Disponible</strong>
                              </Alert>
                            ) : (
                              <Alert
                                style={{ width: "50%", borderRadius: "10%" }}
                                show={true}
                                variant={"danger"}
                              >
                                <strong>Agotado</strong>
                              </Alert>
                            )}
                          </Col>
                        </Row>
                      </Container>
                    </Card.Body>
                    <Card.Footer>
                      <Button
                        style={{ marginInline: "1vh" }}
                        onClick={() => handleUpdate(item)}
                        variant="primary"
                      >
                        Moficar
                      </Button>
                      <Button
                        style={{ marginInline: "1vh" }}
                        onClick={() => handleDelete(item)}
                        variant="danger"
                      >
                        Eliminar
                      </Button>
                    </Card.Footer>
                  </Card>
                  <br />
                  <br />
                </div>
              ))}
            </>
          </div>

          <Modal show={showAdd} onHide={handleHideAdd}>
            <Modal.Header closeButton>
              <Modal.Title>Nuevo libro</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group>
                  <Alert show={showAlert} variant={"success"}>
                    Agregado
                  </Alert>
                  <Form.Label>ISBN</Form.Label>
                  <Form.Control
                    type="text"
                    onChange={(e) => setIsbn(e.target.value)}
                    value={isbn}
                  />
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control
                    type="text"
                    onChange={(e) => setNombre(e.target.value)}
                    value={nombre}
                  />
                </Form.Group>

                <Form.Group controlId="exampleForm.SelectCustom">
                  <Form.Label>Genero</Form.Label>
                  <Form.Control
                    as="select"
                    value={genero}
                    onChange={(e) => setGenero(e.target.value)}
                  >
                    {data.map((item, i) => (
                      <option key={i}>{item.genero}</option>
                    ))}
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Autor</Form.Label>
                  <Form.Control
                    type="text"
                    onChange={(e) => setAutor(e.target.value)}
                    value={autor}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Publicacion</Form.Label>
                  <br />
                  <input
                    onChange={(e) => setPublicacion(e.target.value)}
                    value={publicacion}
                    type="date"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Check
                    checked={disponible}
                    onChange={() => setDisponible(!disponible)}
                    type="checkbox"
                    label="Disponible"
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleHideAdd}>
                Cancelar
              </Button>
              <Button variant="primary" onClick={handleAdd}>
                Guardar
              </Button>
            </Modal.Footer>
          </Modal>

          {nombre ? (
            <Modal show={show} onHide={() => setShow(!show)}>
              <Modal.Header closeButton>
                <Modal.Title>Editar</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group>
                    <Alert show={showAlert} variant={"success"}>
                      Guardado
                    </Alert>
                    <Form.Label>ISBN</Form.Label>
                    <Form.Control
                      type="text"
                      disabled
                      onChange={(e) => setIsbn(e.target.value)}
                      value={isbn}
                    />
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                      type="text"
                      onChange={(e) => setNombre(e.target.value)}
                      value={nombre}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Genero</Form.Label>
                    <Form.Control
                      as="select"
                      value={genero}
                      onChange={(e) => setGenero(e.target.value)}
                    >
                      {data.map((item, i) => (
                        <option key={i}>{item.genero}</option>
                      ))}
                    </Form.Control>
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Autor</Form.Label>
                    <Form.Control
                      type="text"
                      onChange={(e) => setAutor(e.target.value)}
                      value={autor}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Publicacion</Form.Label>
                    <br />
                    <input
                      onChange={(e) => setPublicacion(e.target.value)}
                      value={publicacion}
                      type="date"
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Check
                      checked={disponible}
                      onChange={(e) => setDisponible(!disponible)}
                      type="checkbox"
                      label="Disponible"
                    />
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Cancelar
                </Button>
                <Button variant="primary" onClick={saveUpdate}>
                  Guardar
                </Button>
              </Modal.Footer>
            </Modal>
          ) : null}
        </div>
      )}
    </div>
  );
}
