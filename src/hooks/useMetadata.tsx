import { useStaticQuery, graphql } from "gatsby";

const useMetadata = () => {
  const data = useStaticQuery(METADATA_QUERY);
  const { title, description, socialLinks } = data.site.siteMetadata;

  console.log({ data: data.site });

  return { title, description, socialLinks };
};

const METADATA_QUERY = graphql`
  query MetadataQuery {
    site {
      siteMetadata {
        title
        description
        socialLinks {
          profile
          url
        }
      }
    }
  }
`;

export default useMetadata;
