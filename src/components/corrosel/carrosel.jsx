import Carousel from 'react-bootstrap/Carousel';
;

export default function Carrosel(){
    return (
        <>
             <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://artwalk.vteximg.com.br/arquivos/ids/242310-1000-1000/Tenis-Nike-Air-Max-90-Feminino-Preto-6.jpg?v=637795097072470000"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://andaraki.fbitsstatic.net/img/p/tenis-nike-masculino-revolution-6-77972/308242-1.jpg?w=275&h=275&v=no-change&qs=ignore"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://artwalk.vteximg.com.br/arquivos/ids/242310-1000-1000/Tenis-Nike-Air-Max-90-Feminino-Preto-6.jpg?v=637795097072470000"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel> 
        </>
    )
}