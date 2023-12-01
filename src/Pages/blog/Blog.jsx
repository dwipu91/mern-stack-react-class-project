import PageHeader from "../../Component/PageHeader/PageHeader";
import "./blog.scss";
const Blog = () => {
  return (
    <>
      <PageHeader title={"Blog"} />
      <section className="blog_page">
        <div className="blog_item">
          <div className="left_imge">
            <img
              src="https://www.shutterstock.com/image-photo/blog-content-homepage-internet-website-260nw-536555710.jpg"
              alt=""
            />
          </div>
          <div className="right_text">
            <h5>Lorem ipsum dolor sit.</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              sint rem officiis eaque reiciendis in voluptatem voluptas
              similique accusamus earum. Ratione illum voluptates minus
              accusamus iste sequi, tempora ullam cupiditate.
            </p>
            <button className="btn btn-sm">Read More </button>
          </div>
        </div>
        <div className="blog_item">
          <div className="left_imge">
            <img
              src="https://www.shutterstock.com/image-photo/blogging-blog-word-coder-coding-260nw-520314613.jpg"
              alt=""
            />
          </div>
          <div className="right_text">
            <h5>Lorem ipsum dolor sit.</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              sint rem officiis eaque reiciendis in voluptatem voluptas
              similique accusamus earum. Ratione illum voluptates minus
              accusamus iste sequi, tempora ullam cupiditate.
            </p>
            <button className="btn btn-sm">Read More </button>
          </div>
        </div>
        <div className="blog_item">
          <div className="left_imge">
            <img
              src="https://img.freepik.com/free-photo/online-message-blog-chat-communication-envelop-graphic-icon-concept_53876-139717.jpg"
              alt=""
            />
          </div>
          <div className="right_text">
            <h5>Lorem ipsum dolor sit.</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              sint rem officiis eaque reiciendis in voluptatem voluptas
              similique accusamus earum. Ratione illum voluptates minus
              accusamus iste sequi, tempora ullam cupiditate.
            </p>
            <button className="btn btn-sm">Read More </button>
          </div>
        </div>
        <div className="blog_item">
          <div className="left_imge">
            <img
              src="https://www.webnode.com/blog/wp-content/uploads/2019/04/blog2.png"
              alt=""
            />
          </div>
          <div className="right_text">
            <h5>Lorem ipsum dolor sit.</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              sint rem officiis eaque reiciendis in voluptatem voluptas
              similique accusamus earum. Ratione illum voluptates minus
              accusamus iste sequi, tempora ullam cupiditate.
            </p>
            <button className="btn btn-sm">Read More </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
