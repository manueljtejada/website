interface PrismicText {
  html: string;
  text: string;
  raw: string;
}

interface PrismicUrl {
  url: string;
}

export interface ProjectType {
  id: string;
  uid: string;
  tags: string[];
  data: {
    title: PrismicText;
    content: PrismicText;
    publication_date: Date;
    project_url: PrismicUrl;
    image: any;
  };
}

export interface BlogPostType {
  id: string;
  uid: string;
  tags: string[];
  first_publication_date: Date;
  data: {
    title: PrismicText;
    content: PrismicText;
    image: any;
  };
}

export interface PrimsicAllQueryType<T> {
  nodes: T[];
}
