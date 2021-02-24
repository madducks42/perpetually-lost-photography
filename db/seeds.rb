# Seed Data

User.destroy_all
Blog.destroy_all

user_1 =
  User.create(
    first_name: 'Maddox',
    last_name: 'Grey',
    email: 'maddoxgrey42+admin@gmail.com',
    password: 'password',
    role: 'admin'
  )

blog_1 =
  Blog.create(
    title: 'Blog Article 1',
    caption: 'Blog Test Caption',
    image: 'https://perpetually-lost-prod.s3.amazonaws.com/costa-rica/Thumbnails/costarica-thumbnail-1.jpg',
    body: 'Blah blah blah',
    category: 'costa-rica',
    user: user_1
  )

  blog_2 =
  Blog.create(
    title: 'Blog Article 2',
    caption: 'Blog Test Caption',
    image: 'https://perpetually-lost-prod.s3.amazonaws.com/costa-rica/Thumbnails/costarica-thumbnail-10.jpg',
    body: 'Blah blah blah',
    category: 'costa-rica',
    user: user_1
  )

  blog_3 =
  Blog.create(
    title: 'Blog Article 3',
    caption: 'Blog Test Caption',
    image: 'https://perpetually-lost-prod.s3.amazonaws.com/costa-rica/Thumbnails/costarica-thumbnail-80.jpg',
    body: 'Blah blah blah',
    category: 'costa-rica',
    user: user_1
  )

  blog_4 =
  Blog.create(
    title: 'Blog Article 4',
    caption: 'Blog Test Caption',
    image: 'https://perpetually-lost-prod.s3.amazonaws.com/northeast/Thumbnails/northeast-thumbnail-20.jpg',
    body: 'Blah blah blah',
    category: 'northeast',
    user: user_1
  )

  blog_5 =
  Blog.create(
    title: 'Blog Article 5',
    caption: 'Blog Test Caption',
    image: 'https://perpetually-lost-prod.s3.amazonaws.com/northeast/Thumbnails/northeast-thumbnail-5.jpg',
    body: 'Blah blah blah',
    category: 'northeast',
    user: user_1
  )

  blog_6 =
  Blog.create(
    title: 'Blog Article 6',
    caption: 'Blog Test Caption',
    image: 'https://perpetually-lost-prod.s3.amazonaws.com/national-parks/Thumbnails/nationalparks-thumbnail-11.jpg',
    body: 'Blah blah blah',
    category: 'national-parks',
    user: user_1
  )

  blog_7 =
  Blog.create(
    title: 'Blog Article 7',
    caption: 'Blog Test Caption',
    image: 'https://perpetually-lost-prod.s3.amazonaws.com/national-parks/Thumbnails/nationalparks-thumbnail-8.jpg',
    body: 'Blah blah blah',
    category: 'national-parks',
    user: user_1
  )






