// Use DBML to define your database structure
// Docs: https://dbml.dbdiagram.io/docs


Table users {
  id integer [primary key]
  email varchar
  password varchar
  name varchar
  role int
  avatar varchar
  phone varchar
  created_at datetime
  updated_at datatime
}

Table categories {
  id integer [primary key]
  name varchar
  image text
}

Table products {
  id integer [primary key]
  name varchar
  image text
  price int
  oldprice int
  description text
  specification text
  buyturn int // Luu so lan duoc mua
  quantity int
  brand_id int
  category_id int
  created_at datetime
  updated_at datatime
}

Ref: "categories"."id" < "products"."category_id"

Table brands {
  id integer [primary key]
  name varchar
  image text
}

Ref: "brands"."id" < "products"."brand_id"

Table feedbacks {
  id integer [primary key]
  product_id int
  user_id int
  star int
  content text
  created_at datetime
  updated_at datatime
}

Ref: "products"."id" < "feedbacks"."product_id"
Ref: "users"."id" < "feedbacks"."user_id"

Table orders {
  id integer [primary key]
  user_id int
  status int
  note text
  total int
  created_at datetime
  updated_at datatime
}

Ref: "users"."id" < "orders"."user_id"

Table order_details {
  id integer [primary key]
  order_id int
  product_id int
  price int
  quantity int
  created_at datetime
  updated_at datatime
}

Ref: "orders"."id" < "order_details"."order_id"
Ref: "products"."id" < "order_details"."product_id"

Table news {
  id integer [primary key]
  title varchar
  image text
  content text
  created_at datetime
  updated_at datatime
}

Table new_details {
  id integer [primary key]
  product_id int
  new_id int
  created_at datetime
  updated_at datatime
}

Ref: "news"."id" < "new_details"."new_id"
Ref: "products"."id" < "new_details"."product_id"

Table banner {
  id integer [primary key]
  name varchar
  image text
  status int
  created_at datetime
  updated_at datatime
}

Table banner_details {
  id integer [primary key]
  product_id int
  banner_id int
  created_at datetime
  updated_at datatime
}

Ref: "banner"."id" < "banner_details"."banner_id"
Ref: "products"."id" < "banner_details"."product_id"






