import { Helmet } from "react-helmet";

const PageHeader = ({ title }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sorobindu | {title}</title>
        <link
          rel="shortcut icon"
          href="https://cdn.icon-icons.com/icons2/931/PNG/512/star_favs_icon-icons.com_72395.png"
          type="image/x-icon"
        />
      </Helmet>
    </>
  );
};

export default PageHeader;
