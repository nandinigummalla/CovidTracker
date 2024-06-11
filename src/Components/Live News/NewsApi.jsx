import React from "react";
import axios from "axios";
import { Col, Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import CardNews from "./CardNews";

export default class NewsApi extends React.Component {
  state = {
    news_array: [],
  };

  componentDidMount() {
    axios
      .get(
        "http://newsapi.org/v2/everything?q=covaxin&from=2021-01-01&sortBy=publishedAt&apiKey=b0d5f054dd5e484580b4e80afd986b8a"
      )
      .then((res) => {
        this.setState({ news_array: res.data.articles });
        console.log("news_array array", this.state.news_array);
      });
  }

  render() {
    let NewsCard = this.state.news_array.map((item) => {
      return (
        <Col
          class="col-sm-12 col-md-6 col-lg-4 "
          style={{ backgroundColor: "grey" }}
        >
          <CardNews
            title={item.title}
            urlToImage={item.urlToImage}
            author={item.author}
            newslink={item.url}
          />
        </Col>
      );
    });

    return <Container fluid>{<Row>{NewsCard}</Row>}</Container>;
  }
}
