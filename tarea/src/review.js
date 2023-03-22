import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function NewReview() {
  return (
    <section class="content" >
        <div class="review-card" >
            <Form>
            <Form.Group className="mb-3" controlId="mail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="note">
                <Form.Label>Nota</Form.Label>
                <Form.Select defaultValue="Choose...">
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </Form.Select>
            </Form.Group>
            
            
            <Form.Group className="mb-3" controlId="review">
                <Form.Label>Comentarios</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
            
            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
            </div>
    </section>
  );
}

export default NewReview;