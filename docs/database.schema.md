## 📊 Database Diagram 

erDiagram
  products {
    int id PK
    varchar title
    text description
    float price
    float discount
    float rating
    boolean isProduct
    int category_id FK
  }

  product_images {
    int id PK
    int product_id FK
    varchar image_url
  }

  categories {
    int id PK
    varchar name
  }

  similar_products {
    int id PK
    int product_id FK
    int similar_product_id FK
  }

  comments {
    int id PK
    int product_id FK
    varchar name
    varchar email
    text message
    datetime created_at
    text admin_reply
  }

  favorites {
    int id PK
    int user_id FK
    int product_id FK
    varchar image_url
    varchar title
  }

  users {
    int id PK
    varchar name
    varchar email
    varchar profile_image
  }

  blogs {
    int id PK
    varchar title
    text content
    varchar role_creator
    datetime created_at
    varchar image_url
  }

  blog_comments {
    int id PK
    int blog_id FK
    varchar name
    text message
    datetime created_at
  }

  related_blogs {
    int id PK
    int blog_id FK
    int related_blog_id FK
  }

  filters {
    int id PK
    varchar name
    enum type
  }

  filter_options {
    int id PK
    int filter_id FK
    varchar value
  }

  product_filters {
    int id PK
    int product_id FK
    int filter_option_id FK
  }

  stories {
    int id PK
    int user_id FK
    varchar profile_image
    int view_count
    text description
    varchar call_me
    varchar unknown_image_part
  }

  story_products {
    int id PK
    int story_id FK
    int product_id FK
  }

  home_sections {
    int id PK
    enum type
    int product_id FK
  }

  -- Relationships
  products ||--o{ product_images : has
  products ||--o{ comments : has
  products ||--o{ favorites : saved_in
  products ||--o{ similar_products : has
  products ||--o{ product_filters : filtered_by
  products ||--o{ story_products : shown_in
  products ||--o{ home_sections : featured_in
  categories ||--|{ products : contains
  users ||--o{ comments : writes
  users ||--o{ favorites : has
  users ||--o{ stories : creates
  blogs ||--o{ blog_comments : has
  blogs ||--o{ related_blogs : links
  filters ||--o{ filter_options : includes
  filter_options ||--o{ product_filters : used_by
  stories ||--o{ story_products : showcases
